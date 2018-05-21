import { Map, List, fromJS } from "immutable";
import { SAVE_ANSWER, FETCHED } from "actions/questions/types";

const initialState = Map({
  fetched: false,
  fetching: false,
  data: List(),
  currentLevel: 1,
  levelPoints: 0,
  currentLevelMaxPoints: 1000,
  currentLevelDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda exercitationem eum odio repellendus nobis! Omnis incidunt expedita magni, earum obcaecati fugit modi doloribus deserunt porro, repellendus ratione blanditiis eveniet?",
  currentLevelHeader: "Fakenewsy? A komu to potrzebne?",
  currentLevelImage: "/badges/4.png",
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ANSWER: {
      return state
        .setIn(["data", -1, "userAnswer"], action.payload.challangeData)
        .setIn(["data", -1, "wasAnswered"], true)
        .update("levelPoints", points => points + action.payload.points);
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
