/* eslint-disable no-empty-function */
/* eslint-disable require-yield */
import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import {
  GET_PEOPLE_START, GET_PEOPLE_SECCESS, GET_PEOPLE_FAILURE, GET_PEOPLE,
} from '../actionTypes';
import { request } from '../helpers/utils';

export function* workerGetPeopleSaga() {
  yield put({ type: GET_PEOPLE_START });
  try {
    const people = yield call(request, 'people');

    yield put({ type: GET_PEOPLE_SECCESS, payload: people });
  } catch (e) {
    yield put({ type: GET_PEOPLE_FAILURE, payload: e.message });
  }
}

export function* watchGetPeopleSaga() {
  yield takeEvery(GET_PEOPLE, workerGetPeopleSaga);
}
