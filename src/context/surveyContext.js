import React from 'react';

const SurveyContext = React.createContext({
  questions: {},
});

export const { Provider } = SurveyContext;
export const { Consumer } = SurveyContext;
