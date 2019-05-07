/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
export default class Section2 extends Component {
  render() {
    return (
      <>
        <section className="cta-area d-flex flex-wrap">
          <div
            className="cta-thumbnail bg-img jarallax"
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/dz1gprgpn/image/upload/v1557111139/statics/5_huyp8a.jpg)'
            }}
          />

          <div className="cta-content">
            <div className="section-heading white">
              <div className="line" />
              <p>Nhanh và tiện lợi</p>
              <h2>Lựa chọn tuyệt vời dành cho những người đang cần tiền</h2>
            </div>
            <h6>
              {' '}
              Hiện nay có rất nhiều bạn có việc gấp cần được đáp ứng nhanh nhưng
              chưa biết địa chỉ nào uy tín Chúng tôi đáp ứng các nhu cầu của bạn
              trong thời gian ngắn nhất với thủ tục nhanh gọn nhất. Thực hiện
              các thủ tục cho vay thông qua việc đăng bài, chờ đợi hệ thống xử
              lý và có người tiếp nhận đơn cho vay. Tất cả diễn ra đều thuận
              tiên và nhanh chóng cho 2 bên
            </h6>
            <div
              className="d-flex flex-wrap mt-50"
              style={{ textAlign: 'center' }}
            >
              <div className="single-skils-area mb-70 mr-5">
                <div id="circle" className="circle" data-value="0.90">
                  <div className="skills-text">
                    <span>90%</span>
                  </div>
                </div>
                <p>Đã giải ngân</p>
              </div>

              <div className="single-skils-area mb-70 mr-5">
                <div id="circle2" className="circle" data-value="0.98">
                  <div className="skills-text">
                    <span>98%</span>
                  </div>
                </div>
                <p>Tin tưởng</p>
              </div>

              <div className="single-skils-area mb-70">
                <div id="circle3" className="circle" data-value="0.97">
                  <div className="skills-text">
                    <span>97%</span>
                  </div>
                </div>
                <p>Độ hài lòng</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-2-area wow fadeInUp" data-wow-delay="100ms">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-content d-flex flex-wrap align-items-center justify-content-between">
                  <div
                    className="cta-text"
                    style={{
                      float: 'none',
                      margin: '0 auto',
                      marginBottom: '30px'
                    }}
                  >
                    <h4>Cần 1 khoản vay? Đến với chúng tôi.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
