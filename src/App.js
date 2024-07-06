import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/navbar/Nav";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import "./App.css";
const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full bg-gradient-to-br from-blue-400 via-green-400 to-teal-400">
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};
export default App;
