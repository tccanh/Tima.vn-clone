import React, { Component } from 'react';
import './Login.scss';
export default class Login extends Component {
  render() {
    return (
      <div class="main-page">
        <div class="container py-5">
          <div class="tm-reg">
            <div class="row gutter-10px flex-column-reverse flex-md-row">
              <div class="col-main col-md-6 d-flex">
                <div
                  class="tm-reg__banner w-100"
                  style={{
                    backgroundImage:
                      "url('https://tima.vn/Template1/images/bg-login.jpg')"
                  }}
                />
              </div>
              <div class="col-aside col-md-6 d-flex mb-5 mb-md-0">
                <div class="tm-regform d-flex flex-column justify-content-between w-100 border border-gray bg-white">
                  <div class="fs-13" id="formLogin">
                    <div class="tm-regform__header d-flex justify-content-between align-items-center p-3">
                      <h2>Đăng Nhập</h2>
                      <a class="text-primary fs-13" href="/User/Register">
                        <ins>Đăng ký tài khoản</ins>
                      </a>
                    </div>

                    <form id="loginForm" method="post" novalidate="novalidate">
                      <hr class="border-gray my-0" />
                      <div class="px-5 py-3">
                        <p class="text-center">
                          Chào bạn <br />
                          đăng nhập để xem và quản lý khoản vay
                          <br />
                          <span id="sp-message-login" />
                        </p>

                        <div class="form-group">
                          <input
                            id="username"
                            name="username"
                            class="form-control form-control-lg rounded"
                            placeholder="Nhập số điện thoại"
                            title=""
                          />
                        </div>

                        <div class="form-group">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            class="form-control form-control-lg fs-13 px-3 rounded"
                            placeholder="Nhập mật khẩu"
                            title=""
                          />
                        </div>

                        <div class="form-group d-flex justify-content-between align-items-center">
                          <label class="custom-control custom-checkbox fs-13 mb-0">
                            <input
                              name="agree"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <span class="custom-control-indicator" />
                            <span class="custom-control-description">
                              Nhớ tài khoản
                            </span>
                          </label>
                          <a class="text-primary fs-13">Quên mật khẩu</a>
                        </div>

                        <button class="btn btn-lg btn-block btn-primary text-uppercase fs-13 rounded mt-5">
                          Đăng nhập ngay
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="fs-13"
                    id="formForgetPass"
                    style={{ display: 'none' }}
                  >
                    <div class="tm-regform__header d-flex justify-content-between align-items-center p-3">
                      <h2 class="text-uppercase fs-16 fw-4 mb-0">
                        Quên mật khẩu
                      </h2>
                    </div>

                    <hr class="border-gray my-0" />

                    <div class="px-5 py-3">
                      <p class="text-center">
                        Chào bạn <br />
                        hãy nhập số điện thoại của bạn để lấy lại mật khẩu
                      </p>

                      <div class="form-group">
                        <input
                          type="text"
                          id="txtNumberPhoneResetPassword"
                          class="form-control form-control-lg fs-13 px-3 rounded"
                          placeholder="Nhập số điện thoại"
                          title=""
                        />
                      </div>

                      <button
                        class="btn btn-lg btn-block btn-primary text-uppercase fs-13 rounded mt-5"
                        onclick="GetNewPassword();"
                      >
                        Nhận mật khẩu mới
                      </button>
                    </div>
                  </div>

                  <div
                    class="fs-13"
                    id="formSucessNewPass"
                    style={{ display: 'none' }}
                  >
                    <div class="px-5 py-3">
                      <div
                        class="text-center"
                        style={{
                          margin: '30px 0px 25px 0px',
                          fontSize: '80px'
                        }}
                        id="imgSucces"
                      >
                        <i
                          class="fa fa-check-circle fs-38 mr-3"
                          aria-hidden="true"
                          style={{ color: '#5cb85c' }}
                        />
                      </div>

                      <h3
                        class="mb-3 mb-md-4 fs-16 text-center"
                        id="TitleResetPassword"
                      >
                        Khôi phục mật khẩu thành công
                      </h3>
                      <p class="text-center" id="ContentResetPassword">
                        Bạn có thể dùng mật khẩu vừa khôi phục để đăng nhập vào
                        hệ thống ngay bây giờ
                      </p>

                      <button
                        class="btn btn-lg btn-block btn-primary text-uppercase fs-13 rounded mt-5"
                        onclick="BackFormLogin();"
                      >
                        Quay lại màn hình đăng nhập
                      </button>
                    </div>
                  </div>

                  <div>
                    <hr class="border-gray my-0" />

                    <div class="text-center fs-13 p-3">
                      Bạn chưa có tài khoản?
                      <div class="d-inline-block">
                        Hãy
                        <a class="text-primary" href="/User/Register">
                          <ins>đăng kí ngay bây giờ</ins>
                        </a>
                      </div>
                    </div>
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
