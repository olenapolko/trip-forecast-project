import { weatherIcons } from "src/assets/images/weather-icons";
import { getDayOfWeek } from "src/utils/getDayOfWeek";
import Counter from "../Counter/Counter";
import styles from "./WeatherAside.module.css";

interface WeatherAsideProps {
    address: string;
    icon: string;
    temp: number;
    datetime: string;
    description: string;
    tripStart: string;
}

const WeatherAside = ({
  address,
  icon,
  temp,
  datetime,
  description,
  tripStart,
}: WeatherAsideProps) => {
  return (
    <div className={styles.asideContainer}>
      <p className={styles.dayOfWeek}>{getDayOfWeek(datetime)}</p>
      <div className={styles.temp}>
        <img src={weatherIcons[icon]} alt={description} width={80} />
        <p>
          {temp}
          <sup>&#8451;</sup>
        </p>
      </div>
      <h2 className={styles.cityName}>{address}</h2>
      <Counter tripStart={tripStart} />
    </div>
  );
}

export default WeatherAside;