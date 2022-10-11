import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect, useState} from 'react';

function Exchangeui() {

    const codesDict = {
        'usd': '840',
        'eur': '978',
        'uah': '980'
    }

    const availableCurrencies = ['usd', 'eur', 'uah'];

    const [error, setError] = useState('');
    const [exchnageRes, setExchnageRes] = useState(0);
    const [currencyRes, setCurrencyRes] = useState('');

    const currencyRatesList = useSelector(state => {
        return state.currencyRatesObjReducer.ratesObj
    });

    const apiError = useSelector(state => {
        return state.apiErrorReducer.api_error
    }) 

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setError('');
            const data = e.target.value;
            const dataArr = data.split(" ");
            if (dataArr.length !== 4 ) {
                setError('You entered wrong string! We can\'t process it.');
            } else {
                let ammount = Number(dataArr[0]);
                let fromCurrency = availableCurrencies.includes(dataArr[1].toLowerCase());
                let toCurrency = availableCurrencies.includes(dataArr[3].toLowerCase());
                let isNotEqual = Object.is(dataArr[1].toLowerCase(), dataArr[3].toLowerCase());
                if ((ammount > 0) && fromCurrency && toCurrency && !isNotEqual) {
                    const f_variant = codesDict[dataArr[1].toLowerCase()] + codesDict[dataArr[3].toLowerCase()];
                    const s_variant = codesDict[dataArr[3].toLowerCase()] + codesDict[dataArr[1].toLowerCase()];
                    if (currencyRatesList[f_variant]) {
                        setExchnageRes(ammount * currencyRatesList[f_variant]);
                        setCurrencyRes(dataArr[3]);
                    } else {
                        setExchnageRes((ammount / currencyRatesList[s_variant]).toFixed(3));
                        setCurrencyRes(dataArr[3]);
                    }

                } else {
                    setError('Smth is wrong in your data!');
                }
            }
          } 
    }


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
                <div className="col-lg-8 offset-lg-2 col-12 c-block-big">
                    <div className="row text-center">
                        <h1>Enter data for convertion</h1>
                        <div className="col-lg-4 offset-lg-4 col-12">
                            <br />
                            <input type="text" className="form-control" onKeyDown={handleKeyDown}/>
                            <small className="text-muted">Example: 15 usd in uah</small>
                        </div>
                        { error.length > 0 ? 
                            <div className="col-lg-8 offset-lg-2 col-12">
                                <br />
                                <div className="alert alert-warning" role="alert">
                                    {error}
                                </div>
                            </div>
                        :
                        null
                        }
                    </div>
                </div>
    
                <div className="col-lg-8 offset-lg-2 col-12 c-block-big">
                    <div className="row text-center">
                        <h6>Result of convertion:</h6>
                        <h1>{exchnageRes} {currencyRes}</h1>
                    </div>
                </div>
    
    
                <div className="col-lg-8 offset-lg-2 col-12 c-block-big">
                    <div className="row text-center">
                        <div className="col">
                            <button className='btn btn-link'><NavLink to='/'>Back to Home page</NavLink></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Exchangeui;


