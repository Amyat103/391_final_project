import RestaurantsandItems from '../components/RestaurantsAndItems';

const currentRestaurants = [
  {
    restaurantName: 'Nudpob',
    foodType: 'Thai',
    location: 'BU Central',
    hours: '11AM - 10PM',
    rating: 4.3,
  },
  {
    restaurantName: 'Victoria Seafood',
    foodType: 'Chinese',
    location: 'West',
    hours: '11AM - 1AM',
    rating: 4.0,
  },
  {
    restaurantName: 'Yard House',
    foodType: 'American',
    location: 'Fenway',
    hours: '11AM - 12:30AM',
    rating: 4.3,
  },
  {
    restaurantName: 'Nudpob',
    foodType: 'Thai',
    location: 'BU Central',
    hours: '11AM - 10PM',
    rating: 4.3,
  },
  {
    restaurantName: 'Victoria Seafood',
    foodType: 'Chinese',
    location: 'West',
    hours: '11AM - 1AM',
    rating: 4.0,
  },
  {
    restaurantName: 'Yard House',
    foodType: 'American',
    location: 'Fenway',
    hours: '11AM - 12:30AM',
    rating: 4.3,
  },
  {
    restaurantName: 'Nudpob',
    foodType: 'Thai',
    location: 'BU Central',
    hours: '11AM - 10PM',
    rating: 4.3,
  },
  {
    restaurantName: 'Victoria Seafood',
    foodType: 'Chinese',
    location: 'West',
    hours: '11AM - 1AM',
    rating: 4.0,
  },
  {
    restaurantName: 'Yard House',
    foodType: 'American',
    location: 'Fenway',
    hours: '11AM - 12:30AM',
    rating: 4.3,
  },
];

export default function Restaurants() {
  return (
    <div>
      <h1>Restaurants Page</h1>
      <RestaurantsandItems restaurants={currentRestaurants} />
    </div>
  );
}
