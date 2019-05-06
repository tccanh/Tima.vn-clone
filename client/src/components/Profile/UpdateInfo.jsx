import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UpdateInfo extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="accinfo-2">
        <div className="row mb-3">
          <div className="row col-xl-12">
            <div className="col-xl-6">
              <div className="form-group row">
                <label
                  for="slTypeLenderRegister"
                  className="col-sm-4 col-form-label text-sm-right"
                >
                  Bạn là:
                </label>
                <div className="col-xl-8 col-sm-7">
                  <select
                    className="form-control"
                    id="slTypeLenderRegister"
                    disabled="disabled"
                  >
                    <option value="0" />
                    <option value="1" selected>
                      Tín dụng cá nhân
                    </option>
                    <option value="2">Nhân Viên Ngân Hàng</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row col-xl-12">
            <div className="col-xl-6">
              <div className="form-group row">
                <label
                  for="txtFullName"
                  className="col-sm-4 col-form-label text-sm-right"
                >
                  Họ & Tên:
                </label>
                <div className="col-xl-8 col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id="txtFullName"
                    placeholder=""
                    disabled="disabled"
                    value="Nguyễn Huy Ho&#224;ng"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="form-group row">
                <label
                  for="txtPhone"
                  className="col-sm-4 col-form-label text-sm-right"
                >
                  Điện thoại:
                </label>
                <div className="col-xl-8 col-sm-7">
                  <input
                    type="tel"
                    className="form-control"
                    id="txtPhone"
                    placeholder=""
                    disabled="disabled"
                    value="0854911798"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row col-xl-12">
            <div className="col-xl-6">
              <div className="form-group row">
                <label
                  for="slGender"
                  className="col-sm-4 col-form-label text-sm-right"
                >
                  Giới tính:
                </label>
                <div className="col-xl-8 col-sm-7">
                  <select
                    className="form-control"
                    id="slGender"
                    disabled="disabled"
                  >
                    <option value="0" selected>
                      Nam
                    </option>
                    <option value="1">Nữ</option>
                    <option value="2">Khác</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="form-group row">
                <label
                  for="cbCity"
                  className="col-sm-4 col-form-label text-sm-right"
                >
                  Thành phố:
                </label>
                <div className="col-xl-8 col-sm-7">
                  <select
                    className="form-control"
                    id="cbCity"
                    disabled="disabled"
                  >
                    <option value="2"> H&#224; Giang </option>
                    <option value="4"> Cao Bằng </option>
                    <option value="6"> Bắc Kạn </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row col-xl-12">
            <div className="col-xl-6">
              <div className="form-group row">
                <label
                  for="cbDistrict"
                  className="col-sm-4 col-form-label text-sm-right"
                >
                  Quận/Huyện:
                </label>
                <div className="col-xl-8 col-sm-7">
                  <select
                    className="form-control"
                    id="cbDistrict"
                    disabled="disabled"
                  >
                    <option value="" />
                    <option value="282"> Mỹ Đức </option>
                    <option value="974"> Unknow </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="form-group row">
                <label
                  for="cbWard"
                  className="col-sm-4 col-form-label text-sm-right"
                >
                  Phường/Xã:
                </label>
                <div className="col-xl-8 col-sm-7">
                  <select
                    className="form-control"
                    id="cbWard"
                    disabled="disabled"
                  >
                    <option value="" />
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row col-xl-12">
            <div className="col-xl-12">
              <div className="form-group row">
                <label
                  for="txtAddress"
                  className="col-xl-2 col-sm-4 col-form-label text-sm-right"
                >
                  Địa chỉ:
                </label>
                <div className="col-xl-10 col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id="txtAddress"
                    placeholder=""
                    disabled="disabled"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <input
            type="button"
            id="btnUpdateInfoLender"
            data-id="34474"
            data-cmd="enable-form"
            className="btn btn-warning mx-auto text-uppercase"
            value="Thay đổi thông tin"
          />
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
)(UpdateInfo);
