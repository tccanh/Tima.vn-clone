/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = data => {
  const errors = {};

  data.fullname = !isEmpty(data.fullname) ? data.fullname : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.province = !isEmpty(data.province) ? data.province : '';
  data.district = !isEmpty(data.district) ? data.district : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.typeOfAcc = !isEmpty(data.typeOfAcc) ? data.typeOfAcc : '';

  if (!Validator.isLength(data.fullname, { min: 2, max: 30 })) {
    errors.fullname = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.fullname)) {
    errors.fullname = 'Name field is required';
  }
  if (Validator.isEmpty(data.typeOfAcc)) {
    errors.typeOfAcc = 'Kind of account field is required';
  } else if (data.typeOfAcc !== 'loan' && data.typeOfAcc !== 'borrow') {
    errors.typeOfAcc = 'Kind of account is invalid';
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone field is required';
  }
  if (Validator.isEmpty(data.province)) {
    errors.province = 'Province field is required';
  }
  if (Validator.isEmpty(data.district)) {
    errors.district = 'District field is required';
  }
  //   } else if (!Validator.isEmail(data.phone)) {
  //     errors.phone = 'Email is invalid';
  //   }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
