const mongoose = require('mongoose');

const { Schema } = mongoose;
// Tài khoản dành cho người vay tiền
const BorrowProfileSchema = new Schema({
  // Thông tin chung
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  avatar: {
    type: String
  },
  CMND: {
    type: String
  },
  income: String,

  DateOfBirth: {
    type: Date,
    default: Date.now()
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
    default: 'Other'
  },
  email: {
    type: String
  },
  address: {
    province: { type: String }, // Tỉnh
    district: { type: String }, // Huyện
    ward: { type: String }, // Phường
    details: { type: String } // Mô tả thêm
  },
  career: {
    type: String
  },
  company: {
    comName: String,
    comAddress: String,
    comPhone: String
  },
  relatives: {
    relName: String,
    whatRels: String,
    relPhone: String
  },
  // chỉ lưu ảnh
  censorship: {
    // Chứng minh thư nhân dân ID
    cmndPhoto: { type: Array },
    // Ảnh chân dung
    portraitPhoto: { type: Array },
    // thu nhập
    incomePhoto: { type: Array }
  },
  // Trạng thái tài khoản đã xác thực
  authenticated: {
    type: Boolean,
    default: false
  }
});
const Profile = mongoose.model('borrowprofiles', BorrowProfileSchema);
module.exports = Profile;
