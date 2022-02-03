import { TItemProps, TWeather } from "../types";

export interface IWeatherForDay {
  dt: number;
  dt_txt: string;
  temp: number;
  feels_like: number;
  weather: TWeather[];
  speed: number;
  clouds: number;
  pop: number;
}

export interface IWeatherSheetProps {
  list: IWeatherForDay[];
  city?: {
    id: number;
    name: string;
  };
}

export interface IWeatherSheetItemProps {
  data: TItemProps;
}
