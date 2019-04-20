import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Results.css';

const Results = () => (
  <div className={s.container}>
    <h1>Results</h1>
  </div>
);

export default withStyles(s)(Results);
