/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInputPost from '../../../HOC/TextInputPost';
import { updatePost } from '../../../actions/post.action';
import { getCurrentProfile } from '../../../actions/profile.action';
export class Post1 extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);

    this.state = {
      gender: '',
      CMND: '',
      DateOfBirth: '',
      email: '',
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      console.log(nextProps.errors);
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile && nextProps.profile.profile) {
      const { profile } = nextProps.profile;
      console.log(profile);
      this.setState({
        gender: profile.gender && profile.gender,
        CMND: profile.CMND && profile.CMND,
        DateOfBirth: profile.DateOfBirth && profile.DateOfBirth,
        email: profile.email && profile.email
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const postData = {
      gender: this.state.gender,
      CMND: this.state.CMND,
      DateOfBirth: this.state.DateOfBirth,
      email: this.state.email
    };
    console.log(postData);
    console.log(this.props.match.params.id);

    this.props.updatePost(
      postData,
      this.props.match.params.id,
      1,
      this.props.history
    ); //chưa update server
  }
  render() {
    const { gender, CMND, DateOfBirth, email, errors } = this.state;
    return (
      <form id="signupForm" noValidate onSubmit={e => this.onSubmit(e)}>
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
            <div className="form-group row">
              <label
                htmlFor="slGender"
                className="col-lg-3 col-form-label col-form-label-lg text-nowrap"
              >
                Giới tính:
              </label>
              <div className="col-xl-4 col-sm-3">
                <select
                  className="form-control"
                  id="slGender"
                  value={gender}
                  name="gender"
                  onChange={e => this.onChange(e)}
                >
                  <option value="Male">Nam</option>
                  <option value="Female">Nữ</option>
                  <option value="Other">Khác</option>
                </select>
              </div>
            </div>
            <TextInputPost
              className1="col-lg-3 col-form-label col-form-label-lg text-nowrap"
              title="Số CMND"
              type="number"
              className2="form-control form-control-lg"
              id="CMND"
              name="CMND"
              placeholder="Số CMND"
              value={CMND}
              error={errors.CMND}
              onChange={e => this.onChange(e)}
              infos="Lưu ý: Bạn sẽ không nhận được khoản vay nếu điền sai CMND"
            />
            <TextInputPost
              className1="col-lg-3 col-form-label col-form-label-lg text-nowrap"
              title="Ngày/Tháng/Năm sinh"
              type="date"
              className2="form-control form-control-lg"
              id="DateOfBirth"
              name="DateOfBirth"
              placeholder="dd-MM-yyyy"
              value={DateOfBirth}
              error={errors.DateOfBirth}
              onChange={e => this.onChange(e)}
              infos=""
            />
            <TextInputPost
              className1="col-lg-3 col-form-label col-form-label-lg text-nowrap"
              title="Email"
              type="text"
              className2="form-control form-control-lg"
              id="email"
              name="email"
              placeholder="Nhập địa chỉ Email"
              value={email}
              error={errors.email}
              onChange={e => this.onChange(e)}
              infos=""
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <a
            className="btn btn-lg btn-gray-lighter px-md-6"
            onClick
            style={{
              backgroundColor: '#d1d1d1',
              fontSize: '14px',
              marginBottom: '25px'
            }}
          >
            QUAY LẠI
          </a>
          <button
            type="submit"
            className="btn btn-lg btn-warning text-white px-md-6 ml-auto"
            style={{ fontSize: '14px', marginBottom: '25px' }}
          >
            TIẾP TỤC
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

const mapDispatchToProps = { getCurrentProfile, updatePost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post1);
