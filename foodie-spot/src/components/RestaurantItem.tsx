import React from 'react';
import styled from 'styled-components';

interface Restaurant {
  restaurantName: string;
  foodType: string;
  location: string;
  hours: string;
  rating: number;
}

const RestaurantContainer = styled.div`
  background-color: grey;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem;
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
      <h2>{restaurantName}</h2>
      <p>{foodType}</p>
      <p>{location}</p>
      <p>{hours}</p>
      <p>{rating}</p>
    </RestaurantContainer>
  );
};

export default RestaurantItem;
