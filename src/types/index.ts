export type TWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type TItemProps = {
  dt_txt: string;
  temp: number;
  feels_like: number;
  weather: Array<TWeather>;
  speed: number;
  clouds: number;
  pop: number;
};
