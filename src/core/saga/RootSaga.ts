/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, fork } from 'redux-saga/effects';

import LoginSaga from './LoginSaga';


export default function* rootSaga() {
    yield all([
        fork(LoginSaga),
    ]);
}
