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
        </main>
        <Routes>
          <Route path="/candies" element={<AllCandy />} />
          <Route path="/candies/:id" element={<Candy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Root;
