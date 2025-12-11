import HomeScreen from "@/app/home/home";
import ProductsScreen from "@/app/products/products";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/products",
    element: <ProductsScreen />,
  },
]);
