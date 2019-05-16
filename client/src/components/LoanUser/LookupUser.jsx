import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LookupUser extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="container py-5">
        <div class="tm-about bg-white py-5 py-md-5 py-xl-6 px-xl-0">
          <div class="px-3 px-md-5 px-xl-8 w-lg-75 mx-auto">
            <h3 class="text-center fw-3 fs-30 mb-3">
              Chức năng tra cứu lịch sử vay nợ
            </h3>
            <div class="text-gray-light mb-2 fs-14">
              Tính năng này giúp cho bạn biết được KH đã vay mượn ở đâu hay
              chưa? Tình trạng của các khoản vay đó như thế nào? Từ đó, giúp cho
              Bạn và Người Đang Cho Vay tránh được rủi ro nợ xấu không đáng có
            </div>
            <div class="text-gray-light mb-5 fs-14 text-center">
              Phí <span class="badge badge-success fs-12">2.000đ</span> cho mỗi
              lần kiểm tra không có kết quả,{' '}
              <span class="badge badge-success fs-12">10.000đ</span> cho mỗi lần
              kiểm tra thành công!
            </div>

            <form
              id="frmCheckCIC"
              class="tima-search mx-auto px-md-6"
              novalidate="novalidate"
            >
              <div class="row mb-5 text-gray-light flex-column flex-sm-row">
                <div class="col-sm-5 form-group mb-10">
                  <label for="search-fc-1">Số điện thoại:</label>
                  <div class="md-style md-style-icon">
                    <input
                      type="tel"
                      class="form-control"
                      id="txtPhone"
                      name="txtPhone"
                      placeholder="Nhập số điện thoại"
                      value=""
                    />
                    <i
                      class="form-control-icon icon-phone-gray-sm"
                      deluminate_imagetype="png"
                    />
                  </div>
                </div>
                <div class="col-sm-2 hidden-xs-down d-flex align-items-center justify-content-center px-4 py-5 pb-sm-0">
                  Hoặc
                </div>
                <div class="col-sm-5 form-group mb-10">
                  <label for="search-fc-2">Số CMND:</label>
                  <div class="md-style md-style-icon">
                    <input
                      type="number"
                      class="form-control"
                      name="txtCardNumber"
                      id="txtCardNumber"
                      placeholder="Nhập số CMND"
                      value=""
                    />
                    <i
                      class="form-control-icon icon-card-gray-sm"
                      deluminate_imagetype="png"
                    />
                  </div>
                </div>
              </div>
              <button
                onclick="CheckCIC();"
                type="button"
                class="btn btn-lg btn-block btn-warning justify-content-center align-items-center"
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <hr class="my-6" />
          <div class="px-3 px-md-5 px-xl-8" id="CICResult" />
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
)(LookupUser);
