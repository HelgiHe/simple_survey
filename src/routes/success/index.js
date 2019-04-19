import React from 'react';
import Layout from '../../components/Layout';
import Success from './Success';

const title = 'Survey Completed';

function action() {
  return {
    chunks: ['success'],
    title,
    component: (
      <Layout>
        <Success title={title} />
      </Layout>
    ),
  };
}

export default action;
