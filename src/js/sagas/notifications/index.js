import { call, put, all, takeLatest } from "redux-saga/effects";

import { FETCH } from "actions/notifications/types";
import { notificationsFetched, notificationsFetchFailed } from "actions/notifications";

async function apiFetchNotifications() {
  const response = await fetch("/api/notifications/").then(res => res.json());
  return response;
}

function* fetchNotifications() {
  try {
    const response = yield call(apiFetchNotifications);

    yield put(notificationsFetched(response));
  } catch (e) {
    yield put(notificationsFetchFailed(e));
  }
}

export default function* notificationsSaga() {
  yield all([
    takeLatest(FETCH, fetchNotifications),
  ]);
}