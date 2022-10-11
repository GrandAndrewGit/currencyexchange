import { API_429 } from "./types"

const initialState = {
    api_error: false,
}

export const apiErrorReducer = (state = initialState, action) => {
    switch(action.type){
        case API_429:
            return {
                ...state,
                api_error: action.data
            }

        default:
            return state;
    }
}