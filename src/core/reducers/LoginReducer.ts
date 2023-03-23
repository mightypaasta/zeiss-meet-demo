/**
 * Copyright (c) 2020 Carl Zeiss Meditec AG All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
import { env } from '../../config/AppConfig';
import * as actions from '../actiontypes/LoginActions';
import UserData from '../models/UserData';

export interface UserInfoState {
    userData: UserData;
    errorMessage?: string;
    isLoginSuccess?: boolean;
    isLoginFailed?: boolean;
    isMenuDataFetched?: boolean;
}

/**
 * Initial state
 * @todo  need to save the isLoginsuccess in local storage to handle the subsequent app launches
 */
const initialState: UserInfoState = {
    userData: {
        email: '',
        password: ''
    },
    isLoginSuccess:false
};

export default function userInfoReducer(state: UserInfoState = initialState, action: actions.ACTIONS): UserInfoState {
    console.log(`reducer ${action.type}`);

    switch (action.type) {
        case actions.GET_LOGIN_SUCCESS:
            console.log("successfull login reducer",state);
            return {
                ...state,
                isLoginSuccess: true,
                isLoginFailed: false,
                userData: action.userData,
            };
        case actions.GET_LOGIN_FAILURE:
            // console.log("action login failue is working correctly")
            return {
                ...state,
                isLoginFailed: true,
                isLoginSuccess: false,
                errorMessage: action.message,
            };

        case actions.GET_LOGIN_REQUEST:
        case actions.GET_LOGIN_ACTION:
            // redirectToLogin();
            return state;
        default:
            return state;
    }
}


const redirectToLogin = () => {
    const { loginEndpoint } = env;
    window.location.href = loginEndpoint;
};
