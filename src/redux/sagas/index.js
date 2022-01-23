/* eslint-disable no-empty-function */
/* eslint-disable require-yield */
import {
  take, takeEvery, takeLatest, takeLeading, call, put, fork, select,
} from 'redux-saga/effects';
import { watchGetPlanetsSaga } from './planets';
import { watchGetPeopleSaga } from './people';

// take -
// takeEvery - бере кожний ефект
// takeLatest - бере останній ефект, ігнорує всі попередні
// takeLeading - бере перший ефект, ігнорує всі наступні

// put - відправляє дані в редюсер
// call - блокуючий ефект, виконує ефекти один за одним
// fork - не блокуючий ефект, який виконує ефекти паралельно

// select - повертає store

// RESUME

// watcher - слідкують за екшинами
// worker - відповідають за бізнес логіку
// effects in saga - бувають двох типів блокуючі і не блокуючі

export default function* rootSaga() {
  yield fork(watchGetPeopleSaga);
  yield fork(watchGetPlanetsSaga);
}
