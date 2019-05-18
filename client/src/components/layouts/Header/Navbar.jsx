/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/auth.action';

import classnames from 'classnames';
import Logo from '../../../image/core-img/logo.png';
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false
    };
  }
  onLogoutClick(e) {
    e.preventDefault();
    // this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isShow } = this.state;
    const { isAuthenticated, user } = this.props.auth;
    const AuthButton2 = !isAuthenticated ? (
      <Link to="/login">ĐĂNG NHẬP</Link>
    ) : (
      <>
        <Link to="/profile">TÀI KHOẢN</Link>
        <a
          style={{ color: 'black', cursor: 'pointer' }}
          onClick={e => this.onLogoutClick(e)}
        >
          ĐĂNG XUẤT
        </a>
      </>
    );
    const Barcontent =
      user && user.typeOfAcc && user.typeOfAcc === 'borrow' ? (
        <ul>
          <li>
            <Link to="/borrower">CẦN MỘT KHOẢN VAY</Link>
          </li>
          <li>
            <Link to="/loanhistory">LỊCH SỬ ĐƠN VAY</Link>
          </li>
          <li>{AuthButton2}</li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/exchanges">SÀN GIAO DỊCH</Link>
          </li>
          <li>
            <Link to="/purchasedhistory">QUẢN LÝ ĐƠN VAY</Link>
          </li>
          <li>
            <Link to="/loanlookup">TRA CỨU VAY NỢ</Link>
          </li>
          <li>{AuthButton2}</li>
        </ul>
      );
    return (
      <header>
        <div className="header-area">
          <div className="container">
            <div
              id="omega"
              className={classnames({ 'omega-activated': isShow })}
            >
              <div id="omega-content">
                <nav>
                  <a href="/">
                    <img src={Logo} alt="" style={{ margin: '0 20px' }} />
                  </a>
                  {Barcontent}
                </nav>
              </div>
              <button
                class="btn btn-warning"
                onClick={() => this.setState(pre => ({ isShow: !pre.isShow }))}
                id="omega-button"
              >
                &#9776;
              </button>
              <div id="omega-sidebar">
                <div id="omega-sidebar-header">
                  <button
                    onClick={() =>
                      this.setState(pre => ({ isShow: !pre.isShow }))
                    }
                    style={{
                      position: 'relative',
                      left: '83%',
                      margin: '5px',
                      height: 'auto',
                      borderRadius: '15%'
                    }}
                    type="button"
                    class="btn btn-warning"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ fontSize: 'x-large', fontWeight: 900 }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div id="omega-sidebar-body">
                  <nav>{Barcontent}</nav>
                </div>
              </div>
              <div id="omega-overlay" />
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
)(withRouter(Navbar));
