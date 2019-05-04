/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = data => {
  const errors = {};
  data.typeOf = !isEmpty(data.typeOf) ? data.typeOf : '';
  data.loan = !isEmpty(data.loan) ? data.loan : '';
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
  data.namePro = !isEmpty(data.namePro) ? data.namePro : '';
  data.brandPro = !isEmpty(data.brandPro) ? data.brandPro : '';
  data.yearPro = !isEmpty(data.yearPro) ? data.yearPro : '';
  data.MadeInPro = !isEmpty(data.MadeInPro) ? data.MadeInPro : '';
  data.describePro = !isEmpty(data.describePro) ? data.describePro : '';
  data.relName = !isEmpty(data.relName) ? data.relName : '';
  data.whatRels = !isEmpty(data.whatRels) ? data.whatRels : '';
  data.relPhone = !isEmpty(data.relPhone) ? data.relPhone : '';
  data.cmndPhoto = !isEmpty(data.cmndPhoto) ? data.cmndPhoto : '';
  data.householdPhoto = !isEmpty(data.householdPhoto)
    ? data.householdPhoto
    : '';
  data.propertyPhoto = !isEmpty(data.propertyPhoto) ? data.propertyPhoto : '';
  data.incomePhoto = !isEmpty(data.incomePhoto) ? data.incomePhoto : '';

  if (Validator.isEmpty(data.typeOf)) {
    errors.typeOf = 'typeOf field is required';
  }
  if (Validator.isEmpty(data.loan)) {
    errors.loan = 'loan field is required';
  }
  if (Validator.isEmpty(data.duration)) {
    errors.duration = 'duration field is required';
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
  }
  if (!Validator.isEmpty(data.email) && Validator.isEmail(data.email)) {
    errors.email = 'email field is invalid';
  }
  if (Validator.isEmpty(data.career)) {
    errors.career = 'career field is required';
  }
  if (Validator.isEmpty(data.income)) {
    errors.income = 'income field is required';
  }
  if (Validator.isEmpty(data.namePro)) {
    errors.namePro = 'namePro field is required';
  }
  if (Validator.isEmpty(data.brandPro)) {
    errors.brandPro = 'brandPro field is required';
  }
  if (Validator.isEmpty(data.yearPro)) {
    errors.yearPro = 'yearPro field is required';
  }
  if (Validator.isEmpty(data.MadeInPro)) {
    errors.MadeInPro = 'MadeInPro field is required';
  }
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
