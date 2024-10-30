import { useState, useEffect } from 'react';
import moment from "moment";
import { get } from "lodash"

import type { WeatherForDayDTO, IWeatherSheetProps } from "../interfaces"
import { getData } from "../query";
import { WEATHER_API_KEY, WEATHER_URL } from "../constants";
import { getTodayWeather, qs } from "../utils";

export const useGetWeather = () => {
  const [city, setCity] = useState<string>("");
  const [time, setTime] = useState<string>(moment().format("HH:mm"));
  const [weatherForDay, setWeatherForDay] = useState<WeatherForDayDTO[]>([]);
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

  return {
    city,
    time,
    loading,
    weatherForDay
  }
}