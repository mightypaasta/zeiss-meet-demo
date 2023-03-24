import UserData from "../models/UserData";

export const GET_REGISTER_REQUEST = "registerActionType/GET_REGISTER_REQUEST";

export interface GetRegisterRequest{
    type: typeof GET_REGISTER_REQUEST;
}

export const GET_REGISTER_ACTION = "loginActionType/GET_REGISTER";
export interface GetRegisterAction {
  type: typeof GET_REGISTER_ACTION;
  payload: UserData;
}
export const GET_REGISTER_SUCCESS = "loginActionType/GET_REGISTER_SUCCESS";
export interface GetRegisterSuccessAction {
  type: typeof GET_REGISTER_SUCCESS;
  userData: UserData;
}

export const GET_REGISTER_FAILURE = "loginActionType/GET_REGISTER_FAILURE";
export interface GetRegisterFailureAction {
  type: typeof GET_REGISTER_FAILURE;
  message: string;
}

export type ACTIONS = GetRegisterAction | GetRegisterRequest | GetRegisterFailureAction | GetRegisterSuccessAction;