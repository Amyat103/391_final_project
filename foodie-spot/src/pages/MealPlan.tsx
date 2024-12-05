import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Meal {
  id: number;
  title: string;
  imageType: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
}

// Styled components
const MealPlanContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #1f1f1f; 
  color: #f1f1f1; 
  width: 70%;
  margin: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MealCard = styled.div`
  background-color: #2c2f36;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  margin: 1.5rem 0;
  color: #f1f1f1;
  transition: transform 0.3s, box-shadow 0.3s;
  display: inline-block;
  width: 30%;
  margin: 1.5rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const MealImage = styled.img`
  width: 7.5em;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

const MealTitle = styled.h3`
  color: #f8a04b; /* Orange color */
  font-size: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const MealDetails = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const MealLink = styled.a`
  color: #f8a04b; 
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #f2b56e; /* Lighter orange */
  }
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #f8a04b; 

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ErrorText = styled.p`
  font-size: 1.2rem;
  color: red;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MealPlan: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMealPlan = async () => {
      const apiKey = import.meta.env.VITE_TRUC_SPOONACULAR_API_KEY;
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

  if (loading) return <LoadingText>Loading...</LoadingText>;
  if (error) return <ErrorText>Error: {error}</ErrorText>;

  return (
    <MealPlanContainer>
      <h2>Today's Meal Plan</h2>
      <div className="meal-plan">
        {meals.map((meal) => (
          <MealCard key={meal.id}>
            <MealImage
              src={`https://spoonacular.com/recipeImages/${meal.id}-556x370.${meal.imageType}`}
              alt={meal.title}
            />
            <MealTitle>{meal.title}</MealTitle>
            <MealDetails>
              Ready in: {meal.readyInMinutes} minutes | Servings: {meal.servings}
            </MealDetails>
            <MealLink href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">
              View Recipe
            </MealLink>
          </MealCard>
        ))}
      </div>
    </MealPlanContainer>
  );
};

export default MealPlan;
