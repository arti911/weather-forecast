import React from "react";
import WeatherSheetItem from "../WeatherSheetItem"
import NoForecast from "../NoForecast"

import { IWeatherForDay } from "../../interfaces";

import "./style.scss";

const WeatherSheet = (props: { list: IWeatherForDay[] }) => (
  props.list.length > 0 ?
    (
      <section className={"weather-sheet"}>
        <h2>Погода на сегодня</h2>
        {props.list.map((item) => <WeatherSheetItem data={item} key={item.dt} />)}
      </section>
    ) : <NoForecast />
  )

export default WeatherSheet;
