import { combineReducers } from "redux";
import { baseCurrencyReducer } from "./baseCurrencyReducer";
import { currencyRatesObjReducer } from "./currencyRatesObjReducer";
import { apiResponseReducer } from "./apiResponseReducer";
import { apiErrorReducer } from "./apiErrorReducer";
import { apiDataReducer } from "./apiDataReducer";


export const rootReducer = combineReducers({
    baseCurrencyReducer,
    currencyRatesObjReducer,
    apiResponseReducer,
    apiErrorReducer,
    apiDataReducer
});