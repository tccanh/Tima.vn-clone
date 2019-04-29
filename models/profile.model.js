const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  // Thông tin chung
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
    default: 'Other'
  },
  DateOfBirth: {
    type: Date
    // required: true
  },
  avatar: {
    type: String
  },
  censorship: {
    // Chứng minh thư nhân dân ID
    identification: { type: String },
    // Ảnh chân dung
    portrait: { type: String }
  },

  // Details address
  address: {
    province: { type: String }, // Tỉnh
    district: { type: String }, // Huyện
    ward: { type: String }, // Phường
    details: { type: String } // Mô tả thêm
  },
  // Thông tin liên quan đến vay nợ

  // CÁC GÓI SẢN PHẨM BẠN NHẬN ĐƠN VAY
  //   Vay tín chấp theo lương
  //   Vay theo đăng ký xe máy
  //   Vay theo sổ hộ khẩu
  //   Vay theo đăng ký xe ô tô
  //   Vay trả góp theo ngày
  //   Cầm sổ đỏ nhà đất
  //   Vay theo hóa đơn điện nước
  packages: {
    type: Array,
    required: true
  },
  // Số dư trong tài khoản
  balance: { type: String, default: '0' },
  // Trạng thái tài khoản đã xác thực
  authenticated: {
    type: Boolean,
    default: false
  }
});
const Profile = mongoose.model('profiles', ProfileSchema);
module.exports = Profile;
