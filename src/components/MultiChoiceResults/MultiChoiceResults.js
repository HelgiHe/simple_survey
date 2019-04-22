import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './MultiChoiceResults.css';

const MultiChoiceResults = ({ answers }) => {
  const count = answers.reduce((tally, answer) => {
    tally[answer.answer] = (tally[answer.answer] || 0) + 1;
    return tally;
  }, {});

  return Object.keys(count).map((item, index) => (
    <div key={index} className={s.tallyContainer}>
      <h5 className={s.questionText}>{item}</h5>
      <p>{((100 * parseInt(count[item], 10)) / answers.length).toFixed(2)}%</p>
    </div>
  ));
};

export default withStyles(s)(MultiChoiceResults);
