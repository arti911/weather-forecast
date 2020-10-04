import { TWeather } from "../types"

export interface IWeatherForDay {

}

export interface IWeatherSheetProps {
    weatherForDay: Array<IWeatherForDay>
}

export type IItemProps = {
    dt_txt: string,
    temp: number,
    feels_like: number,
    weather: Array<TWeather>,
    speed: number,
    clouds: number,
    pop: number,
}

export interface IWeatherSheetItemProps {
    data: IItemProps
}
