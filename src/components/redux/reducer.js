import {
    FETCH_USER_PROFILE_BEGIN,
    FETCH_USER_PROFILE_SUCESS,
    FETCH_USER_PROFILE_FAILURE,
    FETCH_LANGUAGE_BEGIN,
    FETCH_LANGUAGE_SUCESS,
    FETCH_LANGUAGE_FAILURE
} from './constant';

const loadingProfile = {
    "header":[
        {"name":"Loading...","status":true,"icon":"icon-loading"},
    ],
    "body_conatiner":{
        "profile_details":{
            "name":"Loading...",
            "pic":"asset/images/avtar.png",
            "profile_title":"XXXXX-XXXXX",
            "email":"xxxxxxxxxx@xxxxxxxxxx.xxx",
            "profile_tagline":[
                {"tagline":"Loading..."}
            ]
        }
    },
    "footer":{
        "social":[],
        "community":[],
        "email":[],
        "blog":[],
        "professional":[]
    }
};

const loadingLang = {"loadingMsg":"xx..."};

const initialState = {
    loadingdata:false,
    sucessdata:loadingProfile,
    errordata:null,
    loadinglangdata:false,
    sucesslangdata:loadingLang,
    errorlangdata:null

};

export const rootReducer = (state = initialState,action) =>{
    
    switch(action.type){
        case FETCH_USER_PROFILE_BEGIN :
            return {
                ...state,
                loadingdata:true,
                errordata:null
            };
        case FETCH_USER_PROFILE_SUCESS :
            return{
                ...state,
                loadingdata:false,
                sucessdata:action.payload
            }
        case FETCH_USER_PROFILE_FAILURE :
            return{
                ...state,
                loadingdata:false,
                errordata:action.payload,
                sucessdata:loadingProfile
            }
        case FETCH_LANGUAGE_BEGIN :
            return {
                ...state,
                loadinglangdata:true,
                errorlangdata:null
            };
        case FETCH_LANGUAGE_SUCESS :
            return{
                ...state,
                loadinglangdata:false,
                sucesslangdata:action.payload
            }
        case FETCH_LANGUAGE_FAILURE :
            return{
                ...state,
                loadinglangdata:false,
                errorlangdata:action.payload,
                sucesslangdata:loadingLang
            }
        default :
            return state;        
    }
}