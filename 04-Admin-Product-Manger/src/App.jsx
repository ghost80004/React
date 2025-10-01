import React from "react";
import AdminPanel from "./components/AdminPanel";
import ProductsPage from "./components/ProductsPage";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useState } from "react";
import  Login  from './auth/Login';
export default function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("items")) || []);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  // optional
   // useEffect(() => {
  //   let items = JSON.parse(localStorage.getItem("items")) || [];
  // }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductsPage products={products} />,
    },
 {
      path: "/admin",
      element: isLoggedIn ? (
        <AdminPanel products={products} setProducts={setProducts} />
      ) : (
        <Navigate to="/login" />
      ),
    },
     {
      path: "/login",
      element: <Login setIsLoggedIn={setIsLoggedIn} />,
    },
  ]);
  return (
    <div className="space-y-10">
      <h2 className="mt-6 text-2xl font-bold text-center">Product Page</h2>
      <RouterProvider router={router}/>
  

    </div>
  );
}
