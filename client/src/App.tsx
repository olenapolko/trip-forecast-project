import { useState, ChangeEvent, useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import Wrapper from "./components/Wrapper/Wrapper";
import { MainContent } from "./components/MainContent/MainContent";
import { AsideContent } from "./components/AsideContent/AsideContent";
import LoginControl from "src/components/LoginControl/LoginControl";
import TripModal from "src/components/TripModal/TripModal";
import TripsList from "src/components/TripsList/TripsList";
import SearchBar from "src/components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import Trip from "./interfaces/trip";
import WeatherAside from "./components/WeatherAside/WeatherAside";
import WeatherList from "./components/WeatherList/WeatherList";
import { getWeatherByDay } from "./api/weatherApi";
import { getWeatherByDates } from "./api/weatherApi";
import Title from "./components/Title/Title";
import ForecastByDay from "./interfaces/forecastByDay";
import ForecastByDates from "./interfaces/forecastByDates";
import { fetchTrips } from "./api/tripApi";
import { sortTripsByStartDate } from "./utils/sortTripsByStartDate";
import { staticTripsList } from "./data/staticTripsList";

function App() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);
  const [currentTrip, setCurrentTrip] = useState<Trip>(trips[0]);

  const [forecastByDay, setForecastByDay] = useState<ForecastByDay | null>(
    null
  );
  const [forecastByDates, setForecastByDates] =
    useState<ForecastByDates | null>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveTrip = (newTrip: Trip) => {
    setTrips((currentTrips) => {
      const updatedTrips = [...currentTrips, newTrip];
      return sortTripsByStartDate(updatedTrips);
    });
  
    handleCloseModal();
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleCurrentTrip = (thisTrip: Trip) => {
    setCurrentTrip(thisTrip);
  };

  useEffect(() => {
    const existingTrips = localStorage.getItem("localTrips");
    if (!existingTrips) {
      localStorage.setItem("localTrips", JSON.stringify(staticTripsList));
    }
  }, []);

  useEffect(() => {
    const getTrips = async () => {
      try {
        let trips = await fetchTrips(user);
        const sortedTrips = sortTripsByStartDate(trips);
        setTrips(sortedTrips);
      } catch (error) {
        console.error("Error in component fetching trips:", error);
      }
    };

    getTrips();
  }, [user]);

  useEffect(() => {
    const lowercasedSearch = search.toLowerCase();
    const filtered = trips.filter((trip) =>
      trip.name.toLowerCase().includes(lowercasedSearch)
    );
    setFilteredTrips(filtered);
  }, [search, trips]);

  useEffect(() => {
    if (!currentTrip) {
      return;
    }
    const getWeather = async (currentTrip: Trip) => {
      try {
        const forecastByDates = await getWeatherByDates(currentTrip);
        const forecastByDay = await getWeatherByDay(currentTrip);
        setForecastByDates(forecastByDates);
        setForecastByDay(forecastByDay);
      } catch (error) {
        console.error(error);
      }
    };
    getWeather(currentTrip);
  }, [currentTrip]);

  return (
    <>
      <Container>
        <Wrapper>
          <MainContent>
            <Title />
            <SearchBar value={search} onChange={handleSearchChange} />
            <TripsList trips={filteredTrips} selectTrip={handleCurrentTrip} onOpenModal={handleOpenModal} />
            <TripModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSave={handleSaveTrip}
            />
            {forecastByDates && forecastByDates.days && (
              <WeatherList forecastByDates={forecastByDates.days} />
            )}
          </MainContent>
          <AsideContent>
          <LoginControl />
            {forecastByDay && (
              <WeatherAside
                address={forecastByDay.address}
                icon={forecastByDay.days[0].icon}
                temp={forecastByDay.days[0].temp}
                datetime={forecastByDay.days[0].datetime}
                description={forecastByDay.days[0].description}
                tripStart={currentTrip.startDate}
              />
            )}
          </AsideContent>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
