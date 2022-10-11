import { API_RESPONSE } from "./types"

const initialState = {
    api_response: {},
}

export const apiResponseReducer = (state = initialState, action) => {
    switch(action.type){
        case API_RESPONSE:
            return {
                ...state,
                api_response: action.data
            }

        default:
            return state;
    }
}