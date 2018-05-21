import { FETCH, SUBMIT, FETCHED, FETCH_FAILED, SAVE_ANSWER } from "./types";

export const questionsFetch = () => ({ type: FETCH });
export const questionsFetched = payload => ({ type: FETCHED, payload });
export const questionsFetchFailed = payload => ({ type: FETCH_FAILED, payload });

export const questionsSubmit = (submittedChallange, challange) =>
  ({ type: SUBMIT, payload: { submittedChallange, challange } });

export const questionsSaveAnswer =
  (submittedChallange, points) => ({ type: SAVE_ANSWER, payload: { submittedChallange, points } });
