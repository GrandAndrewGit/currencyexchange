import { CURRENCY_RATES_OBJ } from "./types"

const initialState = {
    ratesObj: {},
}

export const currencyRatesObjReducer = (state = initialState, action) => {
    switch(action.type){
        case CURRENCY_RATES_OBJ:
            return {
                ...state,
                ratesObj: action.data
            }

        default:
            return state;
    }
}