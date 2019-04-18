import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MultiQuestion.css';

const MultiQuestion = ({ question }) => (
  <React.Fragment>
    <h4>{question}</h4>
    <div className={s.multiContainer}>
      <div className={s.question__option}>1</div>
      <div className={s.question__option}>2</div>
      <div className={s.question__option}>3</div>
      <div className={s.question__option}>4</div>
      <div className={s.question__option}>5</div>
    </div>
  </React.Fragment>
);

MultiQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};

export default withStyles(s)(MultiQuestion);
