import axios from 'axios';
import LocalTrip from "src/interfaces/localTrip";
import User from "src/interfaces/user";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchCities = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cities`);
    return response.data;
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};

export const fetchTrips = async (user: User) => {
  if (!user) {
    const localTrips = localStorage.getItem('localTrips') || '[]';
    return JSON.parse(localTrips);
  }

  try {
    const url = `${BACKEND_URL}/api/trips/${user._id}/trips`;
    const response = await axios.get(url, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trips:", error);
    throw error;
  }
};

export const saveTrip = async (tripData: LocalTrip, userId: string) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/trips`, { ...tripData, userId }, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to save the trip");
  }
};

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/auth/me`, {
      withCredentials: true,
    });
    const data = response.data;
    return data; 
  } catch (error) {
    console.error(error);
    return null; 
  }
};

export const login = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/auth/google`);
    if (response.data) {
      window.location.href = response.data;
    } else {
      console.error('URL для входу не отримано');
    }
  } catch (error) {
    console.error('Помилка під час запиту на вхід', error);
  }
};

export const logout = async () => {
  try {
    await axios.get(`${BACKEND_URL}/auth/logout`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error('Помилка виходу', error);
  }
};