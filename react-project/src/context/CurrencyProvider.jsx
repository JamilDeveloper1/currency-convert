import { createContext, useEffect, useState } from "react";

export const CurrencyContext = createContext(); 


export const CurrencyProviderFunc = ({children}) => {

    
    const [currency,setCurrency] = useState('EUR'); 
    const [toCurrency,setToCurrency] = useState('USD'); 
    const [result,setResult] = useState(0); 
    const [firstVal,setFirstVal] = useState(1);
    const API_KEY = 'Add Your API KeY';
    const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest?'; 

    const [check,setCheck] = useState(false); 

    useEffect(() => {
        const getCurrencyFunc = async() => {
            const response = await fetch(`${BASE_URL}apikey=${API_KEY}&base_currency=${currency}`,{
                method : 'GET'
            });
            const data = await response.json();
           if(!check){
            setResult((data.data[toCurrency] * firstVal).toFixed(3)); 
           }else{
            setFirstVal((data.data[toCurrency] * result).toFixed(3))
           }
        }
        getCurrencyFunc();
    },[firstVal,result,currency,toCurrency])

    return(
        <CurrencyContext.Provider value={{
            check,
            setCheck,
            setCurrency,
            currency,
            toCurrency,
            setToCurrency,
            result,
            firstVal,
            setResult,
            setFirstVal}} >
            {children}
        </CurrencyContext.Provider>
    )
}