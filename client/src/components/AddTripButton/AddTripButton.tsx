import React from "react";
import styles from "./AddTripButton.module.css";

interface AddTripButtonProps {
  onOpenModal: () => void;
}

const AddTripButton: React.FC<AddTripButtonProps> = ({ onOpenModal }) => {
  return (
    <li className={styles.tripItem} >
      <button className={styles.addTripButton} onClick={onOpenModal}>
        Add Trip
      </button>
    </li>
  );
};

export default AddTripButton;
