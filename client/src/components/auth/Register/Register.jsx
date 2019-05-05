import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Register.scss';
import { registerUser } from '../../../actions/auth.action';
import TextInputAuth from '../../../HOC/TextInputAuth';
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      phone: '',
      password: '',
      password2: '',
      province: '',
      district: '',
      typeOfAcc: '',
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    console.log(this.props.auth);

    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push('/');
    // }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const {
      fullname,
      phone,
      password2,
      password,
      province,
      district,
      typeOfAcc,
      errors
    } = this.state;
    return (
      <div className="tm-reg">
        <div className="row gutter-10px flex-column-reverse flex-md-row">
          <div className="col-main col-md-6 d-flex">
            <div
              className="tm-reg__banner w-100"
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dz1gprgpn/image/upload/v1557046972/statics/bg-login_ayzs2e.jpg)'
              }}
            />
          </div>
          <div className="col-aside col-md-6 d-flex mb-5 mb-md-0">
            <div className="tm-regform d-flex flex-column justify-content-between w-100 border border-gray bg-white">
              <div className="fs-13" id="divFormRegister">
                <form
                  id="signupForm"
                  noValidate
                  onSubmit={e => this.onSubmit(e)}
                >
                  <div className="tm-regform__header d-flex justify-content-between align-items-center p-3">
                    <h2 className="text-uppercase fs-16 fw-4 mb-0">
                      Đăng ký tài khoản
                    </h2>
                    <a className="text-primary fs-13" href="login.html">
                      <ins>Đăng nhập</ins>
                    </a>
                  </div>

                  <hr className="border-gray my-0" />

                  <div className="px-5 py-3">
                    <p className="text-center">
                      Hãy đăng ký ngay bây giờ <br />
                      để tham gia sàn tài chính Tima.
                      <span id="sp-message-login" />
                    </p>
                    <TextInputAuth
                      id="fullname"
                      name="fullname"
                      className="form-control form-control-lg fs-13 px-3 rounded"
                      placeholder="Họ và tên"
                      title="Họ và tên"
                      type="text"
                      onChange={e => this.onChange(e)}
                      value={fullname}
                      error={errors.fullname}
                    />
                    <TextInputAuth
                      id="phone"
                      name="phone"
                      className="form-control form-control-lg fs-13 px-3 rounded"
                      placeholder="Số điện thoại"
                      title="Số điện thoại"
                      type="text"
                      onChange={e => this.onChange(e)}
                      value={phone}
                      error={errors.phone}
                    />
                    <TextInputAuth
                      id="password"
                      name="password"
                      className="form-control form-control-lg fs-13 px-3 rounded"
                      placeholder="Nhập mật khẩu"
                      title="Nhập mật khẩu"
                      type="password"
                      onChange={e => this.onChange(e)}
                      value={password}
                      error={errors.password}
                    />
                    <TextInputAuth
                      id="password2"
                      name="password2"
                      className="form-control form-control-lg fs-13 px-3 rounded"
                      placeholder="Nhập lại mật khẩu"
                      title="Nhập lại mật khẩu"
                      type="password2"
                      onChange={e => this.onChange(e)}
                      value={password2}
                      error={errors.password2}
                    />
                    <div className="form-group">
                      <select
                        className="form-control form-control-lg fs-13 px-3 rounded"
                        id="cbCity"
                        name="city"
                      >
                        <option value="" defaultValue hidden>
                          Chọn thành phố
                        </option>

                        <option value="1">H&#224; Nội</option>
                        <option value="2">H&#224; Giang</option>
                        <option value="4">Cao Bằng</option>
                        <option value="6">Bắc Kạn</option>
                        <option value="8">Tuy&#234;n Quang</option>
                        <option value="10">L&#224;o Cai</option>
                        <option value="11">Điện Bi&#234;n</option>
                        <option value="12">Lai Ch&#226;u</option>
                        <option value="14">Sơn La</option>
                        <option value="15">Y&#234;n B&#225;i</option>
                        <option value="17">H&#242;a B&#236;nh</option>
                        <option value="19">Th&#225;i Nguy&#234;n</option>
                        <option value="20">Lạng Sơn</option>
                        <option value="22">Quảng Ninh</option>
                        <option value="24">Bắc Giang</option>
                        <option value="25">Ph&#250; Thọ</option>
                        <option value="26">Vĩnh Ph&#250;c</option>
                        <option value="27">Bắc Ninh</option>
                        <option value="30">Hải Dương</option>
                        <option value="31">Hải Ph&#242;ng</option>
                        <option value="33">Hưng Y&#234;n</option>
                        <option value="34">Th&#225;i B&#236;nh</option>
                        <option value="35">H&#224; Nam</option>
                        <option value="36">Nam Định</option>
                        <option value="37">Ninh B&#236;nh</option>
                        <option value="38">Thanh H&#243;a</option>
                        <option value="40">Nghệ An</option>
                        <option value="42">H&#224; Tĩnh</option>
                        <option value="44">Quảng B&#236;nh</option>
                        <option value="45">Quảng Trị</option>
                        <option value="46">Thừa Thi&#234;n Huế</option>
                        <option value="48">Đ&#224; Nẵng</option>
                        <option value="49">Quảng Nam</option>
                        <option value="51">Quảng Ng&#227;i</option>
                        <option value="52">B&#236;nh Định</option>
                        <option value="54">Ph&#250; Y&#234;n</option>
                        <option value="56">Kh&#225;nh H&#242;a</option>
                        <option value="58">Ninh Thuận</option>
                        <option value="60">B&#236;nh Thuận</option>
                        <option value="62">Kon Tum</option>
                        <option value="64">Gia Lai</option>
                        <option value="66">Đắk Lắk</option>
                        <option value="67">Đắk N&#244;ng</option>
                        <option value="68">L&#226;m Đồng</option>
                        <option value="70">B&#236;nh Phước</option>
                        <option value="72">T&#226;y Ninh</option>
                        <option value="74">B&#236;nh Dương</option>
                        <option value="75">Đồng Nai</option>
                        <option value="77">B&#224; Rịa - Vũng T&#224;u</option>
                        <option value="79">Hồ Ch&#237; Minh</option>
                        <option value="80">Long An</option>
                        <option value="82">Tiền Giang</option>
                        <option value="83">Bến Tre</option>
                        <option value="84">Tr&#224; Vinh</option>
                        <option value="86">Vĩnh Long</option>
                        <option value="87">Đồng Th&#225;p</option>
                        <option value="89">An Giang</option>
                        <option value="91">Ki&#234;n Giang</option>
                        <option value="92">Cần Thơ</option>
                        <option value="93">Hậu Giang</option>
                        <option value="94">S&#243;c Trăng</option>
                        <option value="95">Bạc Li&#234;u</option>
                        <option value="96">C&#224; Mau</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        className="select optional form-control input-lg fs-14"
                        id="cbDistrict"
                        name="district"
                      />
                    </div>
                    <div className="form-group form-inline">
                      <label className="mb-0 mr-3" htmlFor="fc-radio-1">
                        Bạn cần:
                      </label>

                      <label style={{ marginRight: '30px' }}>
                        <input name="agree" type="radio" />
                        Vay
                      </label>

                      <label>
                        <input name="agree" type="radio" />
                        Cho vay
                      </label>
                    </div>
                    <div className="text-gray mb-3">
                      <input
                        type="checkbox"
                        name="chkDieuKhoan"
                        id="chkDieuKhoan"
                      />
                      <label htmlFor="chkDieuKhoan">
                        Tôi đồng ý với các{' '}
                        <a
                          href="/dieu-khoan.html"
                          target="_blank"
                          style={{ fontSize: '14px' }}
                        >
                          Điều khoản
                        </a>{' '}
                        của Tima
                      </label>
                    </div>

                    <button
                      className="btn btn-lg btn-block btn-primary text-uppercase"
                      style={{ fontSize: '13px' }}
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <hr className="border-gray my-0" />

                <div className="text-center fs-13 p-3">
                  Bạn đã có tài khoản?
                  <div className="d-inline-block">
                    Hãy
                    <a className="text-primary" href="/User/Login">
                      <ins style={{ color: '#ffc107', fontSize: '13px' }}>
                        click vào đây để đăng nhập
                      </ins>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth, // lấy auth của thằng authReducer trong /reducers/index
  errors: state.errors
});

const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
