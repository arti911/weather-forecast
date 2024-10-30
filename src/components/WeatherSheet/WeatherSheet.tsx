import React from "react";
import { WeatherSheetItem } from "../WeatherSheetItem"
import { NoForecast } from "../NoForecast"
import { Spin } from "../Spin";

import type { WeatherForDayDTO } from "../../interfaces";

import "./WeatherSheet.css";

interface WeatherSheetProps {
  list: WeatherForDayDTO[];
  isLoading: boolean;
}

export const WeatherSheet = ({ list, isLoading }: WeatherSheetProps) => {

  if (isLoading) return <Spin />

  return (
    list.length > 0 ?
      (
        <section className={"weather-sheet"}>
          <h2>Погода на сегодня</h2>
          {list.map((item) => <WeatherSheetItem data={item} key={item.dt} />)}
        </section>
      ) : <NoForecast />
  )
}

