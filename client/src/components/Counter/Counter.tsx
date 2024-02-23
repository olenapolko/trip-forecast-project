import styles from "./Counter.module.css";
import useCountdownTimer from "src/hooks/useCountDownTimer";

interface CounterProps {
  tripStart: string;
}

const Counter = ({ tripStart }: CounterProps) => {
  const { days, hours, minutes, seconds } = useCountdownTimer(tripStart);
  return (
    <div className={styles.counter}>
      <span className={styles.timeItem}>
        {days}
        <span>DAYS</span>
      </span>
      <span className={styles.timeItem}>
        {hours}
        <span>HOURS</span>
      </span>
      <span className={styles.timeItem}>
        {minutes}
        <span>MINUTES</span>
      </span>
      <span className={styles.timeItem}>
        {seconds}
        <span>SECONDS</span>
      </span>
    </div>
  );
}

export default Counter;