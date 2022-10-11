import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveBaseCurrency  } from '../redux/actions';

function Ratios() {

    let currencyArray = ['UAH', 'USD', 'EUR'];

    const dispatch = useDispatch();

    const baseCurrency = useSelector(state => {
        return state.baseCurrencyReducer.currency_title
    })  

    const currencyRatesList = useSelector(state => {
        return state.currencyRatesObjReducer.ratesObj
    })  

    const setBaseCurrency = (e) => {
        dispatch(saveBaseCurrency(e.target.value));
        
    }

    const apiError = useSelector(state => {
        return state.apiErrorReducer.api_error
    }) 

    if (apiError) {
        return (
            <>
                <br />
                <div className="col-lg-8 offset-lg-2 col-12 c-block">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1>Too many request. Try later</h1>
                            <br />
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <br />
                <div className="col-lg-8 offset-lg-2 col-12 c-block">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1>Base Currency:</h1>
                            <br />
                        </div>
                        <div className="col-lg-4 offset-lg-4 col-12">
                            <select className="form-select" defaultValue={baseCurrency} onChange={setBaseCurrency}>
                                <option value={baseCurrency}>{baseCurrency}</option>
                                {currencyArray && currencyArray.map((currency, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                        { currency !== baseCurrency ?
                                            <option value={currency}>{currency}</option>
                                        :
                                        null
                                        }
                                        </React.Fragment> 
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                
                <br />
    
    
    
                <div className="col-lg-8 offset-lg-2 col-12 c-block-big">
                    <div className="row text-center">
                        <div className="col">
                            { baseCurrency === "UAH" ?
                            <div>
                            <h1>1 USD = {1 * currencyRatesList['840980']} {baseCurrency}</h1>
                            <br />
                            <h1>1 EUR = {1 * currencyRatesList['978980']} {baseCurrency}</h1>
                            </div>
                            :
                            null
                            }
    
                            { baseCurrency === "USD" ?
                            <div>
                            <h1>1 UAH = {(1 / currencyRatesList['840980']).toFixed(3)} {baseCurrency}</h1>
                            <br />
                            <h1>1 EUR = {(1 * currencyRatesList['978840']).toFixed(3)} {baseCurrency}</h1>
                            </div>
                            :
                            null
                            }
    
                            { baseCurrency === "EUR" ?
                            <div>
                            <h1>1 UAH = {(1 / currencyRatesList['978980']).toFixed(3)} {baseCurrency}</h1>
                            <br />
                            <h1>1 USD = {(1 / currencyRatesList['978840']).toFixed(3)} {baseCurrency}</h1>
                            </div>
                            :
                            null
                            }
                            
                        </div>
                    </div>
                </div>
    
    
                <div className="col-lg-8 offset-lg-2 col-12 c-block-big">
                    <div className="row text-center">
                        <div className="col">
                            <button className='btn btn-link'><NavLink to='/converter/'>Go to converter</NavLink></button>
                        </div>
                    </div>
                </div>
    
    
            </>
        )
    }
}

export default Ratios;
