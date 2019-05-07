import React, { Component } from 'react';

export default class Post5 extends Component {
  render() {
    return (
      <div class="box-2 mb-3">
        <div class="box-2-header d-flex flex-column flex-md-row">
          <h2 class="box-2-title mb-md-0 mb-3">Thông tin người thân</h2>

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
                style={{ width: '75%' }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="progress-tooltip">75%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="box-2-body">
          <div class="form-group row">
            <label
              for="fc-1"
              class="col-lg-2 col-form-label col-form-label-lg text-nowrap"
              style={{ fontSize: '18px' }}
            >
              Họ và tên
            </label>
            <div class="col-lg-10">
              <input
                type="text"
                class="form-control form-control-lg"
                id="FullNameFamily"
                disable=""
                name="FullNameFamily"
                placeholder="Họ và tên"
              />
            </div>
          </div>

          <div class="form-group row">
            <label
              for="fc-2"
              class="col-lg-2 col-form-label col-form-label-lg text-nowrap"
              style={{ fontSize: '18px' }}
            >
              Quan hệ nhân thân
            </label>
            <div class="col-lg-10">
              <select
                id="slFamily"
                name="slFamily"
                class="form-control form-control-lg fs-13 px-3 rounded"
              >
                <option value="1"> Chồng / Vợ </option>
                <option value="2"> Mẹ </option>
                <option value="3"> Bố </option>
                <option value="4"> Anh / Em trai </option>
                <option value="5"> Chị / Em gái </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label
              for="fc-7"
              class="col-lg-2 col-form-label col-form-label-lg text-nowrap"
              style={{ fontSize: '18px' }}
            >
              Số điện thoại
            </label>
            <div class="col-lg-10">
              <input
                type="text"
                class="form-control form-control-lg"
                id="txtPhoneFamily"
                name="txtPhoneFamily"
                disable=""
                placeholder="Nhập số điện thoại người thân"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
