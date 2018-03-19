const initialState = {
  fetched: false,
  fetching: false,
  data: {
    username: "Andrzej",
    badgesCollected: [],
    points: 0,
    avatar: "/avatar.gif",
    questionsCompleted: 4,
  },
};

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state, {
    data: { ...state.data },
  });

  switch (action.type) {
    case "USER/ADD_POINTS": {
      newState.data.points += action.payload;
      return newState;
    }

    case "USER/INCREASE_QUESTIONS_COMPLETED": {
      newState.data.questionsCompleted++;

      return newState;
    }

    case "USER/GIVE_BADGE": {
      newState.data.badgesCollected.push(action.payload);

      return newState;
    }
    // no default
  }

  return state;
}
