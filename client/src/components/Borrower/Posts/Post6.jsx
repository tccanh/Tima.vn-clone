import React, { Component } from 'react';

export default class Post6 extends Component {
  render() {
    return (
      <div class="box-2 mb-3">
        <div class="box-2-header d-flex flex-column flex-md-row">
          <h2 class="box-2-title mb-md-0 mb-3">Tải ảnh CMND</h2>

          <div class="align-self-md-center ml-md-auto">
            <p
              class="fs-12 text-gray-light mb-1"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              Khả năng nhận được khoản vay
            </p>

            <div class="progress progress-style-1">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: '100%' }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="progress-tooltip">100%</span>
              </div>
            </div>
          </div>
        </div>

        <input type="hidden" id="hddTypeImg" value="0" />
        <input
          type="file"
          name="uploadImg"
          id="uploadImg"
          multiple=""
          style={{ display: 'none' }}
          accept="image/*"
        />

        <div class="uploadct bg-white p-md-5 pt-md-4 p-3">
          <h2
            class="text-uppercase fs-16 fw-6 mb-0"
            style={{ fontSize: '30px', fontWeight: '600' }}
          >
            Upload chứng từ
          </h2>

          <hr class="border-gray mt-md-4 mt-3 mb-0" />

          <div class="uploadct-item">
            <div class="uploadct-item__header" onclick="UploadImg(1)">
              <div class="upload btn-file mb-2">
                <div class="upload__icon">
                  <span class="icon-id-card">
                    <span class="upload__icon-plus" />
                  </span>
                </div>
                <div class="upload__text">Nhân thân</div>
              </div>

              <em class="text-gray-light fs-13">
                CMND, Hộ chiếu, Thẻ căn cước
              </em>
            </div>

            <div
              class="uploadct-item__body"
              id="divImgCardNumber"
              name="divImgCardNumber"
            />
          </div>

          <div class="uploadct-item">
            <div class="uploadct-item__header" onclick="UploadImg(2)">
              <div class="upload btn-file mb-2">
                <div class="upload__icon">
                  <span class="icon-house">
                    <span class="upload__icon-plus" />
                  </span>
                </div>
                <div class="upload__text">Cư trú</div>
              </div>

              <em class="text-gray-light fs-13">
                Sổ hộ khẩu, KT3, Tạm trú tạm vắng
              </em>
            </div>

            <div
              class="uploadct-item__body"
              id="divImgLocation"
              name="divImgLocation"
            />
          </div>

          <div class="uploadct-item">
            <div class="uploadct-item__header" onclick="UploadImg(5)">
              <div class="upload btn-file mb-2">
                <div class="upload__icon">
                  <span class="icon-cardid-back">
                    <span class="upload__icon-plus" />
                  </span>
                </div>
                <div class="upload__text">Tài sản</div>
              </div>

              <em class="text-gray-light fs-13">
                Giấy tờ xe, ảnh xe, ảnh tài sản thế chấp...
              </em>
            </div>

            <div
              class="uploadct-item__body"
              id="divImgContractAsset"
              name="divImgContractAsset"
            />
          </div>

          <div class="uploadct-item">
            <div class="uploadct-item__header" onclick="UploadImg(3)">
              <div class="upload btn-file mb-2">
                <div class="upload__icon">
                  <span class="icon-wallet-gray">
                    <span class="upload__icon-plus" />
                  </span>
                </div>
                <div class="upload__text">Thu nhập</div>
              </div>

              <em class="text-gray-light fs-13">
                Sao kê bảng lương. HĐLĐ, BHXH ...
              </em>
            </div>

            <div
              class="uploadct-item__body"
              id="divImgContractAndSalary"
              name="divImgContractAndSalary"
            />
          </div>
        </div>
      </div>
    );
  }
}
