import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MultiQuestion.css';

const MultiQuestion = ({ question, onSelect, questionId, options }) => (
  <React.Fragment>
    <h4>{question}</h4>
    <div className={s.multiContainer}>
      {options.map(value => (
        <button
          type="button"
          key={value}
          onClick={() => onSelect(value, questionId)}
          className={s.question__option}
        >
          {value}
        </button>
      ))}
    </div>
  </React.Fragment>
);

MultiQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  questionId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(s)(MultiQuestion);
