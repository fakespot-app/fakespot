import { FETCH, SUBMIT, FETCHED, FETCH_FAILED, SAVE_ANSWER } from "./types";

export const questionsFetch = () => ({ type: FETCH });
export const questionsFetched = payload => ({ type: FETCHED, payload });
export const questionsFetchFailed = payload => ({ type: FETCH_FAILED, payload });

export const questionsSubmit = (challangeData, challange) =>
  ({ type: SUBMIT, payload: { challangeData, challange } });

export const questionsSaveAnswer = (challangeData, points) => ({ type: SAVE_ANSWER, payload: { challangeData, points } });
