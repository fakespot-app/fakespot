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

  const didAnswerQuestions = data.get("questionsCompleted") >= 5;
  const didAlreadyReceiveAchivement = data.get("achivementsCollected").toArray().find(a => a.get("achivementId") === 1).length > 0;
  if (didAnswerQuestions && !didAlreadyReceiveAchivement) {
    console.log("Get achivement!");

    const achivement = {
      achivementId: 2,
      title: "Rozwiąż 5 zadań",
      description: "Rozwiąż fakenewsa o tematyce politycznej",
      src: "/badges/4.png",
      collected: new Date().getTime(),
    };

    yield put(userGiveBadge(achivement));

    requestPermission()
      .then((result) => {
        if (result === "granted") {
          new Notification("Odblokowałeś osiągnięcie!", {
            body: achivement.titile,
            icon: achivement.src,
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
