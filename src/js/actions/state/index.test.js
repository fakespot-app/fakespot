import { stateSetState } from "./index";

import { SET_STATE } from "./types";

describe("Questions actions creators", () => {
  test("questionsFetch should create an action to fetch questions", () => {
    const payload = "playing";

    const expectedOutput = {
      type: SET_STATE,
      payload,
    };

    expect(stateSetState(payload)).toEqual(expectedOutput);
  });
});