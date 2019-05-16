import React from 'react';
import './Preloader.scss';
export default function Preloader() {
  return (
    <div class="preloader d-flex align-items-center justify-content-center">
      <div class="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
