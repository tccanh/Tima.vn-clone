import React from 'react';
import PropTypes from 'prop-types';

const TextInputPost = ({
  className1,
  title,
  type,
  className2,
  id,
  name,
  placeholder,
  value,
  error,
  onChange,
  infos,
  disable
}) => {
  return (
    <div class="form-group row">
      <label for="fc-6" className={className1} style={{ fontSize: '18px' }}>
        {title}
      </label>
      <div class="col-lg-9">
        <input
          type={type}
          className={className2}
          id={id}
          name={name}
          disable={disable}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
        {infos && <small class="text-muted">{infos}</small>}
      </div>
    </div>
  );
};

TextInputPost.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputPost.defaultProps = {
  type: 'text'
};

export default TextInputPost;
