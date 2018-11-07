import {
    FETCH_USER_PROFILE_BEGIN,
    FETCH_USER_PROFILE_SUCESS,
    FETCH_USER_PROFILE_FAILURE
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