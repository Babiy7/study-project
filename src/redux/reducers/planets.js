import { GET_PLANETS_START, GET_PLANETS_SECCESS, GET_PLANETS_FAILURE } from '../actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS_START: {
      return {
        loading: true,
        error: null,
        data: [],
      };
    }
    case GET_PLANETS_SECCESS: {
      return {
        loading: false,
        data: [...state.data].concat(action.payload),
        error: null,
      };
    }
    case GET_PLANETS_FAILURE: {
      return {
        loading: false,
        data: [],
        error: { message: action.payload, isError: true },
      };
    }

    default: {
      return state;
    }
  }
}
