/**
 * Copyright (c) 2020 Carl Zeiss Meditec AG All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
import * as actions from '../actiontypes/LoginActions';
import UserData from '../models/UserData';

/**
 * This action will check the login request
 */
export function getLoginRequest(): actions.GetLoginRequest {
    return {
        type: actions.GET_LOGIN_REQUEST,
    };
}


/**
 * This api will perform the login
 */
export function sendUserInfoRequest(): actions.SendUserInfoRequest {
    return {
        type: actions.SEND_USER_INFO_API_CALL,
    };
}


/**
 * This api will perform the login
 */
export function getLogin(data:UserData): actions.GetLoginAction {
    return {
        type: actions.GET_LOGIN_ACTION,
        payload: data
    };
}

/**
 * This api will perform the login success response
 * @param message login api response message
 */
export function getLoginSuccess(data: any): actions.GetLoginSuccessAction {
    return {
        type: actions.GET_LOGIN_SUCCESS,
        userData: data,
    };
}

/**
 * This api will perform login failure
 * @param error error message
 */
export function getLoginFailure(msg: string): actions.GetLoginFailureAction {
    return {
        type: actions.GET_LOGIN_FAILURE,
        message: msg,
    };
}
