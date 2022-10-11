import { API_DATA } from "./types"

const initialState = {
    api_data: false,
}

export const apiDataReducer = (state = initialState, action) => {
    switch(action.type){
        case API_DATA:
            return {
                ...state,
                api_data: action.data
            }

        default:
            return state;
    }
}