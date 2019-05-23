import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';

function Alter(props) {
  return (
    <SweetAlert
      custom
      show={props.show || false}
      showCancel
      confirmBtnText="Đồng ý"
      cancelBtnText="Huỷ"
      confirmBtnBsStyle="danger"
      cancelBtnBsStyle="primary"
      title={props.title}
      onConfirm={() => props.onConfirm()}
      onCancel={() => props.onCancel()}
      onOutsideClick={() => props.onOutsideClick()}
    >
      <span>{props.text}</span>
    </SweetAlert>
  );
}

Alter.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Alter;
