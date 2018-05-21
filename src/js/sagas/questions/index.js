import { put, takeLatest, all, call } from "redux-saga/effects";

import { FETCH, SUBMIT } from "actions/questions/types";
import { questionsFetched, questionsFetchFailed, questionsSaveAnswer } from "actions/questions";

import { stateSetState } from "actions/state";
import { userCompleteQuestion } from "actions/user";

const userToken = String(Math.floor(Math.random() * 10000000));

async function apiFetchQuestion() {
  const response = await fetch(`/api/question/${userToken}`).then(res => res.json());
  return response;
}

function* fetchQuestion() {
  try {
    const response = yield call(apiFetchQuestion);

    yield put(questionsFetched(response));
  } catch (e) {
    yield put(questionsFetchFailed(e));
  }
}

function* submitAnswers({ payload }) {
  const { challangeData, challange } = payload;

  yield put(userCompleteQuestion());

  if (challangeData.isTrue === challange.isTrue) {
    yield put(questionsSaveAnswer(challangeData, 100));
  } else {
    yield put(questionsSaveAnswer(challangeData, 0));
  }

  yield put(stateSetState("answer"));
}

function* questionsSaga() {
  yield all([
    takeLatest(FETCH, fetchQuestion),
    takeLatest(SUBMIT, submitAnswers),
  ]);
}


export default questionsSaga;