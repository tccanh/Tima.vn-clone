/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = data => {
  const errors = {};

  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.DateOfBirth = !isEmpty(data.DateOfBirth) ? data.DateOfBirth : '';
  data.avatar = !isEmpty(data.avatar) ? data.avatar : '';
  data.identification = !isEmpty(data.identification)
    ? data.identification
    : '';
  data.portrait = !isEmpty(data.portrait) ? data.portrait : '';
  data.province = !isEmpty(data.province) ? data.province : '';
  data.district = !isEmpty(data.district) ? data.district : '';
  data.ward = !isEmpty(data.ward) ? data.ward : '';
  data.details = !isEmpty(data.details) ? data.details : '';
  //
  data.packages = !isEmpty(data.packages) ? data.packages : [];
  data.balance = !isEmpty(data.balance) ? data.balance : '';
  data.authenticated = !isEmpty(data.authenticated)
    ? data.authenticated
    : false;

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required';
  } else if (
    data.gender !== 'Male' &&
    data.gender !== 'Male' &&
    data.gender !== 'Other'
  ) {
    errors.gender = 'Gender is invalid';
  }
  // if (Validator.isEmpty(data.DateOfBirth)) {
  //   errors.DateOfBirth = 'Date of birth field is required';
  // }

  if (!Validator.isURL(data.avatar) && !Validator.isEmpty(data.avatar)) {
    errors.avatar = 'Avatar is invalid';
  }
  if (
    !Validator.isURL(data.identification) &&
    !Validator.isEmpty(data.identification)
  ) {
    errors.identification = 'Identification photo is invalid';
  }
  if (!Validator.isURL(data.portrait) && !Validator.isEmpty(data.portrait)) {
    errors.identification = 'Portrait photo is invalid';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
