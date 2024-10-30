import React from "react";

import { WeatherSheet } from "./components";
import { CurrencyConverter } from "./apps";
import { useGetWeather } from "./hooks";

const App = () => {
  const { city, time, loading, weatherForDay } = useGetWeather();

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
        <WeatherSheet isLoading={loading} list={weatherForDay} />
      </main>
    </div>
  );
};

export default App;
