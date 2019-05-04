const mongoose = require('mongoose');

const { Schema } = mongoose;

// Vay cá nhân
const PersonalLoanSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  // chờ xét duyệt, đã mua, đã giải ngân, đã huỷ
  state: {
    type: String,
    required: true,
    enum: ['PENDING', 'PURCHASED', 'DISBURSED', 'CANCELED'],
    default: 'PENDING'
  },
  purchaser: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  // Giá một bài đăng
  price: {
    initial: {
      type: Number,
      default: 25000,
      required: true
    },
    discount: {
      type: Number,
      default: 1,
      required: true
    }
  },
  // Loại vay cá nhân
  typeOf: {
    type: String,
    required: true
  },
  // Số tiền vay
  loan: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    fromDate: {
      type: Date,
      default: Date.now()
    },
    duration: {
      type: String,
      required: true
    }
  },
  address: {
    province: {
      type: String,
      required: true
    }, // Tỉnh
    district: {
      type: String,
      required: true
    } // Huyện
  },
  personalInfo: {
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other']
    },
    CMND: {
      type: String
    },
    DateOfBirth: {
      type: Date,
      default: Date.now()
    },
    email: {
      type: String
    }
  },
  careerInfo: {
    // Công việc hiện tại
    career: String,
    // Thu nhập hiện tại
    income: String,
    // Thông tin của công ty
    comName: String,
    comAddress: String,
    comPhone: String
  },
  bank: {
    bankName: String,
    bankID: String
  },
  // Thông tin về tại sản cầm cố
  property: {
    // Vd về vay theo lương:

    // tên công ty
    field1: String,
    // thu nhập
    field2: String,
    // nghề nghiệp
    field3: String,
    // hình thức cư trú
    field4: String,
    // có giấy tờ gốc hay không
    field5: String,

    // có đang vay ở nơi khác hay không
    areBorrowing: String
  },
  relatives: {
    relName: String,
    whatRels: String,
    relPhone: String
  },
  censorship: {
    // Chứng minh thư nhân dân ID
    cmndPhoto: {
      type: Array,
      default: []
    },
    // ảnh hộ khẩu, cư trú
    householdPhoto: {
      type: Array,
      default: []
    },
    // ảnh tài sản
    propertyPhoto: {
      type: Array,
      default: []
    },
    // thu nhập
    incomePhoto: {
      type: Array,
      default: []
    }
  }
});
const PersonalLoan = mongoose.model('personalLoans', PersonalLoanSchema);
module.exports = PersonalLoan;
