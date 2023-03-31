import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
