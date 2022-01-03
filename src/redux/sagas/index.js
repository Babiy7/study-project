/* eslint-disable no-empty-function */
/* eslint-disable require-yield */
import {
  take, takeEvery, takeLatest, takeLeading, call, put, fork,
} from 'redux-saga/effects';
import { watchGetPlanetsSaga } from './planets';
import { watchGetPeopleSaga } from './people';

// take
// takeEvery
// takeLatest
// takeLeading

// put
// call
// fork

export default function* rootSaga() {
  yield fork(watchGetPeopleSaga);
  yield fork(watchGetPlanetsSaga);
}
