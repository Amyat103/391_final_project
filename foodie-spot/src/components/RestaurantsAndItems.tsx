// This component will display all restaurants and their associated information in their own divs

// component created by Sean Lin
// import RestaurantItem which is what we use for each restaurant
import RestaurantItem from "./RestaurantItem";
// import styled from the styled-components for the styling
import styled from "styled-components";
// We import the type for each Restaurant which is an object containing properties for each restaurant
import { Restaurant } from "./types";

// define a type for a list of type Restaurant which we will pass into as props for our RestaurantsAndItems Component
interface RestaurantsList {
  restaurants: Restaurant[];
}

// Add styling to the div container that will hold information about all restaurants
const RestaurantsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: darksalmon;
`;

// This component will take in a array of objects of type Restaurant and create one entire div container
// with nested div containers inside for each other restaurant so this way we can directly
// just create a constant that is a list of Restaurant objects in our RestaurantPage and pass them as props
// for this component, we map over each Restaurant object in the list and create a RestaurantItem component for
// each restaurant
export default function RestaurantsAndItems({ restaurants }: RestaurantsList) {
  return (
    <RestaurantsContainer>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          restaurantName={restaurant.restaurantName}
          foodType={restaurant.foodType}
          location={restaurant.location}
          hours={restaurant.hours}
          rating={restaurant.rating}
        />
      ))}
    </RestaurantsContainer>
  );
}
