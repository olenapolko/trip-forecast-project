import { useRef, useState, useEffect } from 'react';
import Trip from 'src/interfaces/trip';
import TripItem from '../TripItem/TripItem';
import styles from './TripsList.module.css';
import ScrollButton from '../ScrollButton/ScrollButton';
import AddTripButton from '../AddTripButton/AddTripButton';

import { nanoid } from 'nanoid';

interface TripsListProps {
  trips: Trip[];
  selectTrip: (trip: Trip) => void;
  onOpenModal: () => void;
}

const TripsList = ({ trips, selectTrip, onOpenModal }: TripsListProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const checkForOverflow = () => {
    const hasOverflow = listRef.current
      ? listRef.current.scrollWidth > listRef.current.clientWidth
      : false;
    setShowScrollButtons(hasOverflow);
  };

  useEffect(() => {
    checkForOverflow();
    window.addEventListener('resize', checkForOverflow);
    return () => window.removeEventListener('resize', checkForOverflow);
  }, [trips]);

  const scroll = (scrollOffset: number) => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.tripsWrapper}>
      {showScrollButtons && (
        <ScrollButton direction="prev" scrollAmount={150} onScroll={scroll} />
      )}
      <ul className={styles.tripsList} ref={listRef}>
        {trips.map((trip) => (
          <TripItem
            key={nanoid()}
            name={trip.name}
            startDate={trip.startDate}
            endDate={trip.endDate}
            cityImg={trip.cityImg}
            selectTrip={() => selectTrip(trip)}
            imageUrl={trip.imageUrl}
          />
        ))}
        <AddTripButton onOpenModal={onOpenModal} />
      </ul>
      {showScrollButtons && (
        <ScrollButton direction="next" scrollAmount={150} onScroll={scroll} />
      )}
    </div>
  );
};

export default TripsList;
