import React, { useContext } from "react"
import moment from "moment"

import "./NoForecast.css"
import calendar from "../../assets/calendar.png"

import { DateContext } from "../../context"

const NoForecast: React.FC = () => {
    const date = useContext<Date>(DateContext);

    return (
    <div className={"no-forecast"}>
        <h2>{`На ${moment(date).format("L")} прогноз отсутствует`}</h2>
        <img src={calendar} alt={"Изображение календаря"} />
    </div>
    )
}

export default NoForecast