/**
 * Copyright (c) 2020 Carl Zeiss Meditec AG All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
import { combineReducers } from 'redux';
import loginReducer, { UserInfoState } from './LoginReducer';
import registerReducer from './RegisterReducer';

export interface IRootState{
    login:UserInfoState
}

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
