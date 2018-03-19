import { completeQuestion } from "../user";

const userToken = String(Math.floor(Math.random() * 10000000));

export const fetchQuestion = () => (dispatch) => {
  fetch(`/api/question/${userToken}`)
    .then(res => res.json())
    .then(res => dispatch({ type: "QUESTION_FETCHED", payload: res }));
};

export const submitAnswers = (data, challange) => (dispatch) => {
  dispatch({ type: "QUESTION/USER_SUBMIT", payload: data });
  dispatch(completeQuestion());

  if (data.isTrue === challange.isTrue) {
    dispatch({ type: "USER/ADD_POINTS", payload: 100 });
  }

  dispatch({ type: "SET_STATE", payload: "answer" });

  return {};
};

export const setState = state => ({ type: "SET_STATE", payload: state });
