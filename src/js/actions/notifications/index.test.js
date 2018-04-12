import { notificationsFetch, notificationsFetched, notificationsFetchFailed } from "./index";
import { FETCH, FETCHED, FETCH_FAILED } from "./types";

describe("Notifications actions creators", () => {
  test("notificationsFetch should create an action to fetch badges", () => {
    const expectedOutput = {
      type: FETCH,
    };

    expect(notificationsFetch()).toEqual(expectedOutput);
  });

  test("notificationsFetched should create an action after notifications are fetched", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: FETCHED,
      payload,
    };

    expect(notificationsFetched(payload)).toEqual(expectedOutput);
  });

  test("notificationsFetchFailed should create an action after notifications failed to fetch", () => {
    const payload = {
      data: [],
    };

    const expectedOutput = {
      type: FETCH_FAILED,
      payload,
    };

    expect(notificationsFetchFailed(payload)).toEqual(expectedOutput);
  });
});