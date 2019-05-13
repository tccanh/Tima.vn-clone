import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Post4 extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    const { pageNumber, handleNextPage, handlePrePage } = this.props;
    return (
      <>
        <div class="box-2 mb-3">
          <div class="box-2-header d-flex flex-column flex-md-row">
            <h2 class="box-2-title mb-md-0 mb-3">Thông tin tài sản</h2>

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
                  style={{ width: '55%' }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span class="progress-tooltip">55%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="box-2-body">
            <div class="form-group row">
              <label
                for="attr_4"
                class="col-lg-3 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Tiền điện tháng gần nhất
              </label>
              <div class="col-lg-9">
                <input
                  id="attr_4"
                  name="attr_4"
                  type="text"
                  class="col-md-12 form-control form-control-lg fs-14 px-3"
                  onkeyup="reformatText(this)"
                  placeholder="Tiền điện tháng gần nhất"
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="attr_1018"
                class="col-lg-3 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Hình thức cư trú
              </label>
              <div class="col-lg-9">
                <select
                  class="form-control form-control-lg fs-13 px-3 rounded"
                  id="attr_1018"
                  name="attr_1018"
                >
                  <option value="">Chọn Hình thức cư trú </option>
                  <option value="89"> Ở nhà riêng </option>
                  <option value="90"> Ở với gia đình </option>
                  <option value="91"> Nhà đi thuê </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="attr_1019"
                class="col-lg-3 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Có giấy tờ gốc hay không
              </label>
              <div class="col-lg-9">
                <select
                  class="form-control form-control-lg fs-13 px-3 rounded"
                  id="attr_1019"
                  name="attr_1019"
                >
                  <option value="">Chọn Có giấy tờ gốc hay không </option>
                  <option value="92"> Có giấy tờ gốc </option>
                  <option value="93"> Giấy tờ photo </option>
                  <option value="94"> Không có </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="attr_1020"
                class="col-lg-3 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Bạn có đang vay ở đâu không
              </label>
              <div class="col-lg-9">
                <select
                  class="form-control form-control-lg fs-13 px-3 rounded"
                  id="attr_1020"
                  name="attr_1020"
                >
                  <option value="">Chọn Bạn có đang vay ở đâu không </option>
                  <option value="95"> Đang vay ngân hàng </option>
                  <option value="96"> Đang vay ngoài </option>
                  <option value="97"> Đang vay cty tài chính </option>
                  <option value="98"> Không vay ở đâu </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <a
            className="btn btn-lg btn-gray-lighter px-md-6"
            onClick={() => handlePrePage()}
            style={{
              backgroundColor: '#d1d1d1',
              fontSize: '14px',
              marginBottom: '25px'
            }}
          >
            QUAY LẠI
          </a>
          <button
            onClick={() => handleNextPage()}
            className="btn btn-lg btn-warning text-white px-md-6 ml-auto"
            style={{ fontSize: '14px', marginBottom: '25px' }}
          >
            {pageNumber !== 5 ? 'TIẾP TỤC' : 'HOÀN THÀNH'}
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post4);
