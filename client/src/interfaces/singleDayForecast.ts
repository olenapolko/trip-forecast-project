interface SingleDayForecast {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  icon: string;
  description: string;
  datetimeEpoch: number;
}

export default SingleDayForecast;
