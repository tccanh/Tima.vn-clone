/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './Post.scss';
// import Post1 from './Post1';
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';
import Post5 from './Post5';
import Post6 from './Post6';
import { getCurrentProfile } from '../../../actions/profile.action';
import { addPostValue } from '../../../actions/post.action';
const topProcess = [
  'ĐƠN VAY',
  'THÔNG TIN CÁ NHÂN',
  'VIỆC LÀM',
  'TÀI SẢN',
  'NGƯỜI THÂN',
  'HOÀN THÀNH'
];
export class Post extends Component {
  static propTypes = {
    getCurrentProfile: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 0,
      temp: {}
    };
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  handleNextPage() {
    let nowPage = this.state.pageNumber;
    if (nowPage === 5) {
      //Handle create Post
    } else {
      this.setState(oldState => ({
        pageNumber: oldState.pageNumber + 1
      }));
    }
  }
  handlePrePage() {
    let nowPage = this.state.pageNumber;
    if (nowPage !== 0) {
      this.setState(oldState => ({
        pageNumber: oldState.pageNumber - 1
      }));
    }
    // Don't handle anything.
  }
  render() {
    const { pageNumber } = this.state;
    let Contents;
    switch (pageNumber) {
      case 0: {
        Contents = <Post1 />;
        break;
      }
      case 1: {
        Contents = <Post2 />;
        break;
      }
      case 2: {
        Contents = <Post3 />;
        break;
      }
      case 3: {
        Contents = <Post4 />;
        break;
      }
      case 4: {
        Contents = <Post5 />;
        break;
      }
      case 5: {
        Contents = <Post6 />;
        break;
      }
      default:
        Contents = null;
    }
    return (
      <div className="w-xl-85 mx-auto">
        <div className="w-85 w-lg-66 mx-auto pb-6">
          <div style={{ height: '25px' }} />
          <div className="step">
            {topProcess.map((text, index) => {
              return (
                <div
                  className={classnames('step-item ', {
                    active: pageNumber === index
                  })}
                  key={index}
                >
                  <div className="step-item-text text-uppercase">{text}</div>
                </div>
              );
            })}
          </div>
        </div>
        {Contents}
        <div className="d-flex justify-content-between">
          <a
            className="btn btn-lg btn-gray-lighter px-md-6"
            onClick={() => this.handlePrePage()}
            style={{
              backgroundColor: '#d1d1d1',
              fontSize: '14px',
              marginBottom: '25px'
            }}
          >
            QUAY LẠI
          </a>
          <button
            onClick={() => this.handleNextPage()}
            className="btn btn-lg btn-warning text-white px-md-6 ml-auto"
            style={{ fontSize: '14px', marginBottom: '25px' }}
          >
            {pageNumber !== 5 ? 'TIẾP TỤC' : 'HOÀN THÀNH'}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getCurrentProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
