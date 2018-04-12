import { fork, all } from "redux-saga/effects";

import questionsSaga from "./questions";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([
    fork(questionsSaga),
    fork(userSaga),
  ]);
}