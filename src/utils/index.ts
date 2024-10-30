import { format } from "date-fns";

import { TCountry } from "../apps/CurrencyConverter/types";
import type { WeatherForDayDTO } from "../interfaces";

export const qs = (obj: { [key: string]: string }): string => {
  return Object.entries(obj)
    .map((item) => item.join("="))
    .join("&");
};

export const transformObjectIntoArray = (
  obj: TCountry
): { id: string; text: string }[] =>
  Object.entries(obj).map(([id, text]) => ({
    id,
    text,
  }));

export const getTodayWeather = (
  listDays: WeatherForDayDTO[]
): WeatherForDayDTO[] => {
  return listDays.filter((item) => {
    const { dt_txt } = item;

    if (
      format(new Date(), "MM/dd/yyyy") ===
      format(new Date(dt_txt.split(" ").join("T")), "MM/dd/yyyy")
    ) {
      return item;
    }
  });
};
