import React from "react";
import WeatherSheetItem from "../WeatherSheetItem"
import NoForecast from "../NoForecast"
import { get } from "lodash"

import "./WeatherSheet.css";

const WeatherSheet = props => {
  const weatherForDay = get(props, "weatherForDay", [])

  return (
    weatherForDay.length ?
      (
        <section className={"weather-sheet"}>
          <h2>Погода на сегодня</h2>
          {weatherForDay.map((item) => <WeatherSheetItem data={item} key={item.dt} />)}
        </section>
      ) : <NoForecast />
  )
}

export default WeatherSheet;
