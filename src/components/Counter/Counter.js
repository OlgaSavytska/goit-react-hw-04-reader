import React from 'react';
import PropTypes from 'prop-types';
import styled2 from './Counter.module.css';

const Counter = ({ values, total }) => (
  <p className={styled2.counter}>
    {values} / {total}
  </p>
);

Counter.propTypes = {
  values: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Counter;
