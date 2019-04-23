import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import QuestionHeader from '../QuestionHeader/QuestionHeader';
import MultiChoiceResults from '../MultiChoiceResults/MultiChoiceResults';
import s from './SurveyResult.css';

const QuestionResult = ({ answers, index, question, type }) => (
  <div>
    <QuestionHeader question={question} index={index} />
    {type === 'text' &&
      answers.map(answer => <p key={answer.id}>{answer.answer}</p>)}
    {type === 'rank' && (
      <p>
        Average Rank:{' '}
        {(
          answers.reduce(
            (sum, answer) => sum + parseInt(answer.answer, 10),
            0,
          ) / answers.length
        ).toFixed(2)}
      </p>
    )}
    {type === 'multi' && (
      <div className={s.multiChoiceContainer}>
        <MultiChoiceResults answers={answers} />
      </div>
    )}
  </div>
);

QuestionResult.propTypes = {
  index: PropTypes.number.isRequired,
  answers: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default withStyles(s)(QuestionResult);
