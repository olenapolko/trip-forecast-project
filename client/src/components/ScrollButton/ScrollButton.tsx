import React from 'react';
import leftArrow from '../../assets/images/left-arrow.svg';
import rightArrow from '../../assets/images/right-arrow.svg';
import styles from './ScrollButton.module.css';

interface ScrollButtonProps {
  direction: 'prev' | 'next';
  scrollAmount: number;
  onScroll: (amount: number) => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, scrollAmount, onScroll }) => {
  const handleClick = () => {
    const amount = direction === 'next' ? scrollAmount : -scrollAmount;
    onScroll(amount);
  };

  const icon = direction === 'prev' ? leftArrow : rightArrow;
  const buttonClass = direction === 'prev' ? styles.scrollButtonPrev : styles.scrollButtonNext;


  return (
    <button className={`${styles.scrollButton} ${buttonClass}`}  onClick={handleClick}>
        <img className={styles.scrollIcon} src={icon} alt={direction} />
    </button>
  );
};

export default ScrollButton;
