import React from 'react';
import Survey from './Survey';
import Layout from '../../components/Layout';

import questionQuery from './survey.queries.graphql';

async function action({ client }) {
  const data = await client.query({
    query: questionQuery,
  });
  return {
    title: 'Survey',
    chunks: ['survey'],
    component: (
      <Layout>
        <Survey data={data.data.databaseGetAllQuestions} />
      </Layout>
    ),
  };
}

export default action;
