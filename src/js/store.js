import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/";
import reducer from "./reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeCreateStore = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : fn => fn,
);
/* eslint-enable */

const store = createStore(
  reducer,
  composeCreateStore,
);

sagaMiddleware.run(rootSaga);

export default store;