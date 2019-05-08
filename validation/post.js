/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = data => {
  const errors = {};
  data.typeOfLoan = !isEmpty(data.typeOfLoan) ? data.typeOfLoan : '';
  data.loanNumber = !isEmpty(data.loanNumber) ? data.loanNumber : '';
  // data.fromDate = !isEmpty(data.fromDate) ? data.fromDate : '';
  data.duration = !isEmpty(data.duration) ? data.duration : '';
  data.province = !isEmpty(data.province) ? data.province : '';
  data.district = !isEmpty(data.district) ? data.district : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.CMND = !isEmpty(data.CMND) ? data.CMND : '';
  // // // data.DateOfBirth = !isEmpty(data.DateOfBirth) ? data.DateOfBirth : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.career = !isEmpty(data.career) ? data.career : '';
  data.income = !isEmpty(data.income) ? data.income : '';
  data.comName = !isEmpty(data.comName) ? data.comName : '';
  data.comAddress = !isEmpty(data.comAddress) ? data.comAddress : '';
  data.comPhone = !isEmpty(data.comPhone) ? data.comPhone : '';
  data.bankName = !isEmpty(data.bankName) ? data.bankName : '';
  data.bankID = !isEmpty(data.bankID) ? data.bankID : '';
  // data.field1 = !isEmpty(data.field1) ? data.field1 : '';
  // data.field2 = !isEmpty(data.field2) ? data.field2 : '';
  // data.field3 = !isEmpty(data.field3) ? data.field3 : '';
  // data.field4 = !isEmpty(data.field4) ? data.field4 : '';
  // data.field5 = !isEmpty(data.field5) ? data.field5 : '';
  data.relName = !isEmpty(data.relName) ? data.relName : '';
  data.whatRels = !isEmpty(data.whatRels) ? data.whatRels : '';
  data.relPhone = !isEmpty(data.relPhone) ? data.relPhone : '';
  data.identification = !isEmpty(data.identification)
    ? data.identification
    : '';
  data.householdPhoto = !isEmpty(data.householdPhoto)
    ? data.householdPhoto
    : '';
  data.propertyPhoto = !isEmpty(data.propertyPhoto) ? data.propertyPhoto : '';
  data.incomePhoto = !isEmpty(data.incomePhoto) ? data.incomePhoto : '';

  if (Validator.isEmpty(data.typeOfLoan)) {
    errors.typeOfLoan = 'typeOfLoan field is required';
  }
  if (Validator.isEmpty(data.loanNumber)) {
    errors.loanNumber = 'loanNumber field is required';
  }
  if (Validator.isEmpty(data.duration)) {
    errors.duration = 'duration field is required';
  } else if (!Validator.isNumeric(data.duration)) {
    errors.duration = 'duration field must be numeric';
  }
  if (Validator.isEmpty(data.province)) {
    errors.province = 'province field is required';
  }
  if (Validator.isEmpty(data.district)) {
    errors.district = 'district field is required';
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'gender field is required';
  }
  if (Validator.isEmpty(data.CMND)) {
    errors.CMND = 'CMND field is required';
  } else if (!Validator.isNumeric(data.CMND)) {
    errors.CMND = 'CMND field must be numeric';
  } else if (!Validator.isLength(data.CMND, { min: 9, max: 9 })) {
    errors.CMND = 'CMND field is invalid';
  }
  if (!Validator.isEmpty(data.email) && !Validator.isEmail(data.email)) {
    errors.email = 'email field is invalid';
  }
  if (Validator.isEmpty(data.career)) {
    errors.career = 'career field is required';
  }
  if (Validator.isEmpty(data.income)) {
    errors.income = 'income field is required';
  }

  // // Thiếu các field property ở đây
  // if (Validator.isEmpty(data.property)) {
  //   errors.property = 'property field is required';
  // }

  if (Validator.isEmpty(data.relName)) {
    errors.relName = 'relName field is required';
  }
  if (Validator.isEmpty(data.whatRels)) {
    errors.whatRels = 'whatRels field is required';
  }
  if (Validator.isEmpty(data.relPhone)) {
    errors.relPhone = 'relPhone field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
