import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MySelect from "./components/MySelect";
import MyInput from "./components/MyInput";
import Swap from "./components/Swap";

function App() {
  const [currencies, setCurrencies] = useState([]); // Все валюты и рейты
  const [fromCurrency, setFromCurrency] = useState(1); // Значение рейта валюты из
  const [toCurrency, setToCurrency] = useState(1); // Значение рейта валюты в
  const [inputValueLeft, setInputValueLeft] = useState(1); // Значение 1 инпута
  const [inputValueRight, setInputValueRight] = useState(1); // Значение 2 инпута
//
  //api 729043b6da5f40bf62ababf73b2b061e
  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=729043b6da5f40bf62ababf73b2b061e&format=1"
      )
      .then(({ data }) => {
        setCurrencies(data.rates);
      });
  }, []);

  const converter = (num) => {
    setInputValueLeft(num);
    setInputValueRight(((num * toCurrency) / fromCurrency).toFixed(2));
  };

  const swapCurrency = () => {
    let swap = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(swap);
    swap = inputValueLeft;
    setInputValueLeft(inputValueRight);
    setInputValueRight(swap);
  };

  return (
    <div className="App">
      <h1>Конвертер валют</h1>
      <div className="select-block">
        <span>Вы переводите из</span>
        <MySelect a={currencies} currency={setFromCurrency} value={fromCurrency} />
        <span>в</span>
        <MySelect a={currencies} currency={setToCurrency} value={toCurrency} />
      </div>
      <div className="input-block">
        <MyInput converter={converter} value={inputValueLeft} />
        <span></span>
        <MyInput converter={converter} value={inputValueRight} />
      </div>
      <div>
        <Swap swapCurrency={swapCurrency} />
      </div>
    </div>
  );
}

export default App;
