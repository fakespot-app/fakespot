import { fork, all } from "redux-saga/effects";

import questionsSaga from "./questions";
import userSaga from "./user";
import badgesSaga from "./badges";
import notificationsSaga from "./notifications";

export default function* rootSaga() {
  yield all([
    fork(questionsSaga),
    fork(userSaga),
    fork(badgesSaga),
    fork(notificationsSaga),
  ]);
}