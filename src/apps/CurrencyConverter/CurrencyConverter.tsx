import React, { useEffect, useState, ChangeEvent } from "react";

import { getData } from "../../query";
import { qs, transformObjectIntoArray } from "../../utils";

import {
  FREE_CURRENCY_API_KEY,
  FREE_CURRENCY_URL
} from "../../constants";
import { ILatestFree } from "./types";

import { COUNTRU } from "../../data";
import { Select } from "../../components";

import "./CurrencyConverter.css";

export const CurrencyConverter = () => {
  const [convert, setConvert] = useState<{
    left: string;
    right: string;
  }>({
    left: "RUB",
    right: "USD",
  });
  const [amount, setAmount] = useState<string>("1000");
  const [currency, setCurrency] = useState<{ [key: string]: number }>();
  const [loading, setLoading] = useState<boolean>(false);

  const query = {
    apikey: FREE_CURRENCY_API_KEY,
    base_currency: convert.right,
  };

  useEffect(() => {
    const request: string = `${FREE_CURRENCY_URL}latest?${qs(query)}`;
    setLoading(true);

    (async () => {
      try {
        const response = await getData<ILatestFree>(request);

        setCurrency(response.data);
      } catch (error) {
        console.log("---error", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [convert]);

  const onAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value !== "" && +event.target.value > 0) {
      setAmount(event.target.value.startsWith("0") ? event.target.value.slice(1) : event.target.value);
    } else {
      setAmount("0");
    }
  };

  const onChangeCurrency = (event: ChangeEvent<HTMLSelectElement>): void => {
    setConvert({
      ...convert,
      [event.target.name]: event.target.value,
    });
  };

  const onToggle = (): void => {
    const left = convert.left;

    setConvert({
      left: convert.right,
      right: left,
    });
  };

  return (
    <div className="currency-converter">
      <div className="currency-converter__tool">
        <Select
          name="left"
          value={convert.left}
          listOptions={transformObjectIntoArray(COUNTRU)}
          onChange={onChangeCurrency}
        />
        <button onClick={onToggle}>Поменять местами</button>
        <Select
          name="right"
          value={convert.right}
          listOptions={transformObjectIntoArray(COUNTRU)}
          onChange={onChangeCurrency}
        />
      </div>
      <div style={{ position: "relative" }}>
        {!loading
          ? (<>
            <div className="currency-converter__result">
              {currency && (+amount / currency[convert.left])?.toFixed(2)}{" "}
              {convert.right}
            </div>
            <div className="currency-converter__rates">
              {currency && currency[convert.left]?.toFixed(2)} {convert.left} за 1{" "} {convert.right}
            </div>
          </>)
          : "Загрузка..."
        }
      </div>
      <div className="currency-converter__field">
        <input type="number" value={amount} onChange={onAmountChange} />
        {convert.left}
      </div>
    </div>
  );
};

