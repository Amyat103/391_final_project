import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealPlan from "./pages/MealPlan";
import Restaurants from "./pages/Restaurants";

function Root() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/meal-plan/*" element={<MealPlan />} />
      <Route path="/restaurants/*" element={<Restaurants />} />
    </Routes>
  );
}

const router = createBrowserRouter([
  { path: "*", Component: Root }
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
