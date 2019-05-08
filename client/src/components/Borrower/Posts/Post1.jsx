import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Post1.scss';
class Post1 extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="box-2 mb-3">
        <div className="box-2-header d-flex flex-column flex-md-row">
          <h2 className="box-2-title mb-md-0 mb-3">Thông tin việc làm</h2>

          <div className="align-self-md-center ml-md-auto">
            <p
              className="fs-12 text-gray-light mb-1"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              Khả năng nhận được khoản vay
            </p>

            <div className="progress progress-style-1">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '40%' }}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="progress-tooltip">40%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2-body">
          <form
            id="frmLoan"
            method="post"
            action="/Borrower/RegisterLoanCredit"
            novalidate="novalidate"
          >
            <div
              class="tm-cv__body bg-white fs-14"
              style={{ width: 'auto', height: 'auto' }}
            >
              <div class="p-lg-5 p-3">
                <div class="row">
                  <div class="col-md-8 mb-3 mb-md-0">
                    <div style={{ height: '15px' }} />
                    <div className="form-group row">
                      <label
                        for="fc-5"
                        className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                        style={{ fontSize: '18px' }}
                      >
                        Số tiền
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="txtcompany"
                          name="txtcompany"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        for="fc-5"
                        className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                        style={{ fontSize: '18px' }}
                      >
                        Thời hạn
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="txtcompany"
                          name="txtcompany"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <p
                      class="text-gray"
                      style={{
                        fontSize: '12px',
                        marginBottom: '.23438rem!important',
                        fontWeight: '500',
                        marginLeft: '54px'
                      }}
                    >
                      Tima tư vấn gói vay tín chấp theo lương khoản vay đến 50
                      triệu. Kỳ hạn thanh toán đến 90 ngày. Kỳ thanh toán 10, 15
                      hoặc 30 ngày KH tùy chọn. Chi tiết liên hệ
                      <a class="text-gray" href="tel:1900633688">
                        1900 633 688
                      </a>
                    </p>

                    <div
                      style={{
                        fontSize: '15px',
                        color: '#ffbb38',
                        marginLeft: '54px'
                      }}
                      class="text-gray mb-3"
                    >
                      <input
                        type="checkbox"
                        name="chkDieuKhoan"
                        id="chkDieuKhoan"
                        checked=""
                      />
                      <label for="chkDieuKhoan">
                        {' '}
                        <a
                          href="/Dieu-Khoan-Nguoi-Vay.html"
                          style={{
                            marginLeft: '10px',
                            color: '#ffbb38'
                          }}
                        >
                          {' '}
                          Điều khoản
                        </a>{' '}
                        đăng ký khoản vay{' '}
                      </label>
                    </div>
                  </div>

                  <div class="col-md-4 d-flex flex-column">
                    <div style={{ height: '20px' }} />
                    <div class="form-group mb-2">
                      <input
                        class="form-control fs-14"
                        type="text"
                        placeholder="Họ và tên"
                        name="application_full_name"
                        id="application_full_name"
                        readonly
                        value="Nguyễn Huy Ho&#224;ng"
                      />
                    </div>

                    <div class="form-group mb-2">
                      <input
                        class="form-control fs-14"
                        type="tel"
                        placeholder="Số điện thoại"
                        id="application_mobile_phone"
                        name="application_mobile_phone"
                        readonly
                        value="0854911798"
                      />
                    </div>

                    <div class="form-group">
                      <select
                        class="form-control form-control-lg fs-13 px-3 rounded"
                        id="cbCity"
                        name="city"
                      >
                        <option value="" selected hidden>
                          Chọn thành phố
                        </option>
                        <option value="1">H&#224; Nội</option>
                        <option value="75">Đồng Nai</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select
                        class="select optional form-control input-lg fs-14"
                        id="cbDistrict"
                        name="district"
                      >
                        <option value="973" data-cityId="96">
                          Ngọc Hiển
                        </option>
                        <option value="974" data-cityId="1">
                          Unknow
                        </option>
                      </select>
                    </div>

                    <div class="input-group mb-0">
                      <button class="btn btn-lg btn-block btn-warning rounded text-uppercase fs-14 py-3">
                        <span class="d-flex align-items-center justify-content-between">
                          <i />
                          <span>Vay ngay</span>
                          <i class="icon-angle-right" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gray-lightest text-gray-light">
                <div class="row no-gutters border-top">
                  <div class="col-sm-6 text-center border-right py-10px">
                    Khoản vay
                    <div class="fs-18 fw-6">
                      <span id="slider-num-3">10,000,000</span>
                      VNĐ
                    </div>
                  </div>

                  <div class="col-sm-6 text-center border-right py-10px">
                    Ngày thanh toán
                    <div class="fs-18 fw-6">
                      <span class="text-gray-dark" id="payDate">
                        02.06.2019
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
)(Post1);
