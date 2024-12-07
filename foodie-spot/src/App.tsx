// import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import MealPlan from "./pages/MealPlan";
import Restaurants from "./pages/Restaurants";
import Navbar from "./components/Navbar"; //
import GlobalStyle from "./components/GlobalStyle"; // Import GlobalStyle

function Root() {
  return (
    <div>
      <GlobalStyle /> {/* Apply global styles */}
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </div>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
