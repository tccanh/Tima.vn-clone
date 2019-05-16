import React from 'react';

const LoanStatistic = () => {
  return (
    <div class="row mb-5">
      <div class="col-xl-9 mb-3 mb-xl-0">
        <div class="bg-white border border-gray p-3 px-md-5 pb-md-5 pt-md-4">
          <h2 class="tm-account__header text-uppercase fs-16 fw-6 mb-0">
            Thống kê
          </h2>

          <hr class="mb-3 mb-md-5" />

          <div class="row" id="divStatics">
            <div class="col-md-4 d-flex mb-3 mb-md-0">
              <div class="media w-100">
                <div class="icon-vnd-circle d-flex mr-3 align-self-center" />
                <div class="media-body align-self-center">
                  <h3 class="fs-14 fs-lg-16 fw-6 text-gray-light mb-0 mt-1">
                    Tổng đơn đăng ký
                  </h3>
                  <p class="fs-16 fs-lg-20 fw-6 text-gray mb-0">3</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 d-flex mb-3 mb-md-0">
              <div class="media w-100">
                <div class="icon-users-circle d-flex mr-3 align-self-center" />
                <div class="media-body align-self-center">
                  <h3 class="fs-14 fs-lg-16 fw-6 text-gray-light mb-0 mt-1">
                    Tổng đơn chờ nhận
                  </h3>
                  <p class="fs-16 fs-lg-20 fw-6 text-gray mb-0">0</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 d-flex">
              <div class="media w-100">
                <div class="icon-growth-circle d-flex mr-3 align-self-center" />
                <div class="media-body align-self-center">
                  <h3 class="fs-14 fs-lg-16 fw-6 text-gray-light mb-0 mt-1">
                    Tổng đơn hủy
                  </h3>
                  <p class="fs-16 fs-lg-20 fw-6 text-gray mb-0">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 d-flex">
        <div class="d-flex align-items-center justify-content-center w-100 bg-white border border-gray p-3 p-md-5">
          <a
            class="btn btn-primary text-uppercase text-white fs-16 fs-lg-20"
            href="/Borrower/"
          >
            Đăng ký vay ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoanStatistic;
