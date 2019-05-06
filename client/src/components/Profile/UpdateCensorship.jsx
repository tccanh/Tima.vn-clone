import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UpdateCensorship extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired
  };

  render() {
    return (
      <div id="UploadIdCard" className="uploadct bg-white p-md-5 pt-md-4 p-3">
        <h2 className="text-uppercase fs-16 fw-6 mb-0">Thông tin kiểm duyệt</h2>

        <hr className="border-gray mt-md-4 mt-3 mb-0" />

        <div className="uploadct-item">
          <div className="uploadct-item__header">
            <div className="upload btn-file mb-2">
              <div className="upload__icon">
                <span className="icon-id-card">
                  <span className="upload__icon-plus" />
                </span>
              </div>
              <div className="upload__text">Nhân thân</div>
            </div>

            <em className="text-gray-light fs-13">
              CMND, Hộ chiếu, Thẻ căn cước
            </em>
          </div>

          <div className="uploadct-item__body" id="divImgCardNumber">
            <div className="uploadct-item__img mr-5">
              <img
                className="img-fluid"
                src="https://rs.tima.vn/staticFile/img-affirmation/2019/5/2019523_photo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="uploadct-item">
          <div className="uploadct-item__header">
            <div className="upload btn-file mb-2">
              <div className="upload__icon">
                <span className="icon-accounts">
                  <span className="upload__icon-plus" />
                </span>
              </div>
              <div className="upload__text">Ảnh chân dung</div>
            </div>

            <em className="text-gray-light fs-13">Ảnh chụp chân dung</em>
          </div>

          <div className="uploadct-item__body" id="divImganhchandung" />
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
)(UpdateCensorship);
