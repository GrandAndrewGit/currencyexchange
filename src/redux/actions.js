import { BASE_CURRENCY, CURRENCY_RATES_OBJ, API_RESPONSE, API_429, API_DATA } from "./types";

export function saveBaseCurrency(currency_title) {
    return {
        type: BASE_CURRENCY,
        data: currency_title
    }
}

export function setCurrencyRatesObj(allRates) {
    return {
        type: CURRENCY_RATES_OBJ,
        data: allRates
    }
}

export function setApiResponse(apiResponse) {
    return {
        type: API_RESPONSE,
        data: apiResponse
    }
}

export function setApi429(apiError) {
    return {
        type: API_429,
        data: apiError
    }
}

export function setApiIsData(apiData) {
    return {
        type: API_DATA,
        data: apiData
    }
}

