/* eslint-disable no-empty-function */
/* eslint-disable require-yield */
import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import {
  GET_PLANETS_START, GET_PLANETS_SECCESS, GET_PLANETS_FAILURE, GET_PLANETS,
} from '../actionTypes';
import { request } from '../helpers/utils';

export function* workerGetPlanetsSaga() {
  yield put({ type: GET_PLANETS_START });
  try {
    const planets = yield call(request, 'planets');

    yield put({ type: GET_PLANETS_SECCESS, payload: planets });
  } catch (e) {
    yield put({ type: GET_PLANETS_FAILURE, payload: e.message });
  }
}

export function* watchGetPlanetsSaga() {
  yield takeEvery(GET_PLANETS, workerGetPlanetsSaga);
}

export default function* rootSaga() {
  yield watchGetPlanetsSaga();
}
