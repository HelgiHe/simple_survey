import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import QuestionHeader from '../QuestionHeader/QuestionHeader';
import s from './RankQuestion.css';

const RankQuestion = ({
  index,
  onSelect,
  question,
  questionId,
  ranks,
  selectedValue,
}) => (
  <React.Fragment>
    <QuestionHeader index={index} question={question} />
    <div className={s.rankContainer}>
      {ranks.map(value => (
        <button
          type="button"
          key={value}
          onClick={() => onSelect(value, questionId)}
          className={
            selectedValue === value
              ? s.question__option__selected
              : s.question__option
          }
        >
          {value}
        </button>
      ))}
    </div>
  </React.Fragment>
);

RankQuestion.defaultProps = {
  index: 1,
  selectedValue: '',
};

RankQuestion.propTypes = {
  index: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  ranks: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.string,
};

export default withStyles(s)(RankQuestion);
