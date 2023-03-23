/* eslint-disable */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * Copyright (c) 2020 Carl Zeiss Meditec AG All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
import { all, fork, put, takeEvery } from "redux-saga/effects";
import * as actionCreators from "../actioncreators/LoginActionCreator";
import * as actionTypes from "../actiontypes/LoginActions";
import UserData from "../models/UserData";
import { getUserDetails } from "../services/get/GetUserDetails";
/* istanbul ignore next */
function* onLogin(action: any) {
//   let navigator = useNavigate();
  try {
    console.log("log onLogin", action);
 
    const loginData: Response = yield getUserDetails(action.payload);
    const apiStatus: number = loginData.status;
    console.log("login payload", action.payload);
    switch (apiStatus) {
      case 200:
        console.log("response ", loginData);
        yield put(actionCreators.getLoginSuccess(action.payload))
        // yield put(actionCreators.getLoginSuccess(userInfo));
        break;
      case 401:
        console.log("Invalid login");
        break;
      case 500:
      case 403:
        yield put(actionCreators.getLoginFailure("LoginFailedMessage1"));
        break;
      default:
        break;
    }
  } catch (error) {
    console.log("error Api ", error);

    yield put(actionCreators.getLoginFailure("error"));
  }
}

function* watchOnLogin() {
  console.log("login saga action triggered");
  yield takeEvery(actionTypes.GET_LOGIN_ACTION, onLogin);
}

export default function* loginSaga() {
  yield all([fork(watchOnLogin)]);
}
