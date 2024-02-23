import { nanoid } from "nanoid";
import { formatDateForInput } from "src/utils/formatDate";
const currentDate = new Date();
const startData = new Date(currentDate.setDate(currentDate.getDate() + 1));
const endData = new Date(currentDate.setDate(currentDate.getDate() + 6));

export const staticTripsList = [
  {
    _id: nanoid(),
    name: "Lviv, Ukraine",
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/lviv_nmabt2.webp",
    startDate: formatDateForInput(startData),
    endDate: formatDateForInput(endData),
    cityId: "65d4beaa65725388131abe29",
    userId: nanoid(),
    cityImg: "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/lviv_nmabt2.webp"
  },
];
