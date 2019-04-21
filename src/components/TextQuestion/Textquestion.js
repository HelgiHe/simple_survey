import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import QuestionHeader from '../QuestionHeader/QuestionHeader';
import s from './TextQuestion.css';

const TextQuestion = ({
  index,
  onAnswerChange,
  question,
  questionId,
  value,
}) => (
  <React.Fragment>
    <QuestionHeader index={index} question={question} />
    <textarea
      className={s.commentBox}
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
