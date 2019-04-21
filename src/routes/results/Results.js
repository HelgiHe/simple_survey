import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Consumer } from '../../context/surveyContext';
import s from './Results.css';

const Results = () => (
  <div className={s.container}>
    <h1>Results</h1>
  </div>
);
function ResultsWithContext(props) {
  return (
    <Consumer>{context => <Results {...props} questions={context} />}</Consumer>
  );
}
export default withStyles(s)(ResultsWithContext);
