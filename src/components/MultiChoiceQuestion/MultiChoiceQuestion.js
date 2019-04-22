import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import QuestionHeader from '../QuestionHeader/QuestionHeader';
import s from './MultiChoiceQuestion.css';

const MultiChoiceQuestion = ({
  index,
  onSelect,
  options,
  question,
  questionId,
  selectedValue,
}) => (
  <React.Fragment>
    <QuestionHeader index={index} question={question} />
    <div className={s.multiContainer}>
      {options.map(option => (
        <button
          type="button"
          key={option.name}
          onClick={() => onSelect(option.name, questionId)}
          className={
            selectedValue === option.name
              ? s.question__option__selected
              : s.question__option
          }
        >
          {option.name}
        </button>
      ))}
    </div>
  </React.Fragment>
);

MultiChoiceQuestion.defaultProps = {
  index: 1,
  selectedValue: '',
};

MultiChoiceQuestion.propTypes = {
  index: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedValue: PropTypes.string,
};

export default withStyles(s)(MultiChoiceQuestion);
