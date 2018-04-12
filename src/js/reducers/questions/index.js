import { Map, List, fromJS } from "immutable";
import { SAVE_ANSWER, FETCHED } from "actions/questions/types";

const initialState = Map({
  fetched: false,
  fetching: false,
  data: List(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ANSWER: {
      return state
        .setIn(["data", -1, "userAnswer"], action.payload)
        .setIn(["data", -1, "wasAnswered"], true);
    }

    case FETCHED: {
      return state
        .set("fetched", true)
        .update("data", data => data.push(
          fromJS(
            {
              ...action.payload,

              wasAnswered: false,
              userAnswer: {
                sources: [],
                isTrue: null,
              },
            },
          ),
        ));
    }


    // no default
  }

  return state;
}
