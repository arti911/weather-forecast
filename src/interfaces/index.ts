import { TItemProps, TWeather } from "../types"

export interface IWeatherForDay {
    dt: number,
    dt_txt: string,
    temp: number,
    feels_like: number,
    weather: Array<TWeather>,
    speed: number,
    clouds: number,
    pop: number,
}

export interface IWeatherSheetProps {
    weatherForDay: Array<IWeatherForDay>
}

export interface IWeatherSheetItemProps {
    data: TItemProps
}
