import { Router } from "./router/router";
import "./App.css";
import { Header } from "./components/header/header";

function App() {
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
