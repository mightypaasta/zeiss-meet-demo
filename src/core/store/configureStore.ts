/* eslint-disable */
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/RootReducer";
import rootSaga from "../saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const configureStore = () => {
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
