import React from 'react';
import './Preloader.scss';
export default function Preloader() {
  return (
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
