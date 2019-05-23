import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import axios from 'axios';
import { updatePostImage } from '../../../../actions/post.action';
class HouseholdPhoto extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    updatePostImage: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      profileID: '',
      id: '',
      uploading: false,
      images: [],
    };
  }
  componentDidMount() {
    if (this.props.profile) {
      this.setState({
        profileID: this.props.profile._id,
      });
    }
    if (this.props.id) {
      this.setState({ id: this.props.id });
    }
  }
  toast = notify.createShowQueue();
  onChange = e => {
    const errs = [];
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      const msg = 'Only 3 images can be uploaded at a time';
      return this.toast(msg, 'error', 2000);
    }

    const formData = new FormData();
    const types = ['image/png', 'image/jpeg', 'image/gif'];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }

      if (file.size > 1500000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    if (errs.length) {
      return errs.forEach(err => this.toast(err, 'error', 2000));
    }

    this.setState({ uploading: true });
    axios
      .request({
        url: '/upload/post/300',
        method: 'POST',
        data: formData,
      })
      .then(images_ => {
        this.setState(oldState => ({
          uploading: false,
          images: [...oldState.images, ...images_.data],
        }));
        const { images } = this.state;
        const newData = {
          householdPhoto: images,
        };

        this.props.updatePostImage(
          newData,
          this.state.id,
          this.state.profileID,
        );
        this.toast('Cập nhật ảnh thành công.', 'warning', 3000);
      })
      .catch(err => {
        //console.log(err);

        err.json().then(e => {
          this.toast(e.message, 'error', 3000);
          this.setState({ uploading: false });
        });
      });
  };
  filter = id => {
    return this.state.images.filter(image => image.public_id !== id);
  };

  removeImage = id => {
    this.setState({ images: this.filter(id) });
    const { images } = this.state;
    const newData = {
      householdPhoto: images,
    };

    this.props.updatePostImage(newData, this.state.id, this.state.profileID);

    this.toast('Xoá ảnh thành công.', 'warning', 2000);
  };

  onError = id => {
    this.toast('Oops, something went wrong', 'error', 3000);
    this.setState({ images: this.filter(id) });
  };
  render() {
    const { images } = this.state;
    return (
      <div className="uploadct-item">
        <Notifications options={{ zIndex: 200, top: '10px' }} />
        <div className="uploadct-item__header">
          <input
            type="file"
            id="multi3"
            onChange={e => this.onChange(e)}
            multiple
          />
          <label className="customlable" htmlFor="multi3">
            <div className="upload btn-file mb-2">
              <div className="upload__icon">
                <span className="icon-id-card">
                  <span className="upload__icon-plus" />
                </span>
              </div>
              <div className="upload__text">Cư trú</div>
            </div>

            <em className="text-gray-light fs-13">
              Sổ hộ khẩu, KT3, Tạm trú tạm vắng
            </em>
          </label>
        </div>

        <div className="uploadct-item__body" id="divImgCardNumber">
          {images.map((image, i) => {
            return (
              <div key={i} className="uploadct-item__img mr-5">
                <img
                  onClick={() => this.removeImage(image.public_id)}
                  className="img-fluid"
                  src={image.secure_url}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { updatePostImage };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HouseholdPhoto);
