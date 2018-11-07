import {
    FETCH_USER_PROFILE_BEGIN,
    FETCH_USER_PROFILE_SUCESS,
    FETCH_USER_PROFILE_FAILURE
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

const initialState = {
    loadingdata:false,
    sucessdata:loadingProfile,
    errordata:null
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
        default :
            return state;        
    }
}