import { all, fork, put, take, takeEvery } from "redux-saga/effects";
import * as actionCreators from "../actioncreators/RegisterActionCreator";
import * as actionTypes from "../actiontypes/RegisterAction";
import UserData from "../models/UserData";
import { registerUserDetails } from "../services/post/RegisterUser";

function* onRegister(action: any) {
  try {
    console.log("inside onRegister", action);
    console.log("inside onRegister action payload is ",action.payload);
    const registerData: Response = yield registerUserDetails(action.payload);
    const apiStatus: number = registerData.status;

    switch (apiStatus) {
      case 200:
        console.log("inside saga 200 response", registerData);
        yield put(actionCreators.getRegisterSuccess(action.payload));
        break;
      default:
        console.log("oops register api not working");
        break;
    }
  } catch (error) {
    console.log("error api", error);
    yield put(actionCreators.getRegisterFailure("error"));
  }
}

function* watchOnRegister() {
  console.log("register saga triggered");
  yield takeEvery(actionTypes.GET_REGISTER_ACTION, onRegister);
}

export default function* registerSaga() {
  yield all([fork(watchOnRegister)]);
}
