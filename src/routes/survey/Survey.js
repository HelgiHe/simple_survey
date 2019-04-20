import React, { useReducer } from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import gql from 'graphql-tag';
import s from './Survey.css';
import history from '../../history';
import TextQuestion from '../../components/TextQuestion/Textquestion';
import RankQuestion from '../../components/RankQuestion/RankQuestion';

import reducer from './Survey.reducer';
import questionQuery from './survey.queries.graphql';

const Survey = props => {
  const initialState = { answers: {} };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { answers } = state;
  const {
    data: { loading, databaseGetAllQuestions },
  } = props;
  const answerChanged = (value, questionId) => {
    dispatch({ type: 'ANSWER_CHANGED', payload: { value, questionId } });
  };

  const onSubmit = async event => {
    event.preventDefault();
    history.push('/success');
    const allAnswers = await JSON.stringify(answers);

    props
      .mutate({
        variables: {
          answer_value: allAnswers,
        },
      })
      .then(() => {
        history.push('/success');
      })
      .catch(() => history.push('/error'));
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={s.container}>
      <div className={s.questionsContainer}>
        {loading
          ? '...Loading'
          : databaseGetAllQuestions.map((question, index) => {
              switch (question.question_type) {
                case 'text':
                  return (
                    <TextQuestion
                      index={index + 1}
                      key={question.id}
                      questionId={question.id}
                      question={question.question}
                      value={state.answers[question.id]}
                      onAnswerChange={(text, questionId) =>
                        answerChanged(text, questionId)
                      }
                    />
                  );
                case 'rank':
                  return (
                    <RankQuestion
                      key={question.id}
                      index={index + 1}
                      question={question.question}
                      questionId={question.id}
                      ranks={['1', '2', '3', '4', '5']}
                      selectedValue={answers[question.id]}
                      onSelect={(value, questionId) =>
                        answerChanged(value, questionId)
                      }
                    />
                  );
                default:
                  return <div />;
              }
            })}
      </div>
      <input className={s.button} type="submit" value="Submit" />
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Reset
      </button>
    </form>
  );
};

Survey.propTypes = {
  mutate: PropTypes.func.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    databaseGetAllQuestions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        question_type: PropTypes.string,
      }),
    ),
  }).isRequired,
};

const mutation = gql`
  mutation AnswersMutation($answer_value: String!) {
    databaseCreateAnswer(answer_value: $answer_value) {
      id
    }
  }
`;

export default compose(
  withStyles(s),
  graphql(questionQuery),
  graphql(mutation),
)(Survey);
