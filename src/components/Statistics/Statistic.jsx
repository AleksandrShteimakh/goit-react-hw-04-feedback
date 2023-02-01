import React from 'react';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = props => (
  <>
    <p className={css.variant}>Good:{props.good}</p>
    <p className={css.variant}>Neutral:{props.neutral}</p>
    <p className={css.variant}>Bad:{props.bad}</p>
    <p className={css.variant}>Total:{props.total}</p>
    <p className={css.variant}>Positive feedback:{props.percentage}%</p>
  </>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
