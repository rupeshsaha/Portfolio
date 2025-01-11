import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
const App = () => {

  return (
    <>
      <div className="bg-primary min-h-screen graph-paper">
        <Navbar />
        <HomePage />
      </div>
    </>
  );
};

export default App;
