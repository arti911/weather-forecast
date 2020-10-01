import React, { useState, useEffect } from "react";
import DatePicker from "react-horizontal-datepicker";
import moment from "moment";
import { get } from "lodash"

import "./App.css";

import { DateContext } from "./context"
import Spin from "./components/Spin"
import WeatherSheet from "./components/WeatherSheet"

const App = () => {
  const [city, setCity] = useState("");
  const [time, setTime] = useState(moment().format("HH:mm"));
  const [weatherForDay, setWeatherForDay] = useState([]);
  const [currentDate, securrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const url =
    "//api.openweathermap.org/data/2.5/forecast?q=Kazan&lang=ru&units=metric&appid=c4421a76df1ebaf51fc8f1042a0fd8de";

  const selectedDay = value => securrentDate(value)

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("HH:mm"))
    }, 1000)
  }, [time])

  useEffect(() => {
    const getWather = async () => {
      setLoading(true)
      const weather = await fetch(url);
  
      if (weather.ok) {
        const { list, city } = await weather.json();
        
        const temperatureForDay = list.filter((item) => {
          const date = new Date(get(item, "dt_txt", ""));
          if (moment(currentDate).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD")) {
            return item
          }
        });
  
        setCity(get(city, "name", ""))
        setWeatherForDay(temperatureForDay)
        setLoading(false)
      }
    };

    getWather();
  }, [currentDate]);

  return (
    <DateContext.Provider value={currentDate}>
      <div className="App">
        <h1>Погода {city}</h1>
        <div>Сейчас {time}</div>
        <div style={{ maxWidth: "340px", margin: "20px auto 0" }}>
          <DatePicker className={"datepicker"} getSelectedDay={selectedDay} selectDate={currentDate} labelFormat={"MMMM yyyy"} endDate={1001} color={"rgb(0, 0, 0)"} />
        </div>
        {loading ? <Spin /> : <WeatherSheet weatherForDay={weatherForDay} />}
      </div>
    </DateContext.Provider>
  );
};

export default App;
