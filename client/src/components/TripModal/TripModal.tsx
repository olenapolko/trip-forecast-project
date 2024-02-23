import React, { useState, useEffect } from "react";
import { useAuth } from "src/context/AuthContext";
import { formatDateForInput } from "src/utils/formatDate";
import { fetchCities, saveTrip } from "src/api/tripApi";
import LocalTrip from "src/interfaces/localTrip";
import closeBtn from "../../assets/images/close-btn.svg";
import { nanoid } from "nanoid";

import styles from "./TripModal.module.css";
import Trip from "src/interfaces/trip";

interface CreateTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newTrip: Trip) => void;
}

const TripModal: React.FC<CreateTripModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [cities, setCities] = useState<
    Array<{ _id: number; name: string; imageUrl: string }>
  >([]);
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });
  const [validationError, setValidationError] = useState("");
  const [minEndDate, setMinEndDate] = useState(""); 

  const { user } = useAuth();
  const userId = user?._id;
  const today = new Date();
  const maxDate = new Date();

  maxDate.setDate(today.getDate() + 15);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const citiesData = await fetchCities();
        setCities(citiesData);
      } catch (error) {
        console.error("Could not fetch cities:", error);
      }
    };

    loadCities();
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    console.log(typeof name, typeof value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setValidationError("");

    if (!formData.name || !formData.startDate || !formData.endDate) {
      setValidationError("* All fields are required.");
      return;
    }

    const selectedCity = cities.find((city) => city.name === formData.name);
    console.log(selectedCity);
    const cityIdAsString = selectedCity?._id.toString() || '';

    const tripData: LocalTrip = {
      name: formData.name,
      startDate: formData.startDate,
      endDate: formData.endDate,
      userId: userId,
      cityId: cityIdAsString,
    };

    try {
      let savedTrip;
      if (user) {
        savedTrip = await saveTrip(tripData, user._id);
      } else {
        const localTrips = JSON.parse(localStorage.getItem("localTrips") || "[]");
        const newTripWithImage = {
          ...tripData,
          userId: nanoid(),
          cityImg: selectedCity?.imageUrl || '', 
        };
        localTrips.push(newTripWithImage);
        localStorage.setItem("localTrips", JSON.stringify(localTrips));
        savedTrip = newTripWithImage;
      }
    
      const newTrip: Trip = {
        ...savedTrip,
        _id: savedTrip._id || 'temporary-id', 
        cityImg: savedTrip.cityImg,
      };
    
      onSave(newTrip); 
    } catch (error) {
      console.error("Error saving trip:", error);
    }
    
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeBtn} alt="Close" className={styles.closeIcon} />
        </button>
        <h2 className={styles.modalTitle}>Create Trip</h2>
        <form className={styles.modalForm}>
          <div className={styles.modalField}>
            <label className={styles.modalLabel} htmlFor="city">
              <span className={styles.requiredAsterisk}>*</span>
              City
            </label>
            <select
              id="city"
              className={styles.modalSelect}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Please select a city
              </option>
              {cities.map((city) => (
                <option key={city._id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.modalField}>
            <label className={styles.modalLabel} htmlFor="startDate">
              <span className={styles.requiredAsterisk}>*</span>
              Start date
            </label>
            <input
              id="startDate"
              className={styles.modalInput}
              type="date"
              name="startDate"
              min={formatDateForInput(today)}
              max={formatDateForInput(maxDate)}
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.modalField}>
            <label className={styles.modalLabel} htmlFor="endDate">
              <span className={styles.requiredAsterisk}>*</span>
              End date
            </label>
            <input
              id="endDate"
              className={styles.modalInput}
              type="date"
              name="endDate"
              min={formatDateForInput(today)}
              max={formatDateForInput(maxDate)}
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          {validationError && (
            <div className={styles.validationError}>{validationError}</div>
          )}
        </form>
        <div className={styles.modalBtns}>
            <button
              className={`${styles.modalBtn} ${styles.cancelBtn}`}
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className={`${styles.modalBtn} ${styles.saveBtn}`}
              type="button"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
      </div>
    </div>
  );
};

export default TripModal;
