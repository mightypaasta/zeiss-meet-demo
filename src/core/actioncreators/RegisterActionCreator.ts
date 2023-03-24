import * as actions from '../actiontypes/RegisterAction';
import UserData from '../models/UserData';

export function getRegisterRequest(): actions.GetRegisterRequest{
    return{
        type:actions.GET_REGISTER_REQUEST
    }
}

export function getRegister(data:UserData): actions.GetRegisterAction{
    return{
        type: actions.GET_REGISTER_ACTION,
        payload: data
    }
}

export function getRegisterSuccess(data: any): actions.GetRegisterSuccessAction{
    return{
        type:actions.GET_REGISTER_SUCCESS,
        userData:data
    }
}

export function getRegisterFailure(msg: string): actions.GetRegisterFailureAction{
    return{
        type:actions.GET_REGISTER_FAILURE,
        message:msg
    }
}
