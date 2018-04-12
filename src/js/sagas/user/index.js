import { put, takeLatest, all, select } from "redux-saga/effects";
import { requestPermission } from "utils/notifications";

function* completeQuestion() {
  yield put({ type: "USER/INCREASE_QUESTIONS_COMPLETED" });

  const user = yield select(state => state.user);

  if (user.data.questionsCompleted >= 5 && user.data.badgesCollected.indexOf(1) < 0) {
    yield put({ type: "USER/GIVE_BADGE", payload: 1 });

    requestPermission()
      .then((result) => {
        if (result === "granted") {
          new Notification("Odblokowałeś osiągnięcie!", {
            body: "Rozwiąż 5 zadań",
            icon: "/badge2.png",
          });
        }
      });
  }
}

function* userSaga() {
  yield all([
    takeLatest("USER/COMPLETE_QUESTION", completeQuestion),
  ]);
}


export default userSaga;
