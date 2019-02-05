import {
    FETCH_USER_PROFILE_BEGIN,
    FETCH_USER_PROFILE_SUCESS,
    FETCH_USER_PROFILE_FAILURE,
    FETCH_LANGUAGE_BEGIN,
    FETCH_LANGUAGE_SUCESS,
    FETCH_LANGUAGE_FAILURE
} from './constant';

export const fetchUserProfileBegin = (loadingdata) => ({
    type:FETCH_USER_PROFILE_BEGIN,
    payload:loadingdata
});

export const fetchUserProfileSucess = (sucessdata) => ({
    type:FETCH_USER_PROFILE_SUCESS,
    payload:sucessdata
});

export const fetchUserProfileFailure = (errordata) => ({
    type:FETCH_USER_PROFILE_FAILURE,
    payload:errordata
});

export const fetchLangBegin = (loadinglangdata) => ({
    type:FETCH_LANGUAGE_BEGIN,
    payload:loadinglangdata
});

export const fetchLangSucess = (sucesslangdata) => ({
    type:FETCH_LANGUAGE_SUCESS,
    payload:sucesslangdata
});

export const fetchLangFailure = (errorlangdata) => ({
    type:FETCH_LANGUAGE_FAILURE,
    payload:errorlangdata
});