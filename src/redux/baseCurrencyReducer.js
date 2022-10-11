import { BASE_CURRENCY } from "./types"

const initialState = {
    currency_title: 'UAH',
}

export const baseCurrencyReducer = (state = initialState, action) => {
    switch(action.type){
        case BASE_CURRENCY:
            return {
                ...state,
                currency_title: action.data
            }

        default:
            return state;
    }
}