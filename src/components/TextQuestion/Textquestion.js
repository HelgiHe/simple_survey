import React from 'react';
import PropTypes from 'prop-types';

const TextQuestion = ({ value, question }) => (
  <React.Fragment>
    <h4>{question}</h4>
    <textarea value={value} rows="4" cols="50" />
  </React.Fragment>
);

TextQuestion.defaultProps = {
  value: '',
};

TextQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default TextQuestion;
