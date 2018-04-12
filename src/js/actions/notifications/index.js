import { FETCH, FETCHED, FETCH_FAILED } from "./types";

export const notificationsFetch = () => ({ type: FETCH });
export const notificationsFetched = payload => ({ type: FETCHED, payload });
export const notificationsFetchFailed = payload => ({ type: FETCH_FAILED, payload });