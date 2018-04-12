import { FETCH, FETCHED, FETCH_FAILED, COMPLETE_QUESTION, ADD_POINTS, INCREASE_QUESTIONS_COMPLETED, GIVE_BADGE } from "./types";

export const userFetch = () => ({ type: FETCH });
export const userFetched = payload => ({ type: FETCHED, payload });
export const userFetchFailed = payload => ({ type: FETCH_FAILED, payload });
export const userCompleteQuestion = () => ({ type: COMPLETE_QUESTION });
export const userAddPoints = payload => ({ type: ADD_POINTS, payload });
export const userIncreaseQuestionsCompleted = () => ({ type: INCREASE_QUESTIONS_COMPLETED });
export const userGiveBadge = payload => ({ type: GIVE_BADGE, payload });