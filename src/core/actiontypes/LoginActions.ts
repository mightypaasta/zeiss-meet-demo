import UserData from '../models/UserData';

/**
 * Copyright (c) 2020 Carl Zeiss Meditec AG All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
export const GET_LOGIN_REQUEST = 'loginActionType/GET_LOGIN_REQUEST';
export interface GetLoginRequest {
    type: typeof GET_LOGIN_REQUEST;
}


export const GET_LOGIN_ACTION = 'loginActionType/GET_LOGIN';
export interface GetLoginAction {
    type: typeof GET_LOGIN_ACTION;
    payload:  UserData;
}
export const GET_LOGIN_SUCCESS = 'loginActionType/GET_LOGIN_SUCCESS';
export interface GetLoginSuccessAction {
    type: typeof GET_LOGIN_SUCCESS;
    userData: UserData;
}

export const GET_LOGIN_FAILURE = 'loginActionType/GET_LOGIN_FAILURE';
export interface GetLoginFailureAction {
    type: typeof GET_LOGIN_FAILURE;
    message: string;
}

export const SEND_USER_INFO_API_CALL = 'loginActionType/SEND_USER_INFO_API_CALL';
export interface SendUserInfoRequest {
    type: typeof SEND_USER_INFO_API_CALL;
}


export type ACTIONS = GetLoginAction | GetLoginSuccessAction | GetLoginFailureAction | GetLoginRequest | SendUserInfoRequest;
