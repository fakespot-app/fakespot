import { FETCH, FETCHED, FETCH_FAILED } from "./types";

export const badgesFetch = () => ({ type: FETCH });
export const badgesFetched = payload => ({ type: FETCHED, payload });
export const badgesFetchFailed = payload => ({ type: FETCH_FAILED, payload });