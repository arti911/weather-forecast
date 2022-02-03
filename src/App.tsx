import React, { useState, useEffect } from "react";
import moment from "moment";
import { get } from "lodash"

import Spin from "./components/Spin"
import WeatherSheet from "./components/WeatherSheet"
import CurrencyConverter from "./app/CurrencyConverter";

import { IWeatherForDay, IWeatherSheetProps } from "./interfaces"
import { getData } from "./query";
import { WEATHER_API_KEY, WEATHER_URL } from "./constants";
import { getTodayWeather, qs } from "./utils";

const App = () => {
  const [city, setCity] = useState<string>("");
  const [time, setTime] = useState<string>(moment().format("HH:mm"));
  const [weatherForDay, setWeatherForDay] = useState<IWeatherForDay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [ params, setParams] = useState({
    q: "Kazan",
    lang: "ru",
    units: "metric",
    appid: WEATHER_API_KEY,
  });

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("HH:mm"))
    }, 1000)
  }, [time])

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const response = await getData<IWeatherSheetProps>(`${WEATHER_URL}?${qs(params)}`);

        setCity(get(response.city, "name", ""))
        setWeatherForDay(getTodayWeather(response.list));
      } catch (e) {
        console.log("---e", e);
      } finally {
        setLoading(false)
      }
    })();
  }, [ params ]);

  return (
    <div className="app">
      <header className="app__header">
        <span><b>{city}</b></span>
        &nbsp;
        <span style={{ fontSize: "12px" }}>{time}</span>
      </header>

      <aside className="app__aside">
        <CurrencyConverter />
      </aside>

      <main className="app__main">
        {loading
          ? <Spin />
          : <WeatherSheet list={weatherForDay} />
        }
      </main>
    </div>
  );
};

export default App;
