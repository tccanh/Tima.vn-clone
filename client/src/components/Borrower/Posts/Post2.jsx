import React, { Component } from 'react';

export default class Post2 extends Component {
  render() {
    return (
      <div class="box-2 mb-3">
        <div class="box-2-header d-flex flex-column flex-md-row">
          <h2 class="box-2-title mb-md-0 mb-3">Thông tin cá nhân</h2>

          <div class="align-self-md-center ml-md-auto">
            <p
              class="fs-12 text-gray-light mb-1"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              Khả năng nhận được khoản vay
            </p>

            <div class="progress progress-style-1">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: '25%' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="progress-tooltip">25%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="box-2-body">
          <div class="form-group row">
            <label
              class="col-lg-3 col-form-label col-form-label-lg text-nowrap"
              for="fc-2"
              style={{ fontSize: '18px' }}
            >
              Giới tính
            </label>
            <div class="col-lg-9" style={{ marginTop: '13px' }}>
              <label style={{ marginRight: '30px' }}>
                <input name="agree" type="radio" />
                Nam
              </label>

              <label>
                <input name="agree" type="radio" />
                Nữ
              </label>
            </div>
          </div>

          <div class="form-group row">
            <label
              for="fc-6"
              class="col-lg-3 col-form-label col-form-label-lg text-nowrap"
              style={{ fontSize: '18px' }}
            >
              Số CMND
            </label>
            <div class="col-lg-9">
              <input
                type="text"
                class="form-control form-control-lg mr-3"
                id="txtCardNumber"
                name="txtCardNumber"
                disable=""
                placeholder="Số CMND"
              />
              <small class="text-muted">
                Lưu ý: Bạn sẽ không nhận được khoản vay nếu điền sai CMND
              </small>
            </div>
          </div>

          <div class="form-group row">
            <label
              for="fc-6"
              class="col-lg-3 col-form-label col-form-label-lg text-nowrap"
              style={{ fontSize: '18px' }}
            >
              Ngày/Tháng/Năm sinh
            </label>
            <div class="col-lg-9">
              <input
                type="text"
                class="form-control form-control-lg"
                id="txtBirthDay"
                name="txtBirthDay"
                placeholder="dd-MM-yyyy"
                value=""
              />
            </div>
          </div>

          <div class="form-group row">
            <label
              for="fc-7"
              class="col-lg-3 col-form-label col-form-label-lg text-nowrap"
              style={{ fontSize: '18px' }}
            >
              Email
            </label>
            <div class="col-lg-9">
              <input
                type="text"
                class="form-control form-control-lg"
                id="txtemail"
                name="txtemail"
                disable=""
                placeholder="Nhập địa chỉ Email"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
