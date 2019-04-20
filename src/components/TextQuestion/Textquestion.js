import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './TextQuestion.css';

const TextQuestion = ({
  index,
  onAnswerChange,
  question,
  questionId,
  value,
}) => (
  <React.Fragment>
    <div className={s.headerContainer}>
      <div className={s.numContainer}>{index}</div>
      <h4 className={s.heading}>{question}</h4>
    </div>
    <textarea
      value={value}
      onChange={e => onAnswerChange(e.target.value, questionId)}
      rows="4"
      cols="50"
    />
  </React.Fragment>
);

TextQuestion.defaultProps = {
  index: 1,
  value: '',
  onAnswerChange: () => {},
};

TextQuestion.propTypes = {
  index: PropTypes.number,
  onAnswerChange: PropTypes.func,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default withStyles(s)(TextQuestion);
