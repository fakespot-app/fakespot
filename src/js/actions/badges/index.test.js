import { badgesFetch, badgesFetched, badgesFetchFailed } from "./index";
import { FETCH, FETCHED, FETCH_FAILED } from "./types";

describe("Badges actions creators", () => {
  test("badgesFetch should create an action to fetch badges", () => {
    const expectedOutput = {
      type: FETCH,
    };

    expect(badgesFetch()).toEqual(expectedOutput);
  });

  test("badgesFetched should create an action after badges are fetched", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: FETCHED,
      payload,
    };

    expect(badgesFetched(payload)).toEqual(expectedOutput);
  });

  test("badgesFetchFailed should create an action after badges failed to fetch", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: FETCH_FAILED,
      payload,
    };

    expect(badgesFetchFailed(payload)).toEqual(expectedOutput);
  });
});