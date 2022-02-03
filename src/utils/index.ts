import { format } from "date-fns";

import { TCountry } from "../app/CurrencyConverter/interface";
import { IWeatherForDay } from "../interfaces";

export const qs = <T>(obj: T): string => {
  return Object.entries(obj)
    .map((item) => item.join("="))
    .join("&");
};

export const transformObjectIntoArray = (obj: TCountry): { id: string, text: string }[] => Object.entries(obj).map(([id, text]) => ({
  id,
  text,
}));

export const getTodayWeather = (listDays: IWeatherForDay[]): IWeatherForDay[]  => {
  return listDays.filter((item) => {
    const { dt_txt } = item;

    if (format(new Date(), "MM/dd/yyyy") === format(new Date(dt_txt.split(" ").join("T")), "MM/dd/yyyy")) {
      return item;
    }
  });
}
