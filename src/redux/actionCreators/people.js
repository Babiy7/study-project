import { GET_PEOPLE } from '../actionTypes';

export const getPeople = (params) => ({
  type: GET_PEOPLE,
  payload: params,
});
