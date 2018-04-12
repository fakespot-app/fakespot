import { FETCH, SUBMIT, FETCHED, FETCH_FAILED, SAVE_ANSWER } from "./types";

export const questionsFetch = () => ({ type: FETCH });
export const questionsFetched = payload => ({ type: FETCHED, payload });
export const questionsFetchFailed = payload => ({ type: FETCH_FAILED, payload });

export const questionsSubmit = (data, challange) =>
  ({ type: SUBMIT, payload: { data, challange } });

export const questionsSaveAnswer = payload => ({ type: SAVE_ANSWER, payload });
