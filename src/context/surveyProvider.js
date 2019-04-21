import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './surveyContext';

class SurveyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
    };
  }

  setQuestions() {
    this.setState({ questions: { bla: '1' } });
  }

  render() {
    return (
      <Provider value={this.state.questions}>{this.props.children}</Provider>
    );
  }
}

SurveyProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default SurveyProvider;
