import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
const App = () => {

  return (
    <>
      <div className="bg-primary min-h-screen graph-paper">
        <Analytics/>
        <Navbar />
        <HomePage />
      </div>
    </>
  );
};

export default App;
