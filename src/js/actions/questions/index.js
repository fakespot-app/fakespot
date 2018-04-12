import { FETCH, SUBMIT, FETCHED, FETCH_FAIL, SAVE_ANSWER } from "./types";

export const questionsFetch = () => ({ type: FETCH });
export const questionsSubmit = (data, challange) =>
  ({ type: SUBMIT, payload: { data, challange } });

export const questionsFetched = payload => ({ type: FETCHED, payload });
export const questionsFetchFailed = payload => ({ type: FETCH_FAIL, payload });

export const questionsSaveAnswer = payload => ({ type: SAVE_ANSWER, payload });
