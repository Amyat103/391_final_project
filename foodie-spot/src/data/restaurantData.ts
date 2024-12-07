export interface Restaurant {
  restaurantName: string;
  foodType: string;
  location: string;
  hours: string;
  rating: number;
}

export const restaurantData: Restaurant[] = [
  {
    restaurantName: 'Nud Pod Thai Cuisine',
    foodType: 'Thai',
    location: '738 Commonwealth Ave, Boston',
    hours: '11:00 AM - 10:00 PM',
    rating: 4,
  },
];
