import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Footer />
    </>
  );
}

export default App;
