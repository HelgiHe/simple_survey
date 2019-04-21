import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './QuestionHeader.css';

const QuestionHeader = ({ index, question }) => (
  <div className={s.headerContainer}>
    <div className={s.numContainer}>{index + 1}</div>
    <h4 className={s.heading}>{question}</h4>
  </div>
);

QuestionHeader.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
};

export default withStyles(s)(QuestionHeader);
