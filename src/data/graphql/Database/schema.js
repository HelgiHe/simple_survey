import { merge } from 'lodash';

/** * Queries ** */
import {
  schema as surveySchema,
  queries as surveyQueries,
  resolvers as QueryResolver,
} from './survey/surveyQueries';

/** * Mutations ** */
import {
  schema as mutationSchema,
  mutation,
  resolvers as mutationResolver,
} from './survey/surveyMutations';

export const schema = [...mutationSchema, ...surveySchema];

export const queries = [...surveyQueries];

export const mutations = [...mutation];

export const resolvers = merge(QueryResolver, mutationResolver);
