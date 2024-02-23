import SingleDayForecast from "./singleDayForecast";

interface ForecastByDates {
    address: string;
    days: SingleDayForecast[];
}

export default ForecastByDates