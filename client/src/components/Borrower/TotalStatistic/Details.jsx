import React from 'react';
import PropTypes from 'prop-types';
import { getDistricts, getCities } from '../../../utils/getVNdata';
import { Package } from '../../../utils/getPackage';
import { formatDate } from '../../../utils/formatTime';

function Details(props) {
  const { post } = props;

  return (
    <div className="modal-dialog modal-lg" role="document">
      <div
        id="divResultDetailsLoan"
        className="modal-content of-hidden rounded-10 border-0"
      >
        {post.purchaser && (
          <div>
            <h4 className="modal-body bg-gray-lighter fs-base">
              (<span style={{ color: 'red' }}>*</span>) Thông tin bên người cho
              vay
            </h4>
            <div className="modal-body">
              <div className="row gutter-2">
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-5">Họ và tên</div>
                    <div className="col-7">
                      <strong className="text-warning">
                        {post && post.purchaser.fullname}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-5">Số điện thoại</div>
                    <div className="col-7">
                      <strong className="text-warning">
                        {post && post.purchaser.phone}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <h4 className="modal-body bg-gray-lighter fs-base">
            1. Thông tin đơn vay
          </h4>
          <div className="modal-body">
            <div className="row gutter-2">
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Tên khách hàng</div>
                  <div className="col-7">
                    <strong className="text-warning">
                      {post && post.user.fullname}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Số điện thoại</div>
                  <div className="col-7">
                    <strong className="text-warning">
                      {post && post.user.phone}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Số tiền vay</div>
                  <div className="col-7">
                    <strong className="text-warning">
                      {post && post.loanNumber} 000 000 VNĐ
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Thời gian vay</div>
                  <div className="col-7">
                    <strong className="text-warning">
                      {post && post.date && post.date.duration} tháng
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Khu vực</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.address &&
                        post.address.province &&
                        getDistricts(post.address.province).filter(
                          a => a[0] === post.address.district,
                        )[0][1]}{' '}
                      -{' '}
                      {post &&
                        post.address &&
                        getCities().filter(
                          a => a[0] === post.address.province,
                        )[0][1]}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Loại hình</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        Package.filter(a => a[0] === post.typeOfLoan)[0][1]}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">CMND</div>
                  <div className="col-7">
                    <strong className="">
                      {post && post.personalInfo.CMND && post.personalInfo.CMND}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="modal-body bg-gray-lighter fs-base">
            2. Thông tin cá nhân
          </h4>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Ngày sinh</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.personalInfo &&
                        post.personalInfo.DateOfBirth &&
                        formatDate(post.personalInfo.DateOfBirth)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Giới tính</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                      post.personalInfo &&
                      post.personalInfo.gender &&
                      post.personalInfo.gender === 'Female'
                        ? 'Nữ'
                        : post.personalInfo.gender === 'Male'
                        ? 'Nam'
                        : 'Khác'}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Email</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.personalInfo &&
                        post.personalInfo.email &&
                        post.personalInfo.email}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="modal-body bg-gray-lighter fs-base">
            3. Thông tin việc làm
          </h4>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Công việc hiện tại</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.careerInfo &&
                        post.careerInfo.career &&
                        post.careerInfo.career}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Thu nhập</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.careerInfo &&
                        post.careerInfo.income &&
                        post.careerInfo.income}{' '}
                      triệu đồng/tháng
                    </strong>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Tên công ty</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.careerInfo &&
                        post.careerInfo.comName &&
                        post.careerInfo.comName}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Địa chỉ công ty</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.careerInfo &&
                        post.careerInfo.comAddress &&
                        post.careerInfo.comAddress}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Số điện thoại công ty</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.careerInfo &&
                        post.careerInfo.comPhone &&
                        post.careerInfo.comPhone}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {post && post.property1 && post.property1.length > 0 && (
          <div>
            <h4 className="modal-body bg-gray-lighter fs-base">
              4. Thông tin tài sản
            </h4>
            <div className="modal-body">
              <div className="row">
                {post.property1.map((val, key) => {
                  return (
                    <div key={key} className="col-md-6 mb-3">
                      <div className="row">
                        <div className="col-5">{val.keyProp}</div>
                        <div className="col-7">
                          <strong className="">{val.valueProp}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-5">Hình thức cư trú</div>
                    <div className="col-7">
                      <strong className="">
                        {post &&
                          post.property2 &&
                          post.property2.residence &&
                          post.property2.residence}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-5">Có giấy tờ gốc?</div>
                    <div className="col-7">
                      <strong className="">
                        {post &&
                          post.property2 &&
                          post.property2.originalDocs &&
                          post.property2.originalDocs}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-5">Tình trạng vay nợ?</div>
                    <div className="col-7">
                      <strong className="">
                        {post &&
                          post.property2 &&
                          post.property2.borrowing &&
                          post.property2.borrowing}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {post && post.relatives && Object.keys(post.relatives).length > 0 && (
          <div>
            <h4 className="modal-body bg-gray-lighter fs-base">
              5. Thông tin về người thân
            </h4>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-5">Tên người thân</div>
                    <div className="col-7">
                      <strong className="">
                        {post &&
                          post.relatives &&
                          post.relatives.relName &&
                          post.relatives.relName}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-5">Quan hệ với người thân?</div>
                    <div className="col-7">
                      <strong className="">
                        {post &&
                          post.relatives &&
                          post.relatives.whatRels &&
                          post.relatives.whatRels}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-5">Số điện thoại người thân</div>
                    <div className="col-7">
                      <strong className="">
                        {post &&
                          post.relatives &&
                          post.relatives.relPhone &&
                          post.relatives.relPhone}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="modal-footer justify-content-center">
          <button
            type="button"
            className="btn btn-default btn-sm text-center"
            onClick={() => props.handleCloseModal()}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  post: PropTypes.object,
};

export default Details;
