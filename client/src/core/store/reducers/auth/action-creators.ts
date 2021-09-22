import {Dispatch} from "redux";
import {message} from "antd";
import $api from "../../../services/http";
import {
    AuthActionTypes,
    SetTokenAction,
    SetIsLoadingAction,
    SetErrorAction,
    Token,
} from "../../../types/authTypes";

export const AuthActionCreators = {
    setToken: (token: string): SetTokenAction => ({
        type: AuthActionTypes.SET_TOKEN,
        payload: token,
    }),

    setIsLoading: (loading: boolean): SetIsLoadingAction => ({
        type: AuthActionTypes.SET_IS_LOADING,
        payload: loading,
    }),

    setError: (error: string): SetErrorAction => ({
        type: AuthActionTypes.SET_ERROR,
        payload: error,
    }),

    showToast: (text: string) => ({
        type: AuthActionTypes.SHOW_TOAST,
        payload: text,
    }),

    register: (email: string, password: string) => async (dispatch: Dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            await $api.post<Token>("/auth/register/", {email, password});
            message.success("Вы успешно зарегистрировались!");
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (err: any) {
            catchError(dispatch, err);
        }
    },

    login: (email: string, password: string) => async (dispatch: Dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const {data} = await $api.post<Token>("/auth/login/", {email, password});
            dispatch(AuthActionCreators.setToken(data.token));
            message.success(`Добро пожаловать ${email}!`);
            localStorage.setItem("auth-token", data.token);
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (err: any) {
            console.log(err);
            catchError(dispatch, err);
        }
    },

    logout: () => async (dispatch: Dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            dispatch(AuthActionCreators.setToken(""));
            message.success(`До встречи!`);
            localStorage.clear();
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (err: any) {
            catchError(dispatch, err);
        }
    },
};

function catchError(dispatch: Dispatch, err: any) {
    dispatch(AuthActionCreators.setError(err));
    message.error(err?.response?.data?.message);
    dispatch(AuthActionCreators.setIsLoading(false));
}
