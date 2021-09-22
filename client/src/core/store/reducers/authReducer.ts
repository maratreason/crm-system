import {AuthAction, AuthActionTypes, AuthState} from "../../types/authTypes";

const initialState: AuthState = {
    token: localStorage.getItem("auth-token") || "",
    isLoading: false,
    error: "",
    toastText: null
};

export const authReducer = (
    state = initialState,
    action: AuthAction,
): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_ERROR:
            return {...state, error: action.payload, isLoading: false};
        case AuthActionTypes.SET_TOKEN:
            return {...state, token: action.payload, isLoading: false};
        case AuthActionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        case AuthActionTypes.SHOW_TOAST:
            return {...state, toastText: action.payload};
        default:
            return state;
    }
};
