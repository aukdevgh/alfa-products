import { useEffect } from "react";
import { Router } from "./router/router";
import { Header } from "./components/header/header";
import { fetchProducts } from "./store/products/products-slice";
import { useAppDispatch } from "./store/store";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="container">
        <Router />
      </main>
    </>
  );
}

export default App;
