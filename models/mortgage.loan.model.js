const mongoose = require('mongoose');

const { Schema } = mongoose;

// Vay thế chấp
const MortgageLoanSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
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
      type: Number,
      required: true
    }
  },
  address: {
    province: { type: String }, // Tỉnh
    district: { type: String } // Huyện
  },
  personalInfo: {
    gender: {
      type: String,
      required: true,
      enum: ['Male', 'Female', 'Other'],
      default: 'Other'
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
    cmndPhoto: { type: Array },
    // ảnh hộ khẩu, cư trú
    householdPhoto: Array,
    // ảnh tài sản
    propertyPhoto: Array,
    // thu nhập
    incomePhoto: { type: Array }
  }
});
const MortgageLoan = mongoose.model('mortgageLoans', MortgageLoanSchema);
module.exports = MortgageLoan;
