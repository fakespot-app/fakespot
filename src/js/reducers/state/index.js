import { Map } from "immutable";
import { SET_STATE } from "actions/state/types";

const initialState = Map({
  state: "splash",
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE: {
      return state
        .set("state", action.payload);
    }

    // no default
  }

  return state;
}
