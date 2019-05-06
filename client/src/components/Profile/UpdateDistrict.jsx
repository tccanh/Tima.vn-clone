import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDistricts } from '../../utils/getVNdata';
class UpdateDistrict extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired
  };
  render() {
    return (
      <div
        className="tm-dtcv bg-white p-3 px-md-5 pb-md-5 pt-md-4"
        id="editDistrictSpice"
      >
        <h2 className="text-uppercase fs-16 fw-6 mb-0" id="idDistrictShowSpice">
          Các quận huyện bạn nhận hồ sơ
        </h2>

        <hr className="mb-3" />
        <div className="districtDiv form-group row">
          <div className="row">
            {getDistricts(this.props.profile.address.province).map(
              (val, key) => {
                return (
                  <label className="custom-control col-md-5" key={key}>
                    <input
                      value={val[0]}
                      name="chkEditSpice"
                      type="checkbox"
                      className="custom-control-input"
                    />
                    <span className="custom-control-indicator" />
                    <span
                      className="custom-control-description"
                      style={{ fontSize: '17px' }}
                    >
                      {val[1]}
                    </span>
                  </label>
                );
              }
            )}
          </div>
        </div>
        <div className="form-group">
          <div className="text-center">
            <button type="button" className="btn btn-warning">
              CẬP NHẬT TỈNH THÀNH
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
)(UpdateDistrict);
