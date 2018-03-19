import { fork } from "redux-saga/effects";

import questionsSaga from "./questions";
import userSaga from "./user";

export default function* rootSaga() {
  yield [
    fork(questionsSaga),
    fork(userSaga),
  ];
}