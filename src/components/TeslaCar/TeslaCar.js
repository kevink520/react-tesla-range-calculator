import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCar.css';

const TeslaCar = ({ wheelsize }) => (
  <div className="tesla-car tesla-car-animation">
    <div className={`tesla-wheels tesla-wheel--animation--${wheelsize}`}>
      <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheelsize}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheelsize}`}></div>
    </div>
  </div>
);

TeslaCar.propTypes = {
  wheelsize: PropTypes.number,
};

export default TeslaCar;

