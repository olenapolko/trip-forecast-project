import { weatherIcons } from "src/assets/images/weather-icons";
import { getDayOfWeek } from "src/utils/getDayOfWeek";
import styles from "./WeatherList.module.css";

interface DayForecast {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  icon: string;
  description: string;
  datetimeEpoch: number;
}

interface WeatherListProps {
  forecastByDates: DayForecast[];
}

function WeatherList({ forecastByDates }: WeatherListProps) {
  return (
    <div className={styles.containerWeatherList}>
      <h2 className={styles.titleWeatherList}>Week</h2>
      <ul className={styles.byDatesList}>
        {forecastByDates.map((day) => (
          <li key={day.datetimeEpoch} className={styles.byDatesItem}>
            <h3 className={styles.byDatesDay}>{getDayOfWeek(day.datetime)}</h3>
            <div className={styles.byDatesIcon}>
              <img
                src={weatherIcons[day.icon]}
                alt={day.description}
                width={64}
              />
            </div>
            <p className={styles.byDatesTemp}>
              <span>{day.tempmax}&#176;</span>/<span>{day.tempmin}&#176;</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherList;
