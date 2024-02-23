import Trip from "src/interfaces/trip";

export const sortTripsByStartDate = (trips: Trip[]) => {
    return trips.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
 }
  