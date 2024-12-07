import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { Restaurant } from "./types";

const RestaurantContainer = styled.div`
  background-color: #2c2f36;
  border-radius: 10px;
  padding: 1.5rem;
  width: 300px;
  margin: 1rem;
`;

const RestaurantName = styled.h2`
  color: #f8a04b; /* Orange */
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: bold;
`;

const FoodType = styled.p`
  color: white;
  font-size: 1rem;
  margin: 0.5rem 0;
  font-weight: 400;
`;

const LocationText = styled.p`
  color: #b4b4b4; /* Light grey */
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const HoursText = styled.p`
  color: #b4b4b4; /* Light grey */
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export default function RestaurantItem({
  restaurantName,
  foodType,
  location,
  hours,
  rating,
}: Restaurant) {
  return (
    <RestaurantContainer>
      <RestaurantName>{restaurantName}</RestaurantName>
      <FoodType>{foodType}</FoodType>
      <LocationText>{location}</LocationText>
      <HoursText>{hours}</HoursText>
      <Rating value={rating} precision={0.5} readOnly />
    </RestaurantContainer>
  );
}
