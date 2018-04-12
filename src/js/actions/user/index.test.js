import { userFetch, userFetched, userFetchFailed, userCompleteQuestion, userAddPoints, userIncreaseQuestionsCompleted, userGiveBadge } from "./index";

import { FETCH, FETCHED, FETCH_FAILED, COMPLETE_QUESTION, ADD_POINTS, INCREASE_QUESTIONS_COMPLETED, GIVE_BADGE } from "./types";

describe("User actions creators", () => {
  test("userFetch should create an action to fetch questions", () => {
    const expectedOutput = {
      type: FETCH,
    };

    expect(userFetch()).toEqual(expectedOutput);
  });

  test("userFetched should create an action after questions are fetched", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: FETCHED,
      payload,
    };

    expect(userFetched(payload)).toEqual(expectedOutput);
  });

  test("questionsFetchFailed should create an action after questions failed to fetch", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: FETCH_FAILED,
      payload,
    };

    expect(userFetchFailed(payload)).toEqual(expectedOutput);
  });

  test("userCompleteQuestion should create an action after user completed question", () => {
    const expectedOutput = {
      type: COMPLETE_QUESTION,
    };

    expect(userCompleteQuestion()).toEqual(expectedOutput);
  });

  test("userAddPoints should create an action to add points to the user", () => {
    const payload = 100;

    const expectedOutput = {
      type: ADD_POINTS,
      payload,
    };

    expect(userAddPoints(payload)).toEqual(expectedOutput);
  });

  test("userIncreaseQuestionsCompleted should create an action to increase questions completed count", () => {
    const expectedOutput = {
      type: INCREASE_QUESTIONS_COMPLETED,
    };

    expect(userIncreaseQuestionsCompleted()).toEqual(expectedOutput);
  });


  test("userGiveBadge should create an action to user give badge to the user", () => {
    const payload = 1;

    const expectedOutput = {
      type: GIVE_BADGE,
      payload,
    };

    expect(userGiveBadge(payload)).toEqual(expectedOutput);
  });
});