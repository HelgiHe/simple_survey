import React from 'react';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import QuestionResult from '../../components/QuestionResult/QuestionResult';
import answersQuery from './results.graphql';
import s from './Results.css';

const Results = props => {
  const {
    data: { loading, databaseGetAllQuestions },
  } = props;
  return (
    <div className={s.container}>
      <h1>Results</h1>
      {loading
        ? '...Loading'
        : databaseGetAllQuestions.map((question, index) => (
            <QuestionResult
              key={question.id}
              answers={question.answers || []}
              index={index}
              question={question.question}
              type={question.question_type}
            />
          ))}
    </div>
  );
};

Results.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    databaseGetAllQuestions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        answers: PropTypes.arrayOf(
          PropTypes.shape({
            answer: PropTypes.string,
            id: PropTypes.string,
          }),
        ),
        question: PropTypes.string.isRequired,
        question_type: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default compose(
  withStyles(s),
  graphql(answersQuery),
)(Results);
