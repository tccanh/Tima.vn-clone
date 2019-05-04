const mongoose = require('mongoose');

const { Schema } = mongoose;

// Vay thế chấp
const MortgageLoanSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  // Trạng thái hiện tại của đơn vay
  state: {
    type: String,
    required: true,
    // enum: [],
    default: 'Chưa duyệt'
  },
  // Loaị thế chấp
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
    namePro: String,
    brandPro: String,
    yearPro: String,
    MadeInPro: String,
    describePro: String
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
const MortgageLoan = mongoose.model('mortgageLoans', MortgageLoanSchema);
module.exports = MortgageLoan;
