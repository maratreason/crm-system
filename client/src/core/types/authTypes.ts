export interface Token {
    token: string;
}

export interface AuthState {
    token: null | string;
    isLoading: boolean;
    error: null | string;
    toastText: null | string;
}

export enum AuthActionTypes {
    SET_ERROR = "SET_ERROR",
    SET_TOKEN = "SET_TOKEN",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    SET_IS_LOADING = "SET_IS_LOADING",
    SHOW_TOAST = "SHOW_TOAST",
}

export interface SetLoginAction {
    type: AuthActionTypes.LOGIN;
    payload: boolean;
}

export interface SetLogotAction {
    type: AuthActionTypes.LOGOUT;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionTypes.SET_ERROR;
    payload: string;
}

export interface SetTokenAction {
    type: AuthActionTypes.SET_TOKEN;
    payload: string;
}

export interface SetIsLoadingAction {
    type: AuthActionTypes.SET_IS_LOADING;
    payload: boolean;
}

export interface ShowToastAction {
    type: AuthActionTypes.SHOW_TOAST;
    payload: string;
}

export type AuthAction =
    | SetLoginAction
    | SetLogotAction
    | SetErrorAction
    | SetTokenAction
    | SetIsLoadingAction
    | ShowToastAction;
