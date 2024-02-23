interface ForecastByDay {
  address: string;
  days: {
    icon: string;
    temp: number;
    datetime: string;
    description: string;
  }[];
}

export default ForecastByDay;
