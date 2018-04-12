import { questionsFetch, questionsFetched, questionsFetchFailed, questionsSubmit, questionsSaveAnswer } from "./index";

import { FETCH, FETCHED, FETCH_FAILED, SUBMIT, SAVE_ANSWER } from "./types";

describe("Questions actions creators", () => {
  test("questionsFetch should create an action to fetch questions", () => {
    const expectedOutput = {
      type: FETCH,
    };

    expect(questionsFetch()).toEqual(expectedOutput);
  });

  test("questionsFetched should create an action after questions are fetched", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: FETCHED,
      payload,
    };

    expect(questionsFetched(payload)).toEqual(expectedOutput);
  });

  test("questionsFetchFailed should create an action after questions failed to fetch", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: FETCH_FAILED,
      payload,
    };

    expect(questionsFetchFailed(payload)).toEqual(expectedOutput);
  });

  test("questionsSubmit should create an action after submittion of the question", () => {
    const data = [];
    const challange = {};

    const payload = {
      data,
      challange,
    };

    const expectedOutput = {
      type: SUBMIT,
      payload,
    };

    expect(questionsSubmit(data, challange)).toEqual(expectedOutput);
  });

  test("questionsSaveAnswer should create an action to save the question", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: SAVE_ANSWER,
      payload,
    };

    expect(questionsSaveAnswer(payload)).toEqual(expectedOutput);
  });
});