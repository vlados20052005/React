import React from "react";
import { Route, Routes } from "react-router-dom";
import { Catalog } from "./pages/Catalog/Catalog";
import { Header } from "./components/Header/Header";
import { Cart } from "./pages/Cart/Cart";
import { Contact } from "./pages/Contact/Contact";
import { Shipment } from "./pages/Shipment/Shipment";
import { Check } from "./pages/Сheck/Check";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipment />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </>
  );
};