import { put, takeLatest, takeEvery, all, select, call } from "redux-saga/effects";

import { COMPLETE_QUESTION, FETCH } from "actions/user/types";
import { userFetched, userFetchFailed, userIncreaseQuestionsCompleted, userGiveBadge } from "actions/user";

import { requestPermission } from "utils/notifications";

async function apiFetchUser() {
  const response = await fetch("/api/users/me").then(res => res.json());
  return response;
}

function* completeQuestion() {
  yield put(userIncreaseQuestionsCompleted());

  const data = yield select(state => state.user.get("data"));

  if (data.get("questionsCompleted") >= 5 && data.get("achivementsCollected").toArray().indexOf(1) < 0) {
    yield put(userGiveBadge(1));

    requestPermission()
      .then((result) => {
        if (result === "granted") {
          new Notification("Odblokowałeś osiągnięcie!", {
            body: "Rozwiąż 5 zadań",
            icon: "/badges/2.png",
          });
        }
      });
  }
}

function* fetchUser() {
  try {
    const response = yield call(apiFetchUser);
    yield put(userFetched(response));
  } catch (e) {
    yield put(userFetchFailed(e));
  }
}

function* userSaga() {
  yield all([
    takeEvery(COMPLETE_QUESTION, completeQuestion),
    takeLatest(FETCH, fetchUser),
  ]);
}


export default userSaga;
