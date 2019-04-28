const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = express.Router();
const User = require('../models/user.model');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const SecretKey = require('../configs/server.config');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

/* Tạo tài khoản. */
router.post('/register', (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { fullname, phone, password, province, district, typeOfAcc } = req.body;
  User.findOne({ phone: req.body.phone }).then(user => {
    if (user) {
      errors.phone = 'Phone already exists';
      return res.status(400).json(errors);
    }
    const newUser = new User({
      fullname,
      phone,
      address: {
        province,
        district
      },
      password,
      typeOfAcc
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) next(err);
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json({ success: true })) // fix trả về user
          .catch(err => console.log(err));
      });
    });
  });
});

// Login
router.post('/login', (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { phone, password } = req.body;

  // Find User by phone
  User.findOne({ phone }).then(user => {
    if (!user) {
      errors.phone = 'Phone not found!';
      return res.status(404).json(errors);
    }
    // Check password
    bcrypt.compare(password, user.password, (err, same) => {
      errors.password = 'Password incorrect!';
      if (!same) return res.status(400).json(errors);
      // User matched
      const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload
      // Sign Token
      jwt.sign(
        payload,
        SecretKey.secretOfKey,
        { expiresIn: 3600 },
        (err, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`
          });
        }
      ); // exprires token
    });
  });
});

module.exports = router;
