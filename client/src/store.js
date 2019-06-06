import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer = compose(applyMiddleware(...middlewares));

export default createStore(reducer, enhancer);
sagaMiddleware.run(rootSaga);
