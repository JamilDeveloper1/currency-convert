import { useContext, useState } from 'react'
import { CurrencyContext } from './context/CurrencyProvider.jsx'
import { FaExchangeAlt } from "react-icons/fa";
import { CgArrowsExchangeV } from "react-icons/cg";



function App() {
  const {
    setCheck,
    check,
    currency,
    setCurrency,
    result,
    firstVal,
    setResult,
    setFirstVal,
    toCurrency,
    setToCurrency} = useContext(CurrencyContext); 
  

  console.log(currency);


  const swapCurrencyValues = () => {
    setCurrency(toCurrency);
    setToCurrency(currency);
    setCheck(prev => !prev); 

  };


  return (
    <div className='p-1 flex items-center justify-center h-screen bg-[#E7E7E7] flex-col gap-5'>
      <h1 className='text-2xl text-[#26278D] font-bold'>Currency Converter </h1>
      <p className='text-[#808080] text-center  w-4/5 md:w-1/2 '>
      Check live rates, set rate alerts, receive notifications and more.
      </p>
      <div className={` ${check ? 'md:flex-row-reverse' : 'md:flex-row'} ${check ? 'flex-col-reverse' : 'flex-col'} md:flex-row flex items-center justify-center gap-10 md:gap-5 bg-white p-5 rounded shadow shadow-gray-400 max-[321px]:w-11/12 w-4/5 md:w-2/3`}>
        <div className={` flex items-center md:justify-center gap-8 md:gap-3 `}>
        <select className='bg-transparent' onChange={(e) => setCurrency(e.target.value)}>
        <option value="EUR">EUR</option>
  <option value="USD">USD</option>
  <option value="TRY">TRY</option>
  <option value="AUD">AUD</option>
  <option value="BGN">BGN</option>
  <option value="BRL">BRL</option>
  <option value="CAD">CAD</option>
  <option value="CHF">CHF</option>
  <option value="CNY">CNY</option>
  <option value="CZK">CZK</option>
  <option value="GBP">GBP</option>
  <option value="PLN">PLN</option>
  <option value="RUB">RUB</option>
      </select>


        <input  className='p-1 bg-[#efefef] outline-none w-[150px] text-[#3c3c3c] md:w-4/5' readOnly={check} type="number" min={0} value={firstVal} onChange={(e) => setFirstVal(e.target.value)} />
     
        </div>
        <FaExchangeAlt onClick={swapCurrencyValues} className='border hidden md:block hover:bg-[#26278D] hover:text-white border-slate-700 w-[30px] h-[30px] p-1 rounded-full cursor-pointer' />
        <div className='flex w-full items-center justify-center relative border-slate-300 md:hidden'>
        <CgArrowsExchangeV onClick={swapCurrencyValues} className='border z-50 bg-[#26278D] text-white  border-slate-700 w-[40px] h-[40px]  rounded-full cursor-pointer'/>
       <span className='w-full h-[1px] absolute bg-[#E7E7E7] z-10' ></span>
        </div>

        <div className='flex items-center md:justify-center  gap-8 md:gap-3 '>
        <select className='bg-transparent' onChange={(e) => setToCurrency(e.target.value)} >
        <option value="USD">USD</option>
  <option value="TRY">TRY</option>
  <option value="EUR">EUR</option>
  <option value="AUD">AUD</option>
  <option value="BGN">BGN</option>
  <option value="BRL">BRL</option>
  <option value="CAD">CAD</option>
  <option value="CHF">CHF</option>
  <option value="CNY">CNY</option>
  <option value="CZK">CZK</option>
  <option value="GBP">GBP</option>
  <option value="PLN">PLN</option>
  <option value="RUB">RUB</option>

      </select>
      <input  min={0} className='p-1 bg-[#efefef] outline-none w-[150px] text-[#3c3c3c] md:w-4/5' value={result} readOnly={!check} onChange={(e) => setResult(e.target.value)} type="number" />

        </div>
      </div>     
    </div>
  )
}

export default App