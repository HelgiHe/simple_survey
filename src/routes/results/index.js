import React from 'react';
import Layout from '../../components/Layout';
import Results from './Results';
import answersQuery from './results.graphql';

const title = 'Results';

async function action({ client }) {
  const data = await client.query({
    query: answersQuery,
  });
  return {
    chunks: ['results'],
    title,
    component: (
      <Layout>
        <Results title={title} data={data.data} />
      </Layout>
    ),
  };
}

export default action;
