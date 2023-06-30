import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
