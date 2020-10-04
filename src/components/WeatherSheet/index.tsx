import React from "react";
import WeatherSheetItem from "../WeatherSheetItem"
import NoForecast from "../NoForecast"
import { get } from "lodash"

import { IWeatherSheetProps } from "../../interfaces"
import "./WeatherSheet.css";


const WeatherSheet: React.FC<IWeatherSheetProps> = props => {
  const weatherForDay: any[] = get(props, "weatherForDay", [])

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
