import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import s from './Success.css';

const Success = () => (
  <div className={s.container}>
    <h1>Completed</h1>
    <p>Thank you for your participation</p>
    <button
      className={s.button}
      type="button"
      onClick={() => history.push('/results')}
    >
      View Results
    </button>
  </div>
);

export default withStyles(s)(Success);
