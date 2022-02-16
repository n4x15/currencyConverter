import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RateSelect from "./components/RateSelect";
import ValueInput from "./components/ValueInput";
import Swap from "./components/Swap";

function App() {
  const [currencies, setCurrencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState(1);
  const [toCurrency, setToCurrency] = useState(1);
  const [valueFrom, setValueFrom] = useState(1);
  const [valueTo, setValueTo] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_KEY}&format=1`
      )
      .then(({ data }) => {
        setCurrencies(data.rates);
      })
      .catch(error => {});
  }, []);

  const converter = (num, fromThere) => {
    if (fromThere===true){
      setValueFrom(num);
      setValueTo(((num * toCurrency) / fromCurrency).toFixed(2));
    }else{
      setValueTo(num);
      setValueFrom(((num * fromCurrency) / toCurrency).toFixed(2));
    }
  };

  const swapCurrency = () => {
    let swap = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(swap);
    swap = valueFrom;
    setValueFrom(valueTo);
    setValueTo(swap);
  };

  return (
    <div className="App">
      <h1>Конвертер валют</h1>
      <div className="select-block">
        <span>Вы переводите из</span>
        <RateSelect currencies={currencies} currency={setFromCurrency} value={fromCurrency} />
        <span>в</span>
        <RateSelect currencies={currencies} currency={setToCurrency} value={toCurrency} />
      </div>
      <div className="input-block">
        <ValueInput converter={converter} value={valueFrom} fromThere={true} />
        <span></span>
        <ValueInput converter={converter} value={valueTo} fromThere={false} />
      </div>
      <div>
        <Swap swapCurrency={swapCurrency} />
      </div>
    </div>
  );
}

export default App;