import { merge } from 'lodash';

/** * Queries ** */
import {
  schema as surveySchema,
  queries as surveyQueries,
  resolvers as GetAllUsersResolver,
} from './survey/surveyQueries';

/** * Mutations ** */
import {
  mutation,
  resolvers as mutationResolver,
} from './survey/surveyMutations';

export const schema = [...surveySchema];

export const queries = [...surveyQueries];

export const mutations = [...mutation];

export const resolvers = merge(GetAllUsersResolver, mutationResolver);
