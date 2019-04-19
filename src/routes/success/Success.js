import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Success.css';

const Success = () => (
  <div className={s.container}>
    <h1>Completed</h1>
    <p>Thank you for your participation</p>
  </div>
);

export default withStyles(s)(Success);
