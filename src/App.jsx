// import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import CustomPage from "../src/pages/CustomPage";
import Home from "../src/pages/Home";
import Payment from "../src/pages/Payment";
import PageNotFound from "../src/pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="customPage" element={<CustomPage />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
