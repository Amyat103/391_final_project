// RestaurantPage Component by Ayan Patel
// This component is for the page that displays all of the different restaurants around BU campus

import RestaurantsandItems from "../components/RestaurantsAndItems";
import nudpobImage from "../images/nudpobImage.png";
import victoriaImage from "../images/victoria.png";
import yardhouseImage from "../images/yardhouse.png";
import jefeImage from "../images/jefe.png";
import ugrillImage from "../images/ugrill.png";
import beijingImage from "../images/beijing.png";
import underdogImage from "../images/underdog.png";
import canesImage from "../images/canes.png";
import handrollImage from "../images/handroll.png";
import gyuImage from "../images/gyu.png";
import shudaxiaImage from "../images/shudaxia.png";

// This includes information for all the restaurants on the page
// Information includes the name, what style of food, where the
// restaurant is located, its hours, rating, and a image
const currentRestaurants = [
  {
    restaurantName: "Nudpob",
    foodType: "Thai",
    location: "BU Central",
    hours: "11AM - 10PM",
    rating: 4.3,
    image: nudpobImage,
  },
  {
    restaurantName: "Victoria Seafood",
    foodType: "Chinese",
    location: "West",
    hours: "11AM - 1AM",
    rating: 4.0,
    image: victoriaImage,
  },
  {
    restaurantName: "Yard House",
    foodType: "American",
    location: "Fenway",
    hours: "11AM - 12:30AM",
    rating: 4.3,
    image: yardhouseImage,
  },
  {
    restaurantName: "El Jefe's Taqueria",
    foodType: "Mexican",
    location: "West",
    hours: "8AM - 3AM",
    rating: 4.5,
    image: jefeImage,
  },
  {
    restaurantName: "University Grill & Pizza",
    foodType: "Pizza",
    location: "Central",
    hours: "10AM - 8PM",
    rating: 4.5,
    image: ugrillImage,
  },
  {
    restaurantName: "Beijing Cafe",
    foodType: "Chinese",
    location: "Central",
    hours: "11AM - 9:15PM",
    rating: 3.5,
    image: beijingImage,
  },
  {
    restaurantName: "Underdog Hot Chicken",
    foodType: "Fried Chicken",
    location: "Allston",
    hours: "12PM - 12AM",
    rating: 3.5,
    image: underdogImage,
  },
  {
    restaurantName: "Raising Cane's",
    foodType: "Fast Food",
    location: "West",
    hours: "10AM - 11PM",
    rating: 4.0,
    image: canesImage,
  },
  {
    restaurantName: "Matsunori Handroll Bar",
    foodType: "Sushi",
    location: "South",
    hours: "5PM - 10PM",
    rating: 5,
    image: handrollImage,
  },
  {
    restaurantName: "Gyu-Kaku BBQ",
    foodType: "Fast Food",
    location: "South",
    hours: "11AM - 10PM",
    rating: 4.0,
    image: gyuImage,
  },
  {
    restaurantName: "Shu Da Xia Hotpot",
    foodType: "Chinese",
    location: "East",
    hours: "12PM - 10:30PM",
    rating: 3.5,
    image: shudaxiaImage,
  },
];

// exporting the component with the title "Restaurants Page"
export default function Restaurants() {
  return (
    <div>
      <h1>Restaurants Page</h1>
      <RestaurantsandItems restaurants={currentRestaurants} />
    </div>
  );
}
