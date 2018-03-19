import { put, takeLatest, all, call } from "redux-saga/effects";

const userToken = String(Math.floor(Math.random() * 10000000));

async function apiFetchQuestion() {
  const response = await fetch(`/api/question/${userToken}`).then(res => res.json());
  return response;
}

function* fetchQuestion() {
  try {
    const response = yield call(apiFetchQuestion);

    yield put({ type: "QUESTION_FETCHED", payload: response });
  } catch (e) {
    yield put({ type: "QUESTION_FETCH_FAILED", message: e.message });
  }
}

function* submitAnswers({ payload }) {
  const { data, challange } = payload;

  yield put({ type: "USER/COMPLETE_QUESTION" });
  yield put({ type: "QUESTION/SAVE_ANSWER", payload: data });

  if (data.isTrue === challange.isTrue) {
    yield put({ type: "USER/ADD_POINTS", payload: 100 });
  }

  yield put({ type: "STATE/SET_STATE", payload: "answer" });
}

function* questionsSaga() {
  yield all([
    takeLatest("QUESTION/FETCH_REQUESTED", fetchQuestion),
    takeLatest("QUESTION/SUBMIT", submitAnswers),
  ]);
}


export default questionsSaga;