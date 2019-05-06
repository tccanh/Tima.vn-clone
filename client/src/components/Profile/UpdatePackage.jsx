import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UpdatePackage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="tm-dtcv bg-white p-3 px-md-5 pb-md-5 pt-md-4">
        <h2 className="text-uppercase fs-16 fw-6 mb-0">
          Các gói sản phẩm bạn nhận đơn vay
        </h2>

        <hr className="mb-3" />
        <div className="form-group">
          <div className="row">
            <label className="custom-control col-md-5">
              <input
                value="1"
                name="chkEditSpice"
                type="checkbox"
                className="custom-control-input"
                onclick="updateProductSpice(1,0)"
              />
              <span className="custom-control-indicator" />
              <span
                className="custom-control-description"
                style={{ fontSize: '17px' }}
              >
                Vay t&#237;n chấp theo lương
              </span>
            </label>
            <label className="custom-control col-md-5">
              <input
                value="2"
                name="chkEditSpice"
                type="checkbox"
                className="custom-control-input"
                onclick="updateProductSpice(2,0)"
              />
              <span className="custom-control-indicator" />
              <span
                className="custom-control-description"
                style={{ fontSize: '17px' }}
              >
                Vay theo đăng k&#253; xe m&#225;y
              </span>
            </label>
            <label className="custom-control col-md-5">
              <input
                value="4"
                name="chkEditSpice"
                type="checkbox"
                className="custom-control-input"
                onclick="updateProductSpice(4,0)"
              />
              <span className="custom-control-indicator" />
              <span
                className="custom-control-description"
                style={{ fontSize: '17px' }}
              >
                Vay theo sổ hộ khẩu
              </span>
            </label>
            <label className="custom-control col-md-5">
              <input
                value="7"
                name="chkEditSpice"
                type="checkbox"
                className="custom-control-input"
                onclick="updateProductSpice(7,0)"
              />
              <span className="custom-control-indicator" />
              <span
                className="custom-control-description"
                style={{ fontSize: '17px' }}
              >
                Vay theo đăng k&#253; xe &#244; t&#244;
              </span>
            </label>
            <label className="custom-control col-md-5">
              <input
                value="8"
                name="chkEditSpice"
                type="checkbox"
                className="custom-control-input"
                onclick="updateProductSpice(8,1)"
              />
              <span className="custom-control-indicator" />
              <span
                className="custom-control-description"
                style={{ fontSize: '17px' }}
              >
                Vay trả g&#243;p theo ng&#224;y
              </span>
            </label>
            <label className="custom-control col-md-5">
              <input
                value="9"
                name="chkEditSpice"
                type="checkbox"
                className="custom-control-input"
                onclick="updateProductSpice(9,0)"
              />
              <span className="custom-control-indicator" />
              <span
                className="custom-control-description"
                style={{ fontSize: '17px' }}
              >
                Cầm sổ đỏ nh&#224; đất
              </span>
            </label>
            <label className="custom-control col-md-5">
              <input
                value="12"
                name="chkEditSpice"
                type="checkbox"
                className="custom-control-input"
                onclick="updateProductSpice(12,0)"
              />
              <span className="custom-control-indicator" />
              <span
                className="custom-control-description"
                style={{ fontSize: '17px' }}
              >
                Vay theo h&#243;a đơn điện nước
              </span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="text-center">
            <button
              type="button"
              className="btn btn-warning"
              onclick="UpdateSpices()"
            >
              CẬP NHẬT GÓI SẢN PHẨM MỚI
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePackage);
