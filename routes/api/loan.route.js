const express = require('express');
const passport = require('passport');

const UserModel = require('../../models/user.model');
const BorrowProfileModel = require('../../models/borrow.profile.model');
const MortgageModel = require('../../models/mortgage.loan.model');
const PersonalModel = require('../../models/personal.loan.model');
const LoanProfileModel = require('../../models/loan.profile.model');

const router = express.Router();

// Tìm tất cả các bài viết và cho xem tổng quan
router.get('/', async (req, res) => {
  const mortgagePost = await MortgageModel.find().populate('user');
  const personalPost = await PersonalModel.find().populate('user');
  Promise.all([mortgagePost, personalPost])
    .then(val => {
      const overviewMor = val[0].map(mor => ({
        info: {
          fullname: mor.user.fullname,
          phone: mor.user.phone,
          loan: mor.loan,
          duration: mor.date.duration,
          address: mor.address,
          typeOf: mor.typeOf,
          CMND: mor.personalInfo.CMND
        },
        property: {
          ...mor.property
        },
        careerInfo: { ...mor.careerInfo }
      }));
      const overviewPer = val[1].map(per => ({
        info: {
          fullname: per.user.fullname,
          phone: per.user.phone,
          loan: per.loan,
          duration: per.date.duration,
          address: per.address,
          typeOf: per.typeOf,
          CMND: per.personalInfo.CMND
        },
        property: {
          ...per.property
        },
        careerInfo: { ...per.careerInfo }
      }));
      res.json({
        mortgage: overviewMor,
        personal: overviewPer
      });
    })
    .catch(err => console.log(err));
});

// Xem chi tiết bài đăng
router.get(
  '/:type/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const { type, id } = req.params;
    try {
      if (type === 'personal') {
        const seePersonal = await PersonalModel.findById(id);
        if (!seePersonal) {
          return res.status(404).json('PersonalModel not found for this ID');
        }
        return res.status(200).json(seePersonal);
      }
      if (type === 'mortgage') {
        const seeMortgage = await MortgageModel.findById(id);
        if (!seeMortgage) {
          return res.status(404).json('MortgageModel not found for this ID');
        }
        return res.status(200).json(seeMortgage);
      }
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);

// get list những bài đã mua

// mua bài đăng này

// Update state cho bài đăng

// fake chuyển tiền

router.post(
  '/recharge/fake/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const amount = parseInt(req.body.amount, 10);
    try {
      const mortUpdate = await LoanProfileModel.findOneAndUpdate(
        { _id: id },
        { balance: amount },
        { new: true }
      );
      if (!mortUpdate) {
        return res.status(404).json('LoanProfileModel not found for this ID');
      }
      return res.status(200).json(mortUpdate);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);
// giải ngân

// filter bài viết

// tra cứu người cần thuê dựa trên số điện thoại hoặc số CMND
router.get('/lookup/:field', (req, res) => {
  const { field } = req.params;
  const { value } = req.body;
  if (field === 'phone') {
    UserModel.findOne({ phone: value }).then(async val => {
      if (!val) {
        return res.status(400).json('User not found.');
      }
      const mortgagePost = await MortgageModel.findOne({ user: val.id });
      const personalPost = await PersonalModel.findOne({ user: val.id });
      return Promise.all([mortgagePost, personalPost])
        .then(post => res.json(post))
        .catch(err => console.log(err));
    });
  }
  if (field === 'CMND') {
    BorrowProfileModel.findOne({ CMND: value }).then(async val => {
      if (!val) {
        return res.status(400).json('User not found.');
      }
      const mortgagePost = await MortgageModel.findOne({ user: val.user });
      const personalPost = await PersonalModel.findOne({ user: val.user });
      return Promise.all([mortgagePost, personalPost])
        .then(post => res.json(post))
        .catch(err => console.log(err));
    });
  }
});

module.exports = router;
