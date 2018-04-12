import { Map, List, fromJS } from "immutable";
import { FETCHED } from "actions/badges/types";

const initialState = Map({
  fetched: false,
  fetching: false,
  data: List(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED: {
      return state
        .set("data", fromJS(action.payload));
    }

    // no default
  }

  return state;
}
