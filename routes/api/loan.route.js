const express = require('express');
const passport = require('passport');

const UserModel = require('../../models/user.model');
const PostModel = require('../../models/post.model');
const BorrowProfileModel = require('../../models/borrow.profile.model');
const LoanProfileModel = require('../../models/loan.profile.model');

const router = express.Router();
// lọc những đơn khả thi trong những đơn của bản thân
// tiêu chí :Thành phố, quận huyện, thộc trong page đơn
router.get(
  '/foryou',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = req.user.id;
    const Profile = LoanProfileModel.findOne({ user }).then(userProfile => {
      if (!userProfile) {
        return null;
      }
      return userProfile;
    });
    Profile.then(value => {
      if (!value) return res.status(404).json('This user not found');
      const { packages } = value;
      const { province, district } = value.address;
      console.log({ packages, province, district });

      PostModel.find({
        typeOf: { $in: [...packages.mortgage] },
        state: 'PENDING',
        'address.province': province,
        'address.district': district
      })
        .populate('user')
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
            price: {
              ...mor.price
            },
            property: [...mor.property],
            careerInfo: mor.careerInfo
          }));

          return res.json(overviewMor);
        })
        .catch(err => console.log(err));
    });
  }
);

// Tìm tất cả các bài viết và cho xem tổng quan
router.get('/', (req, res) => {
  PostModel.find({ state: 'PENDING' })
    .populate('user')
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
        price: {
          ...mor.price
        },
        property: [...mor.property],
        careerInfo: mor.careerInfo
      }));

      return res.json(overviewMor);
    })
    .catch(err => console.log(err));
});

// Xem chi tiết bài đăng
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    try {
      const seeMortgage = await PostModel.findById(id);
      if (!seeMortgage) {
        return res.status(404).json('PostModel not found for this ID');
      }
      return res.status(200).json(seeMortgage);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);

// get list những bài đã mua
router.get('/purchased', (req, res) => {
  const purchaser = req.user.id;
  PostModel.findOne({ purchaser })
    .then(val => res.json(val))
    .catch(err => console.log(err));
});

// mua một bài đăng
router.post(
  '/purchase/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const purchaser = req.user.id;
    try {
      const mortUpdate = await PostModel.findOneAndUpdate(
        { _id: id },
        {
          purchaser,
          state: 'PURCHASED'
        },
        { new: true }
      );
      if (!mortUpdate) {
        return res.status(404).json('PostModel not found for this ID');
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
// Giải ngân ( chỉ có người đã mua mới có quyền đc giải ngân bài đăng)
router.post(
  '/disburse/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const purchaser = req.user.id;
    try {
      const mortUpdate = await PostModel.findOneAndUpdate(
        { _id: id, purchaser },
        {
          state: 'DISBURSED'
        },
        { new: true }
      );
      if (!mortUpdate) {
        return res.status(404).json('PostModel not found for this ID');
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
// huỷ đơn đã mua => chuyển thành pending và giá giảm còn 80%.
// (Chú ý: khác với người tạo huỷ đơn do họ tạo => state => canceled)
router.post(
  '/cancel/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const purchaser = req.user.id;
    try {
      const mortUpdate = await PostModel.findOneAndUpdate(
        { _id: id, purchaser },
        {
          state: 'PENDING',
          purchaser: null,
          'price.discount': 0.8
        },
        { new: true }
      );
      if (!mortUpdate) {
        return res.status(404).json('PostModel not found for this ID');
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
// filter bài viết

// tra cứu người cần thuê dựa trên số điện thoại hoặc số CMND
router.get('/lookup/:field', (req, res) => {
  const { field } = req.params;
  const { value } = req.body;
  if (field === 'PHONE') {
    UserModel.find({ phone: value }).then(val => {
      if (!val) {
        return res.status(400).json('User not found.');
      }
      PostModel.findOne({ user: val.id })
        .then(post => res.json(post))
        .catch(err => console.log(err));
    });
  }
  if (field === 'CMND') {
    BorrowProfileModel.findOne({ CMND: value }).then(val => {
      if (!val) {
        return res.status(400).json('User not found.');
      }
      PostModel.findOne({ user: val.user })
        .then(post => res.json(post))
        .catch(err => console.log(err));
    });
  }
});

module.exports = router;
