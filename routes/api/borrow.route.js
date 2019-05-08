const express = require('express');
const passport = require('passport');

const PostModel = require('../../models/post.model');
const validatePostInput = require('../../validation/post');

const router = express.Router();

//  Lấy danh sách các đơn hiện tại của bản thân
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = req.user.id;
    PostModel.find({ user })
      .then(val => res.json(val))
      .catch(err => console.log(err));
  }
);

// get đơn vay
router.get('/', (req, res) => {
  PostModel.find()
    .then(val => res.json(val))
    .catch(err => console.log(err));
});

// Đăng bài vay
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    // Get fields
    const personalFields = {};

    const {
      typeOfLoan,
      loanNumber,
      fromDate,
      duration,
      province,
      district,
      gender,
      CMND,
      DateOfBirth,
      email,
      career,
      income,
      comName,
      comAddress,
      comPhone,
      property,
      bankName,
      bankID,
      relName,
      whatRels,
      relPhone,
      identification,
      householdPhoto,
      propertyPhoto,
      incomePhoto
    } = req.body;

    personalFields.user = req.user.id;
    personalFields.state = 'PENDING';
    // purchser, price don't set
    if (typeOfLoan) personalFields.typeOfLoan = typeOfLoan;
    if (loanNumber) personalFields.loanNumber = parseInt(loanNumber, 10);
    personalFields.date = {
      fromDate,
      duration
    };
    personalFields.address = {
      province,
      district
    };
    personalFields.personalInfo = {
      gender,
      CMND,
      DateOfBirth,
      email
    };

    personalFields.careerInfo = {
      career,
      income,
      comName,
      comAddress,
      comPhone
    };

    personalFields.bank = {
      bankName,
      bankID
    };
    // Yêu cầu là 1 string
    personalFields.property = property;

    personalFields.relatives = {
      relName,
      whatRels,
      relPhone
    };
    personalFields.censorship = {
      identification,
      householdPhoto,
      propertyPhoto,
      incomePhoto
    };

    try {
      // Create
      const newProfile = await new PostModel(personalFields).save();
      return res.json(newProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error', error);
    }
  }
);

// Update state cho bài đăng
router.post(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;
    try {
      const perUpdate = await PostModel.findOneAndUpdate(
        { _id: id },
        { state },
        { new: true }
      );
      if (!perUpdate) {
        return res.status(404).json('PersonalModel not found for this ID');
      }
      return res.status(200).json(perUpdate);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);

module.exports = router;
