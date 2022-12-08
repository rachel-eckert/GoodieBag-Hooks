import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCandy from "./components/AllCandy";
import Candy from "./components/Candy";
import Navbar from "./components/Navbar";
const Root = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <nav>Goodie Bag</nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <Routes>
          <Route path="/candies" element={<AllCandy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Root;
