/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.scss';
import Call2 from '../../../image/core-img/call2.png';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/auth.action';

export class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    // this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const AuthButtonTop = !isAuthenticated ? (
      <div className="top-contact-info d-flex align-items-center">
        <Link to="/login">ĐĂNG NHẬP</Link>
      </div>
    ) : (
      <div className="top-contact-info d-flex align-items-center">
        <a href="#" data-toggle="tooltip" data-placement="bottom">
          <span>Hi, {user.fullname}</span>
        </a>
        <a onClick={e => this.onLogoutClick(e)}>Đăng xuất</a>
      </div>
    );
    const AuthButton2 = !isAuthenticated ? (
      <Link to="/login">ĐĂNG NHẬP</Link>
    ) : (
      <Link to="/profile">TÀI KHOẢN</Link>
    );
    const Classynav =
      user.typeOfAcc === 'borrow' ? (
        <div className="classynav">
          <ul>
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/borrower">CẦN MỘT KHOẢN VAY</Link>
            </li>
            <li>
              <Link to="/loanhistory">LỊCH SỬ ĐƠN VAY</Link>
            </li>
            <li>{AuthButton2}</li>
          </ul>
        </div>
      ) : (
        <div className="classynav">
          <ul>
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/exchanges">SÀN GIAO DỊCH</Link>
            </li>
            <li>
              <Link to="/loanmanagement">QUẢN LÝ ĐƠN VAY</Link>
            </li>
            <li>
              <Link to="/loanlookup">TRA CỨU LỊCH SỬ VAY NỢ</Link>
            </li>
            <li>{AuthButton2}</li>
          </ul>
        </div>
      );

    return (
      <header className="header-area">
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 d-flex justify-content-between">
                <div className="logo" />
                {AuthButtonTop}
              </div>
            </div>
          </div>
        </div>

        <div className="credit-main-menu" id="sticker">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classy-navbar justify-content-between"
                id="creditNav"
              >
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>

                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top" />
                      <span className="bottom" />
                    </div>
                  </div>
                  {Classynav}
                </div>

                <div className="contact">
                  <a href="#">
                    <img src={Call2} alt="" /> +0123 456 798
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = { logoutUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
