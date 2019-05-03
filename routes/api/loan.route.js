const express = require('express');
const passport = require('passport');

const MortgageModel = require('../../models/mortgage.loan.model');
const PersonalModel = require('../../models/personal.loan.model');

const router = express.Router();

// Tìm tất cả các bài
router.get('/', async (req, res) => {
  const mortgagePost = await MortgageModel.find();
  const personalPost = await PersonalModel.find();
  Promise.all([mortgagePost, personalPost])
    .then(val => res.json(val))
    .catch(err => console.log(err));
});

// Xem bài cụ thể
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
// xem tổng quan của bài viết

// get list những bài đã mua

// mua bài đăng này

// chuyển tiền

// giải ngân

// filter bài viết

// tra cứu người cần thuê dựa trên số điện thoại và số cmnd

module.exports = router;
