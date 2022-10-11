import React from 'react';
import { useEffect, useState } from 'react';
import { setCurrencyRatesObj, setApi429, setApiIsData  } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
   
    const dispatch = useDispatch();

    const fillCurrencyObj = (apiResponse) => {
        let currencyRates = {};
        let getArr = Array.from(apiResponse);
        let arr = getArr.slice(0,3);
        arr.map((item, i) => {
            let currencyPairCode = item.currencyCodeA.toString() + item.currencyCodeB.toString();
                return (
                    currencyRates[currencyPairCode] = item.rateSell.toFixed(2)
                )
        });
        return currencyRates;
    }

    const currencyRatesList = useSelector(state => {
        return state.currencyRatesObjReducer.ratesObj
    })  

    const apiError = useSelector(state => {
        return state.apiErrorReducer.api_error
    })  

    const isData = useSelector(state => {
        return state.apiDataReducer.api_data
    })  


    useEffect(() => {
        if (isData === false) {
            fetch('https://api.monobank.ua/bank/currency', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.errorDescription) {
                    dispatch(setApi429(true)); 
                } else {
                    dispatch(setCurrencyRatesObj(fillCurrencyObj(resp))); 
                    dispatch(setApi429(false));
                    dispatch(setApiIsData(true));
                }
            })
            .catch(error => console.log(error))
        }
    }, [])


    if (apiError) {
        return(
            <>
                <div className="col-lg-8 offset-lg-2 col-12">
                        <div className="row text-center header-rates">
                            <div className="col">USD/UAH no data</div>
                            <div className="col">EUR/UAH no data</div>
                            <div className="col">EUR/USD no data</div>
                        </div>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="col-lg-8 offset-lg-2 col-12">
                    <div className="row text-center header-rates">
                        <div className="col">USD/UAH {currencyRatesList['840980']}</div>
                        <div className="col">EUR/UAH {currencyRatesList['978980']}</div>
                        <div className="col">EUR/USD {currencyRatesList['978840']}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;