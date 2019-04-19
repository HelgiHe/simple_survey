import React from 'react';
import PropTypes from 'prop-types';

const TextQuestion = ({ value, question, questionId, onAnswerChange }) => (
  <React.Fragment>
    <h4>{question}</h4>
    <textarea
      value={value}
      onChange={e => onAnswerChange(e.target.value, questionId)}
      rows="4"
      cols="50"
    />
  </React.Fragment>
);

TextQuestion.defaultProps = {
  value: '',
  onAnswerChange: () => {},
};

TextQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  onAnswerChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextQuestion;
