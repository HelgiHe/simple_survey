import React, { useReducer } from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import gql from 'graphql-tag';
import s from './Survey.css';
import history from '../../history';
import TextQuestion from '../../components/TextQuestion/Textquestion';
import MultiQuestion from '../../components/MultiQuestion/MultiQuestion';

import reducer from './Survey.reducer';
import questionQuery from './survey.queries.graphql';

const Survey = props => {
  const initialState = { answers: {} };
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    data: { loading, databaseGetAllQuestions },
  } = props;
  const answerChanged = (value, questionId) => {
    dispatch({ type: 'ANSWER_CHANGED', payload: { value, questionId } });
  };

  const onSubmit = async event => {
    event.preventDefault();
    const { answers } = state;
    await Object.keys(answers).forEach(id => {
      props
        .mutate({
          variables: {
            question_id: id,
            answer_value: answers[id],
          },
        })
        .then(() => {});
    });
    history.push('/success');
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className={s.questionsContainer}>
        {loading
          ? '...Loading'
          : databaseGetAllQuestions.map(question => {
              switch (question.question_type) {
                case 'text':
                  return (
                    <TextQuestion
                      key={question.id}
                      questionId={question.id}
                      question={question.question}
                      value={state.answers[question.id]}
                      onAnswerChange={(text, questionId) =>
                        answerChanged(text, questionId)
                      }
                    />
                  );
                case 'multi':
                  return (
                    <MultiQuestion
                      key={question.id}
                      question={question.question}
                      questionId={question.id}
                      options={['1', '2', '3', '4', '5']}
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
      <input type="submit" value="submit" />
      <button type="button">Reset</button>
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
  mutation AnswersMutation($question_id: String!, $answer_value: String!) {
    databaseCreateAnswer(
      question_id: $question_id
      answer_value: $answer_value
    ) {
      id
    }
  }
`;

export default compose(
  withStyles(s),
  graphql(questionQuery),
  graphql(mutation),
)(Survey);
