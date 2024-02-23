import styles from './TitleSpan.module.css';

const Title = () => {
  return (
    <h1 className={styles.mainTitle}><span className={styles.titleSpan}>Weather </span>Forecast</h1>
  )
}

export default Title