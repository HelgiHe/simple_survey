import React from 'react';
import Layout from '../../components/Layout';
import Results from './Results';

const title = 'Survey Completed';

function action() {
  return {
    chunks: ['results'],
    title,
    component: (
      <Layout>
        <Results title={title} />
      </Layout>
    ),
  };
}

export default action;
