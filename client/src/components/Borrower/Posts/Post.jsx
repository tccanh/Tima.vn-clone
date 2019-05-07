/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Post.scss';
import Post3 from './Post3';
import Post2 from './Post2';
import { Post4 } from './Post4';
import Post5 from './Post5';
import Post6 from './Post6';
export class Post extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="w-xl-85 mx-auto">
        <div className="w-85 w-lg-66 mx-auto pb-6">
          <div style={{ height: '25px' }} />
          <div className="step">
            <div className="step-item ">
              <div className="step-item-text text-uppercase">
                THÔNG TIN CÁ NHÂN
              </div>
            </div>
            <div className="step-item active">
              <div className="step-item-text text-uppercase">VIỆC LÀM</div>
            </div>
            <div className="step-item ">
              <div className="step-item-text text-uppercase">TÀI SẢN</div>
            </div>
            <div className="step-item ">
              <div className="step-item-text text-uppercase">NGƯỜI THÂN</div>
            </div>
            <div className="step-item ">
              <div className="step-item-text text-uppercase">HOÀN THÀNH</div>
            </div>
          </div>
        </div>
        {/* <Post2 /> */}
        {/* <Post3 /> */}
        {/* <Post4 /> */}
        {/* <Post5 /> */}
        <Post6 />
        <div className="d-flex justify-content-between">
          <a
            className="btn btn-lg btn-gray-lighter px-md-6"
            onclick="window.history.back();"
            href="#"
            style={{
              backgroundColor: '#d1d1d1',
              fontSize: '14px',
              marginBottom: '25px'
            }}
          >
            QUAY LẠI
          </a>
          <button
            onclick="gtag('event', 'STEP', { 'event_category': 'Create Loan Credit', 'event_label': 'STEP 2' })"
            className="btn btn-lg btn-primary text-white px-md-6 ml-auto"
            style={{ fontSize: '14px', marginBottom: '25px' }}
          >
            TIẾP TỤC
          </button>
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
)(Post);
