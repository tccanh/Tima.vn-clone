const express = require('express');

const passport = require('passport');

const validateProfileInput = require('../../validation/profile');

const router = express.Router();
const Profile = require('../../models/profile.model');
const User = require('../../models/user.model');

// Tạo hoặc sửa profile
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    // Get fields
    const profileFields = {};

    const {
      gender,
      DateOfBirth,
      avatar,
      identification,
      portrait,
      province,
      district,
      ward,
      details,
      packages
    } = req.body;
    profileFields.user = req.user.id;
    profileFields.gender = gender;
    profileFields.DateOfBirth = DateOfBirth;
    profileFields.avatar = avatar;
    profileFields.censorship = {
      identification,
      portrait
    };
    profileFields.address = {
      province,
      district,
      ward,
      details
    };
    profileFields.packages = packages;
    try {
      const oldProfile = await Profile.findOne({ user: req.user.id });
      if (oldProfile) {
        // Update
        const oldProfileUpdate = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(oldProfileUpdate);
      }
      // Create
      const newProfile = await new Profile(profileFields).save();
      return res.json(newProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);

// Xem profile của mình

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user.id;
    try {
      const thisProfile = await Profile.find({ user }).populate('user');
      return res.json(thisProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);
// Xoá tài khoản
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user.id;
    try {
      const thisProfile = await Profile.findOneAndRemove({ user });
      const thisUser = await User.findByIdAndRemove(user);

      if (!thisProfile) {
        return res.status(404).json('Not Found Profile Error');
      }
      if (!thisUser) {
        return res.status(404).json('Not Found User Error');
      }
      return res.status(204).json({ success: true }); // Status 204 is nocontent
    } catch (err) {
      return res.status(500).json('Unknown server error');
    }
  }
);
module.exports = router;
