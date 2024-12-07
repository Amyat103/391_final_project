import React from 'react';
import styled from 'styled-components';

import Rating from '@mui/material/Rating';
import { Restaurant } from '../data/restaurantData';

const RestaurantContainer = styled.div`
  background-color: grey;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem;
`;

const RestaurantName = styled.h2`
  color: #2c3e50; /* Dark blue */
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: bold;
`;

const FoodType = styled.p`
  color: #3498db; /* Light blue */
  font-size: 1rem;
  margin: 0.5rem 0;
  font-weight: 400;
`;

const LocationText = styled.p`
  color: #7f8c8d; /* Light grey */
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const HoursText = styled.p`
  color: #7f8c8d; /* Light grey */
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const RestaurantItem = ({
  restaurantName,
  foodType,
  location,
  hours,
  rating,
}: Restaurant) => {
  return (
    <RestaurantContainer>
      <RestaurantName>{restaurantName}</RestaurantName>
      <FoodType>{foodType}</FoodType>
      <LocationText>{location}</LocationText>
      <HoursText>{hours}</HoursText>
      <Rating value={rating} precision={0.5} readOnly />
    </RestaurantContainer>
  );
};

export default RestaurantItem;
