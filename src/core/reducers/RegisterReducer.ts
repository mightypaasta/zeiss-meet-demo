import { env } from "../../config/AppConfig";
import * as actions from "../actiontypes/RegisterAction";
import UserData from "../models/UserData";

export interface RegistrationInfo {
  isRegisterSuccess?: boolean;
}

const initialState: RegistrationInfo = {
  isRegisterSuccess: false,
};

export default function registerReducer(
  state: RegistrationInfo = initialState,
  action: actions.ACTIONS
) {
  console.log(`register reducer ${action.type}`);

  switch (action.type) {
    case actions.GET_REGISTER_SUCCESS:
      console.log("Successfull registration reducer", state);
      return {
        ...state,
        isRegisterSuccess: true,
      };
    case actions.GET_REGISTER_ACTION:
        console.log("Registraion action reducer", state);
        return {
          ...state,
          isRegisterSuccess: true,
        };
    case actions.GET_REGISTER_FAILURE:
      break;
    case actions.GET_REGISTER_REQUEST:
      break;
    default:
        return state;
  }
}
