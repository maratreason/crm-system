import {Dispatch} from "redux";
import axios from "axios";
import {AuthActionTypes, AuthAction} from "../types/authTypes";
import {IUser} from "../models/IUser";

export const AuthService = {
    // login: (token: string) => {
    //     return async (dispatch: Dispatch<AuthAction>) => {
    //         try {
    //             dispatch({type: AuthActionTypes.LOGIN, payload: true});
    //             axios.post<IUser>("/api/auth/login", token)
    //             dispatch({type: AuthActionTypes.SET_TOKEN, payload: user});
    //         } catch(err) {
    //             dispatch({type: AuthActionTypes.SET_ERROR, payload: "Произошла ошибка при авторизации"});
    //         }
    //     }
    // },
    // register: () => {
    // }
};
