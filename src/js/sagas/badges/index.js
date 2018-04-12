import { call, put, all, takeLatest } from "redux-saga/effects";

import { FETCH } from "actions/badges/types";
import { badgesFetched, badgesFetchFailed } from "actions/badges/";

async function apiFetchBadges() {
  const response = await fetch("/api/badges/").then(res => res.json());
  return response;
}

function* fetchBadges() {
  try {
    const response = yield call(apiFetchBadges);

    yield put(badgesFetched(response));
  } catch (e) {
    yield put(badgesFetchFailed());
  }
}

export default function* badgesSagas() {
  yield all([
    takeLatest(FETCH, fetchBadges),
  ]);
}