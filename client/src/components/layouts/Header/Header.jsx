import React, { Component } from 'react';
import './Header.scss';
export default class Header extends Component {
  render() {
    return (
      <header class="header-area">
        {/* <!-- Top Header Area --> */}
        <div class="top-header-area">
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12 d-flex justify-content-between">
                {/* <!-- Logo Area --> */}
                <div class="logo">
                  <a href="index.html">
                    <img src="img/core-img/logo.png" alt="" />
                  </a>
                </div>

                {/* <!-- Top Contact Info --> */}
                <div class="top-contact-info d-flex align-items-center">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="25 th Street Avenue, Los Angeles, CA"
                  >
                    <img src="img/core-img/placeholder.png" alt="" />{' '}
                    <span>17th, Trần Đại Nghĩa, Hà Nội</span>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="office@yourfirm.com"
                  >
                    <img src="img/core-img/message.png" alt="" />{' '}
                    <span>vudat1710@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Navbar Area --> */}
        <div class="credit-main-menu" id="sticker">
          <div class="classy-nav-container breakpoint-off">
            <div class="container">
              {/* <!-- Menu --> */}
              <nav class="classy-navbar justify-content-between" id="creditNav">
                {/* <!-- Navbar Toggler --> */}
                <div class="classy-navbar-toggler">
                  <span class="navbarToggler">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>

                {/* <!-- Menu --> */}
                <div class="classy-menu">
                  {/* <!-- Close Button --> */}
                  <div class="classycloseIcon">
                    <div class="cross-wrap">
                      <span class="top" />
                      <span class="bottom" />
                    </div>
                  </div>

                  {/* <!-- Nav Start --> */}
                  <div class="classynav">
                    <ul>
                      <li>
                        <a href="index.html">TRANG CHỦ</a>
                      </li>
                      <li>
                        <a href="about.html">VỀ CHÚNG TÔI</a>
                      </li>
                      {/* <!-- <li><a href="#">Pages</a>
                                        <ul class="dropdown">
                                            <li><a href="index.html">Trang chủ</a></li>
                                            <li><a href="about.html">Về chúng tôi</a></li>
                                            <li><a href="services.html">Các dịch vụ</a></li>
                                            <li><a href="post.html">Tin tức</a></li>
                                            <li><a href="single-post.html">Single Post</a></li>
                                            <li><a href="contact.html">Liên hệ</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                        </ul>
                                    </li> --> */}
                      <li>
                        <a href="services.html">DỊCH VỤ</a>
                      </li>
                      <li>
                        <a href="post.html">TIN TỨC</a>
                      </li>
                      <li>
                        <a href="contact.html">LIÊN HỆ</a>
                      </li>
                      <li>
                        <a href="">ĐĂNG NHẬP</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Nav End --> */}
                </div>

                {/* <!-- Contact --> */}
                <div class="contact">
                  <a href="#">
                    <img src="img/core-img/call2.png" alt="" /> +84 241 264 798
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
