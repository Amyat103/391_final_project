import React, { useEffect, useState } from "react";

interface Meal {
  id: number;
  title: string;
  imageType: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
}

const MealPlan: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMealPlan = async () => {
    const apiKey = import.meta.env.VITE_TRUC_SPOONACULAR_API_KEY
      if (!apiKey) {
        setError("API key not found. Please check your environment variables.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch meal plan.");
        }
        const data = await response.json();
        setMeals(data.meals);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMealPlan();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Today's Meal Plan</h2>
      <div className="meal-plan">
        {meals.map((meal) => (
          <div key={meal.id} className="meal-card">
            <h3>{meal.title}</h3>
            <p>Ready in: {meal.readyInMinutes} minutes</p>
            <p>Servings: {meal.servings}</p>
            <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;
