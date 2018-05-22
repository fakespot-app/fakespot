import { Map, fromJS } from "immutable";
import { FETCHED, ADD_POINTS, INCREASE_QUESTIONS_COMPLETED, GIVE_BADGE } from "actions/user/types";

const initialState = Map({
  fetched: false,
  fetching: false,
  data: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED: {
      return state
        .set("fetched", true)
        .set("data", fromJS(action.payload));
    }

    case ADD_POINTS: {
      return state
        .updateIn(["data", "points"], points => points + action.payload);
    }

    case INCREASE_QUESTIONS_COMPLETED: {
      return state
        .updateIn(["data", "questionsCompleted"], points => points + 1);
    }

    case GIVE_BADGE: {
      return state
        .updateIn(["data", "achivementsCollected"], achivementsCollected => achivementsCollected.push(action.payload));
    }
    // no default
  }

  return state;
}
