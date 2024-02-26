import React from 'react';
import City from 'src/interfaces/city';
import Trip from 'src/interfaces/trip';
import styles from "./TripItem.module.css"
import { formatDateToDDMMYYYY } from 'src/utils/formatDate'; 

interface TripItemProps {
  name: string;
  startDate: string;
  endDate: string;
  cityImg: string;
  selectTrip: () => void;
  imageUrl: string;
}

const TripItem: React.FC<TripItemProps> = ({ name, startDate, endDate, cityImg, selectTrip, imageUrl }) => {
  const formattedStartDate = formatDateToDDMMYYYY(startDate);
  const formattedEndDate = formatDateToDDMMYYYY(endDate);
  
  return (
    <li className={styles.tripItem} onClick={selectTrip}>
        <img src={imageUrl ? imageUrl : cityImg} alt={name} className={styles.tripItemImg}/>
      <div className={styles.tripItemCaption}>
        <h3 className={styles.tripItemCity}>{name}</h3>
        <p className={styles.tripItemData}>{formattedStartDate} - {formattedEndDate}</p>
      </div>
    </li>
  );
};

export default TripItem;
