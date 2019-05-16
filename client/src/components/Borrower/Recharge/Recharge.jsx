import React from 'react';
import './Recharge.scss';
const Recharge = () => {
  return (
    <div className="container py-5">
      <div className="bg-white border border-gray p-3 px-md-5 pb-md-5 pt-md-4">
        <h2 className="text-uppercase fs-16 fw-6 mb-5">
          CHỌN hình thức thanh toán
        </h2>
        <div className="radiolist">
          <div className="form-group mb-5">
            <div className="radiolist__item custom-control custom-radio w-100 mr-0">
              <input
                id="httt-rdo-1"
                value="1"
                defaultChecked
                name="radio"
                type="radio"
                className="radiolist__control-input custom-control-input"
              />
              <label
                htmlFor="httt-rdo-1"
                className="custom-control-indicator"
              />
              <label
                htmlFor="httt-rdo-1"
                className="custom-control-description"
              >
                Thanh toán Online <br />
                <em className="small form-text text-muted mt-0">
                  Quý khách sử dụng dịch vụ chuyển tiền online để nạp tiền
                </em>
              </label>
              <div className="radiolist__body mt-3">
                <label htmlFor="httt-fc-1">Số tiền cần nạp</label>

                <input
                  id="txt_Money"
                  name="txt_Money"
                  type="text"
                  className="form-control w-md-50 valid"
                  placeholder="Nhập số tiền"
                  aria-required="true"
                  aria-invalid="false"
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-5">
            <div className="radiolist__item custom-control custom-radio w-100 mr-0">
              <input
                id="httt-rdo-2"
                name="radio"
                value="2"
                defaultChecked
                type="radio"
                className="radiolist__control-input custom-control-input"
              />
              <label
                htmlFor="httt-rdo-2"
                className="custom-control-indicator"
              />
              <label
                htmlFor="httt-rdo-2"
                className="custom-control-description"
              >
                Thanh toán bằng tự chuyển khoản <br />
                <em className="small form-text text-muted mt-0">
                  Quý khách sẽ nạp tiền qua số tài khoản của Công Ty
                </em>
              </label>
              <div className="radiolist__body mt-3">
                <div className="table-responsive">
                  <table className="table table-bordered table-sm fs-13 fw-6">
                    <thead>
                      <tr>
                        <th className="text-nowrap fw-6">Ngân hàng</th>
                        <th className="text-nowrap fw-6">Số tài khoản</th>
                        <th className="text-nowrap text-center fw-6">
                          Chủ tài khoản
                        </th>
                        <th className="text-nowrap text-center fw-6">
                          Nội dung chuyển khoản
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="true">Vietcombank Chi nhánh Thanh Xuân</td>
                        <td>0711000281624</td>
                        <td rowSpan="6" className="align-middle text-center">
                          <span className="text-uppercase">
                            Công ty cổ phần Tập đoàn TIMA
                          </span>
                        </td>
                        <td rowSpan="6" className="align-middle text-center">
                          <span className="text-uppercase">SNT [phone]</span>
                          <em className="small form-text text-muted mt-0">
                            (Thay "[phone]" bằng tài khỏan đăng nhập của bạn)
                          </em>
                        </td>
                      </tr>

                      <tr>
                        <td rowSpan="true">BIDV - CN Thái Hà</td>
                        <td>26810000300978</td>
                      </tr>

                      <tr>
                        <td rowSpan="true">Sacombank - CN Đống Đa</td>
                        <td>020066557996</td>
                      </tr>

                      <tr>
                        <td rowSpan="true">VPbank - CN Hà Thành</td>
                        <td>165885996</td>
                      </tr>
                      <tr>
                        <td rowSpan="true">Agribank - CN Đống Đa</td>
                        <td>1504201036710</td>
                      </tr>
                    </tbody>
                  </table>
                  <em className="small form-text text-muted mt-0">
                    *Với hình thức này sau khi nhận được tiền hệ thống sẽ xử lý
                    cộng tiền vào tài khoản của bạn trong thời gian nhanh nhất
                  </em>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mb-5">
            <div className="radiolist__item custom-control custom-radio w-100 mr-0">
              <input
                id="httt-rdo-3"
                value="3"
                name="radio"
                type="radio"
                className="radiolist__control-input custom-control-input"
              />
              <label
                htmlFor="httt-rdo-3"
                className="custom-control-indicator"
              />
              <label
                htmlFor="httt-rdo-3"
                className="custom-control-description"
              >
                Nạp tiền với Payoo / Momo <br />
                <em className="small form-text text-muted mt-0">
                  Quý khách sẽ nạp tiền qua số tài khoản Payoo / Momo của Công
                  Ty
                </em>
              </label>
              <div className="radiolist__body mt-3">
                <div className="table-responsive">
                  <table className="table table-bordered table-sm fs-13 fw-6">
                    <thead>
                      <tr>
                        <th className="text-nowrap fw-6">Hình thức</th>
                        <th className="text-nowrap fw-6">Tài khoản</th>
                        <th className="text-nowrap text-center fw-6">
                          Chủ tài khoản
                        </th>
                        <th className="text-nowrap text-center fw-6">
                          Nội dung chuyển khoản
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="true">Payoo</td>
                        <td>timapay</td>
                        <td rowSpan="6" className="align-middle text-center">
                          <span className="text-uppercase">Pham Van Linh</span>
                        </td>
                        <td rowSpan="6" className="align-middle text-center">
                          <span className="text-uppercase">SNT [phone]</span>
                          <em className="small form-text text-muted mt-0">
                            (Thay "[phone]" bằng tài khỏan đăng nhập của bạn)
                          </em>
                        </td>
                      </tr>

                      <tr>
                        <td rowSpan="true">MOMO</td>
                        <td>0967835078</td>
                      </tr>
                    </tbody>
                  </table>
                  <em className="small form-text text-muted mt-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mb-5 disable">
            <div className="radiolist__item custom-control custom-radio w-100 mr-0">
              <input
                id="httt-rdo-4"
                name="radio"
                value="4"
                type="radio"
                className="radiolist__control-input custom-control-input"
              />
              <label
                htmlFor="httt-rdo-4"
                className="custom-control-indicator"
              />
              <label
                htmlFor="httt-rdo-4"
                className="custom-control-description"
              >
                Thanh toán tiền bằng thẻ điện thoại <br />
                <em className="small form-text text-muted mt-0">
                  Quý khách sử dụng mã thẻ điện thoại để nạp tiền
                </em>
              </label>
            </div>
          </div>
          <div className="text-center mt-6 ">
            <button
              id="btnNapNgay"
              type="submit"
              className="btn btn-lg btn-primary fs-16 text-uppercase mb-2 px-8 cursor-pointer"
            >
              NẠP TIỀN
            </button>
            <em className="small form-text text-muted mt-0">
              (Xin vui lòng kiểm tra lại thông tin chuyển tiền trước khi nạp
              tiền)
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
