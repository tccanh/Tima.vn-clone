const express = require('express');
const passport = require('passport');

const MortgageModel = require('../../models/mortgage.loan.model');
const PersonalModel = require('../../models/personal.loan.model');
const validateMortgageLoanInput = require('../../validation/mortgage.loan');
const validatePersonalLoanInput = require('../../validation/personal.loan');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

//
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
    mortgageFields.typeOf = typeOf;
    mortgageFields.loan = loan;
    mortgageFields.date.fromDate = fromDate;
    mortgageFields.date.duration = duration;
    mortgageFields.address.province = province;
    mortgageFields.address.district = district;

    mortgageFields.personalInfo.gender = gender;
    mortgageFields.personalInfo.CMND = CMND;
    mortgageFields.personalInfo.DateOfBirth = DateOfBirth;
    mortgageFields.personalInfo.email = email;

    mortgageFields.careerInfo.career = career;
    mortgageFields.careerInfo.income = income;
    mortgageFields.careerInfo.comName = comName;
    mortgageFields.careerInfo.comAddress = comAddress;
    mortgageFields.careerInfo.comPhone = comPhone;

    mortgageFields.bank.bankName = bankName;
    mortgageFields.bank.bankID = bankID;

    mortgageFields.property.namePro = namePro;
    mortgageFields.property.brandPro = brandPro;
    mortgageFields.property.yearPro = yearPro;
    mortgageFields.property.MadeInPro = MadeInPro;
    mortgageFields.property.describePro = describePro;

    mortgageFields.relatives.relName = relName;
    mortgageFields.relatives.whatRels = whatRels;
    mortgageFields.relatives.relPhone = relPhone;

    mortgageFields.censorship.cmndPhoto = cmndPhoto;
    mortgageFields.censorship.householdPhoto = householdPhoto;
    mortgageFields.censorship.propertyPhoto = propertyPhoto;
    mortgageFields.censorship.incomePhoto = incomePhoto;

    try {
      // Create
      const newProfile = await new MortgageModel(mortgageFields).save();
      return res.json(newProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);

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
    personalFields.typeOf = typeOf;
    personalFields.loan = loan;
    personalFields.date.fromDate = fromDate;
    personalFields.date.duration = duration;
    personalFields.address.province = province;
    personalFields.address.district = district;

    personalFields.personalInfo.gender = gender;
    personalFields.personalInfo.CMND = CMND;
    personalFields.personalInfo.DateOfBirth = DateOfBirth;
    personalFields.personalInfo.email = email;

    personalFields.careerInfo.career = career;
    personalFields.careerInfo.income = income;
    personalFields.careerInfo.comName = comName;
    personalFields.careerInfo.comAddress = comAddress;
    personalFields.careerInfo.comPhone = comPhone;

    personalFields.bank.bankName = bankName;
    personalFields.bank.bankID = bankID;

    personalFields.property.field1 = field1;
    personalFields.property.field2 = field2;
    personalFields.property.field3 = field3;
    personalFields.property.field4 = field4;
    personalFields.property.field5 = field5;
    personalFields.property.areBorrowing = areBorrowing;

    personalFields.relatives.relName = relName;
    personalFields.relatives.whatRels = whatRels;
    personalFields.relatives.relPhone = relPhone;

    personalFields.censorship.cmndPhoto = cmndPhoto;
    personalFields.censorship.householdPhoto = householdPhoto;
    personalFields.censorship.propertyPhoto = propertyPhoto;
    personalFields.censorship.incomePhoto = incomePhoto;

    try {
      // Create
      const newProfile = await new PersonalModel(personalFields).save();
      return res.json(newProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);
module.exports = router;
