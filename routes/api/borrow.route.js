const express = require('express');
const passport = require('passport');

const MortgageModel = require('../../models/mortgage.loan.model');
const PersonalModel = require('../../models/personal.loan.model');
const validateMortgageLoanInput = require('../../validation/mortgage.loan');
const validatePersonalLoanInput = require('../../validation/personal.loan');

const router = express.Router();

//  Lấy danh sách các đơn hiện tại của bản thân
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user.id;

    const mortgagePost = await MortgageModel.findOne({ user });
    const personalPost = await PersonalModel.findOne({ user });
    Promise.all([mortgagePost, personalPost])
      .then(val => res.json(val))
      .catch(err => console.log(err));
  }
);
// get đơn vay thế chấp
router.get('/mortgage', async (req, res) => {
  MortgageModel.find()
    .then(val => res.json(val))
    .catch(err => console.log(err));
});
// get đơn vay cá nhân
router.get('/personal', async (req, res) => {
  PersonalModel.find()
    .then(val => res.json(val))
    .catch(err => console.log(err));
});

// đăng bài vay thế chấp
router.post(
  '/mortgage',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateMortgageLoanInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    // Get fields
    const mortgageFields = {};

    const {
      typeOf,
      loan,
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
      bankName,
      bankID,
      namePro,
      brandPro,
      yearPro,
      MadeInPro,
      describePro,
      relName,
      whatRels,
      relPhone,
      cmndPhoto,
      householdPhoto,
      propertyPhoto,
      incomePhoto
    } = req.body;
    mortgageFields.user = req.user.id;
    if (typeOf) mortgageFields.typeOf = typeOf;
    if (loan) mortgageFields.loan = parseInt(loan, 10);

    mortgageFields.date = {
      duration,
      fromDate
    };
    mortgageFields.address = {
      province,
      district
    };

    mortgageFields.personalInfo = {
      gender,
      CMND,
      DateOfBirth,
      email
    };

    mortgageFields.careerInfo = {
      career,
      income,
      comName,
      comAddress,
      comPhone
    };

    mortgageFields.bank = {
      bankName,
      bankID
    };

    mortgageFields.property = {
      namePro,
      brandPro,
      yearPro,
      MadeInPro,
      describePro
    };

    mortgageFields.relatives = {
      relName,
      whatRels,
      relPhone
    };
    mortgageFields.censorship = {
      cmndPhoto: [...cmndPhoto],
      householdPhoto: [...householdPhoto],
      propertyPhoto: [...propertyPhoto],
      incomePhoto: [...incomePhoto]
    };

    try {
      // Create
      const newProfile = await new MortgageModel(mortgageFields).save();
      return res.json(newProfile);
    } catch (error) {
      console.log(error);

      return res.json('Unknown server error');
    }
  }
);

// Đăng bài vay cá nhân
router.post(
  '/personal',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validatePersonalLoanInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    // Get fields
    const personalFields = {};

    const {
      typeOf,
      loan,
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
      bankName,
      bankID,
      field1,
      field2,
      field3,
      field4,
      field5,
      areBorrowing,
      relName,
      whatRels,
      relPhone,
      cmndPhoto,
      householdPhoto,
      propertyPhoto,
      incomePhoto
    } = req.body;
    personalFields.user = req.user.id;
    if (typeOf) personalFields.typeOf = typeOf;
    if (loan) personalFields.loan = parseInt(loan, 10);
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

    personalFields.property = {
      field1,
      field2,
      field3,
      field4,
      field5,
      areBorrowing
    };
    personalFields.relatives = {
      relName,
      whatRels,
      relPhone
    };
    personalFields.censorship = {
      cmndPhoto: [...cmndPhoto],
      householdPhoto: [...householdPhoto],
      propertyPhoto: [...propertyPhoto],
      incomePhoto: [...incomePhoto]
    };

    try {
      // Create
      const newProfile = await new PersonalModel(personalFields).save();
      return res.json(newProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error', error);
    }
  }
);

// Update state cho bài đăng
router.post(
  '/:type/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { type, id } = req.params;
    const { state } = req.body;
    try {
      if (type === 'personal') {
        const perUpdate = await PersonalModel.findOneAndUpdate(
          { _id: id },
          { state },
          { new: true }
        );
        if (!perUpdate) {
          return res.status(404).json('PersonalModel not found for this ID');
        }
        return res.status(200).json(perUpdate);
      }
      if (type === 'mortgage') {
        const mortUpdate = await MortgageModel.findOneAndUpdate(
          { _id: id },
          { state },
          { new: true }
        );
        if (!mortUpdate) {
          return res.status(404).json('MortgageModel not found for this ID');
        }
        return res.status(200).json(mortUpdate);
      }
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);

module.exports = router;
