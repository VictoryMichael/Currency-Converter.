import React, { useState } from 'react'
import ExchangeRate from './ExchangeRate'
import axios from "axios"








const CurrencyConverter = () => {
const currencies = [ "BTC", "ETH", "USDT", "USDC", "XRP", "ADA", "SOL", "DOGE",  "BUSD", "NGN", "EUR", "USD", "JPY", "CAD" ];

const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC")
const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("ETH")
const [amount, setAmount] = useState(1)
const [exchangeRate, setExchangeRate] = useState(0)
const [result, setResult] = useState(0)
const [PrimaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC')
const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('ETH')

const  convert = () => {

  
const options = {
   method: 'GET',
   url: 'https://alpha-vantage.p.rapidapi.com/query',
   params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
   headers: {
     'X-RapidAPI-Key': '652722c4d9msh77bd349813b7fa7p148518jsn7736b8f1493b',
     'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
   }
 };
 
 axios.request(options).then((response) => {
    console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]) 
     setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
   setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]* amount)
   setPrimaryCurrencyExchanged(chosenPrimaryCurrency)
   setSecondaryCurrencyExchanged(chosenSecondaryCurrency)
 }).catch((error) => {
    console.error(error)
 })


}



  return (
    <div className='currencyC'>  
       <h2>Currency Converter</h2>

     <div className='input-box'>   

     <table>
        <tbody>
           <tr>
              <td>Primary Currency:</td>
               <td>
                  <input 
                  type="number"
                   name='currency-amount-1'
                   value={amount}
                   onChange={(e)=> setAmount (e.target.value)}
                  />
               </td>
                <td>
                    <select 
                    className='currency-options'
                    name='curency-option-1'
                    value={chosenPrimaryCurrency}
                    onChange={(e) => setChosenPrimaryCurrency(e.target.value) }
                    >
                        {currencies.map((currency, index) => (<option key={index} > {currency} </option> ) )}   
                    </select>
                      
                </td>
           </tr>


           <tr>
              <td>Secondary Currency:</td>
               <td>
                  <input 
                  type="number"
                   name='currency-amount-2'
                   value={result}
                   disabled={true}
                  />
               </td>
                <td>
                    <select
                     className='secondary-options'
                    name='curency-option-2'
                    value={chosenSecondaryCurrency}
                    onChange={(e) => setChosenSecondaryCurrency(e.target.value) }
                    >
                      {currencies.map((currency, index) => (<option key={index} > {currency} </option> ) )}   
                    </select>
                      
                </td>
           </tr>

        </tbody>
     </table>
               <button className='convert-btn' onClick={convert}>Convert</button>
     </div>


    <ExchangeRate
     exchangeRate={exchangeRate}
     chosenPrimaryCurrency={PrimaryCurrencyExchanged} 
     chosenSecondaryCurrency={secondaryCurrencyExchanged}
     />
        
    </div>
  )
}

export default CurrencyConverter