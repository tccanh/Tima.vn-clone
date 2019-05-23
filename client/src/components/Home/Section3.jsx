/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Section3.scss';
import Img22 from '../../image/bg-img/22.jpg';
import Img23 from '../../image/bg-img/23.jpg';
import Img24 from '../../image/bg-img/24.jpg';
import Img10 from '../../image/bg-img/10.jpg';
import Img11 from '../../image/bg-img/11.jpg';
import Img12 from '../../image/bg-img/12.jpg';
import pencil from '../../image/core-img/pencil.png';
import calendar from '../../image/core-img/calendar.png';
function Section3(props) {
  const newss = (
    <div className="credit-tab-content">
      <div className="single-news-area d-flex align-items-center">
        <div className="news-thumbnail2">
          <img
            style={{ maxWidth: 130, marginRight: 10, borderRadius: 10 }}
            src={Img10}
            alt=""
          />
        </div>
        <div className="news-content">
          <a href="#">Vay tiền trực tuyến</a>
          <div className="news-meta">
            <a href="#" className="post-author">
              <img src={pencil} alt="" /> Tiến Đạt
            </a>
            <br />
            <a href="#" className="post-date">
              <img src={calendar} alt="" /> Tháng tư 1
            </a>
          </div>
        </div>
      </div>

      <div className="single-news-area d-flex align-items-center">
        <div className="news-thumbnail2">
          <img
            style={{ maxWidth: 130, marginRight: 10, borderRadius: 10 }}
            src={Img11}
            alt=""
          />
        </div>
        <div className="news-content">
          <a href="#">Kỉ niệm ngày thành lập</a>
          <div className="news-meta">
            <a href="#" className="post-author">
              <img src={pencil} alt="" /> Cao Cảnh
            </a>
            <br />
            <a href="#" className="post-date">
              <img src={calendar} alt="" /> Tháng ba 1
            </a>
          </div>
        </div>
      </div>

      <div className="single-news-area d-flex align-items-center">
        <div className="news-thumbnail2">
          <img
            style={{ maxWidth: 130, marginRight: 10, borderRadius: 10 }}
            src={Img12}
            alt=""
          />
        </div>
        <div className="news-content">
          <a href="#">10 kĩ năng để có khoản vay phù hợp</a>
          <div className="news-meta">
            <a href="#" className="post-author">
              <img src={pencil} alt="" /> Trọng Đức
            </a>
            <br />
            <a href="#" className="post-date">
              <img src={calendar} alt="" /> Tháng hai 1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <section className="news-area section-padding-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="single-blog-area mb-70">
              <div className="blog-thumbnail">
                <a href="#">
                  <img src={Img22} alt="" />
                </a>
              </div>
              <div className="blog-content">
                <span>Tháng tư 1, 2019</span>
                <a href="#" className="post-title">
                  Vay tiền trực tuyến
                </a>
                <div className="blog-meta">
                  <a href="#" className="post-author">
                    <img src={pencil} alt="" /> Tiến Đạt
                  </a>
                  <a href="#" className="post-date">
                    <img src={calendar} alt="" /> Tháng tư 1
                  </a>
                </div>
                <p>
                  Hạn mức lên đến 600 triệu đồng. Miễn lãi lên đến 55 ngày. Hoàn
                  tiền thêm đến 1 triệu và cơ hội nhận chuyến du lịch bằng du
                  thuyền vòng quanh Châu Á. Mở thẻ ngay hôm nay!
                </p>
              </div>
            </div>

            <div className="single-blog-area mb-70">
              <div className="blog-thumbnail">
                <a href="#">
                  <img src={Img23} alt="" />
                </a>
              </div>
              <div className="blog-content">
                <span>Tháng ba 1, 2019</span>
                <a href="#" className="post-title">
                  Kỉ niệm ngày thành lập
                </a>
                <div className="blog-meta">
                  <a href="#" className="post-author">
                    <img src={pencil} alt="" /> Cao Cảnh
                  </a>
                  <a href="#" className="post-date">
                    <img src={calendar} alt="" /> Tháng ba 1
                  </a>
                </div>
                <p>
                  Vào ngày 03.08.2018, tại Tòa nhà Almaz Long Biên đã diễn ra
                  chương trình nội bộ của Tập đoàn, chương trình này nằm trong
                  chuỗi những sự kiện kỷ niệm 25 năm thành lập Tập đoàn.
                </p>
              </div>
            </div>

            <div className="single-blog-area mb-70">
              <div className="blog-thumbnail">
                <a href="#">
                  <img src={Img24} alt="" />
                </a>
              </div>
              <div className="blog-content">
                <span>Tháng hai 1, 2019</span>
                <a href="#" className="post-title">
                  10 kĩ năng để có khoản vay phù hợp
                </a>
                <div className="blog-meta">
                  <a href="#" className="post-author">
                    <img src={pencil} alt="" /> Trọng Đức
                  </a>
                  <a href="#" className="post-date">
                    <img src={calendar} alt="" /> Tháng hai 1
                  </a>
                </div>
                <p>
                  Dưới đây là 10 kỹ năng mà bạn nên cải thiện nếu muốn được
                  thăng tiến nhanh ... Vậy kỹ năng sáng tạo trong công việc do
                  chính bạn nắm bắt và khơi nguồn.
                </p>
              </div>
            </div>

            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-sm-9 col-md-6 col-lg-4">
            <div className="sidebar-area">
              <div className="single-widget-area search-widget">
                <form action="#" method="post">
                  <input type="search" name="search" placeholder="Search" />
                  <button type="submit">Tìm kiếm</button>
                </form>
              </div>

              <div className="single-widget-area tabs-widget">
                <div className="widget-heading">
                  <div className="line" />
                  <h4>Tin tức khác</h4>
                </div>

                <div className="credit-tabs-content">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab--1"
                        data-toggle="tab"
                        href="#tab1"
                        role="tab"
                        aria-controls="tab1"
                        aria-selected="false"
                      >
                        Mới nhất
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="tab--2"
                        data-toggle="tab"
                        href="#tab2"
                        role="tab"
                        aria-controls="tab2"
                        aria-selected="false"
                      >
                        Phổ biến
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab--3"
                        data-toggle="tab"
                        href="#tab3"
                        role="tab"
                        aria-controls="tab3"
                        aria-selected="true"
                      >
                        Bình luận
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade"
                      id="tab1"
                      role="tabpanel"
                      aria-labelledby="tab--1"
                    >
                      {newss}
                    </div>

                    <div
                      className="tab-pane fade show active"
                      id="tab2"
                      role="tabpanel"
                      aria-labelledby="tab--2"
                    >
                      {newss}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab3"
                      role="tabpanel"
                      aria-labelledby="tab--3"
                    >
                      {newss}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Section3.propTypes = {};

export default Section3;
