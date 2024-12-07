import React from "react";
import RestaurantItem from "./RestaurantItem";
import { Restaurant } from "./RestaurantItem";
import styled from "styled-components";

interface RestaurantsList {
    restaurants: Restaurant[];
};


const RestaurantsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: darksalmon;
`;
export default function RestaurantItems({restaurants}: RestaurantsList) {
    return (
        <RestaurantsContainer>
            {restaurants.map((restaurant) => (
            <RestaurantItem 
                restaurantName={restaurant.restaurantName}
                foodType = {restaurant.foodType}
                location = {restaurant.location}
                hours = {restaurant.hours}
                rating = {restaurant.rating}
            />  
            ))}
        </RestaurantsContainer>
    )
}