import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import TextQuestion from '../../components/TextQuestion/Textquestion';
import MultiQuestion from '../../components/MultiQuestion/MultiQuestion';

import questionQuery from './survey.graphql';
import './Survey.css';

class Survey extends Component {
  static propTypes = {
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

  render() {
    const {
      data: { loading, databaseGetAllQuestions },
    } = this.props;
    return (
      <div className="questionsContainer">
        {loading
          ? '...Loading'
          : databaseGetAllQuestions.map(question => {
              switch (question.question_type) {
                case 'text':
                  return (
                    <TextQuestion
                      key={question.id}
                      question={question.question}
                      value="bla"
                    />
                  );
                case 'multi':
                  return (
                    <MultiQuestion
                      key={question.id}
                      question={question.question}
                    />
                  );
                default:
                  return <div />;
              }
            })}
      </div>
    );
  }
}

export default graphql(questionQuery)(Survey);
