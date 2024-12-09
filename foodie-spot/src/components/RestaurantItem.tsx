// RestaurantItem component: Arkar Myat (David)
// This is to render each item component for the restaurant page to use
// used Rating component in Material UI for the star
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import { Restaurant } from './types';

// styled components for container, name, food type, location, hours, and image
const RestaurantContainer = styled.div`
  background-color: #2c2f36;
  border-radius: 10px;
  padding: 1.5rem;
  width: 300px;
  margin: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  }
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
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

// RestaurantItem component takes in restaurantName, foodType, location, hours, rating, and image
// renders each of them using the styled components
// This component is for Restaurant page to render the info
export default function RestaurantItem({
  restaurantName,
  foodType,
  location,
  hours,
  rating,
  image,
}: Restaurant) {
  return (
    <RestaurantContainer>
      <RestaurantImage src={image} alt={restaurantName} />
      <RestaurantName>{restaurantName}</RestaurantName>
      <FoodType>{foodType}</FoodType>
      <LocationText>{location}</LocationText>
      <HoursText>{hours}</HoursText>
      <Rating value={rating} precision={0.5} readOnly />
      <p style={{ display: 'inline' }}>Rating: {rating}/5</p>
    </RestaurantContainer>
  );
}
