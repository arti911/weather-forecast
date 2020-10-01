import React from "react"
import moment from "moment"
import { get } from "lodash"

import Wind from "../../assets/icons/wind"
import Cloud from "../../assets/icons/cloud"
import Drop from "../../assets/icons/drop"

const WeatherSheetItem = props => {
  const dt_txt = get(props, "data.dt_txt", "")
  const temp = get(props, "data.main.temp", 0)
  const feels_like = get(props, "data.main.feels_like", 0)
  const weather = get(props, "data.weather", [])
  const speed = get(props, "data.wind.speed", 0)
  const clouds = get(props, "data.clouds.all", 0)
  const pop = get(props, "data.pop", 0)

  const determineTemperature = (temp) => (temp > 0 ? `+${temp.toFixed(0)}` : temp.toFixed(0));

  return (
    <div className={"weather-sheet__item"} >
      <div className={"weather-sheet__basic"}>
        <div className={"weather-sheet__temp-value weather-sheet__inline"}>{determineTemperature(temp)}&#176;</div>
        <div className={"weather-sheet__feelings weather-sheet__inline"}>
          {weather.map((item) => (
            <div className={"weather-sheet__condition"} key={item.id}>
              {item.description}
            </div>
          ))}
          <div>
            Ощущается как {determineTemperature(feels_like)}&#176;
                </div>
        </div>
      </div>
      <div className={"weather-sheet__props"}>
        <div className={"weather-sheet__props-item"}>
          <Wind />
          {`${speed} м/с`}
        </div>
        <div className={"weather-sheet__props-item"}>
          <Cloud />
          {`${clouds}%`}
        </div>
        <div className={"weather-sheet__props-item"}>
          <Drop />
          {`${pop}%`}
        </div>
      </div>
      <hr className={"weather-sheet__spacer"} />
      <div className={"weather-sheet__hourly"}>{`${moment(dt_txt).format("HH:mm")} — ${Number(moment(dt_txt).format("HH")) + 3
        }:00`}</div>
    </div>
  )
}

export default WeatherSheetItem