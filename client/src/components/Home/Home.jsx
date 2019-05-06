import React, { Component } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

export default class Home extends Component {
  render() {
    return (
      <>
        <Section1 />
        <Section2 />
      </>
    );
  }
}
