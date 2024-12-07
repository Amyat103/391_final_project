import RestaurantsandItems from "../components/RestaurantsAndItems";

const currentRestaurants = [
  {
    restaurantName: "Nudpob",
    foodType: "Thai",
    location: "BU Central",
    hours: "11AM - 10PM",
    rating: 4.3,
  },
  {
    restaurantName: "Victoria Seafood",
    foodType: "Chinese",
    location: "West",
    hours: "11AM - 1AM",
    rating: 4.0,
  },
  {
    restaurantName: "Yard House",
    foodType: "American",
    location: "Fenway",
    hours: "11AM - 12:30AM",
    rating: 4.3,
  },
  {
    restaurantName: "El Jefe's Taqueria",
    foodType: "Mexican",
    location: "West",
    hours: "8AM - 3AM",
    rating: 4.5,
  },
  {
    restaurantName: "University Grill & Pizza",
    foodType: "Pizza",
    location: "Central",
    hours: "10AM - 8PM",
    rating: 4.5,
  },
  {
    restaurantName: "Beijing Cafe",
    foodType: "Chinese",
    location: "Central",
    hours: "11AM - 9:15PM",
    rating: 3.5,
  },
  {
    restaurantName: "Underdog Hot Chicken",
    foodType: "Fried Chicken",
    location: "Allston",
    hours: "12PM - 12AM",
    rating: 3.5,
  },
  {
    restaurantName: "Raising Cane's",
    foodType: "Fast Food",
    location: "West",
    hours: "10AM - 11PM",
    rating: 4.0,
  },
];

export default function Restaurants() {
    return (
      <div>
        <h1>Restaurants Page</h1>
        <RestaurantsandItems
        restaurants = {currentRestaurants}
        />
      </div>
    );
  }