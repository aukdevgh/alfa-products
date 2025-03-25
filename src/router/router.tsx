import { Routes, Route } from "react-router";
import { Home } from "../pages/home/home";
import { Products } from "../pages/products/products";
import { Product } from "../pages/product/product";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":id" element={<Product />} />
      </Route>
    </Routes>
  );
};
