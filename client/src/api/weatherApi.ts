import axios from "axios";
import Trip  from "src/interfaces/trip";
export const API_KEY = "8S35CNQHJWQ3P42YS5TR5HBGM";

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export const getWeatherByDates = async (trip: Trip) => {
  try {
    const startDateString = trip.startDate;
    const endDateString = trip.endDate;
    const response = await axios.get(
      `${trip.name}/${startDateString}/${endDateString}?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherByDay = async (trip: Trip) => {
  try {
    const response = await axios.get(
      `${trip.name}/today?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};