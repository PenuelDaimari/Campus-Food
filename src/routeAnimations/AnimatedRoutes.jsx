import { Route, Routes, useLocation } from "react-router-dom";
import {
    AnimatedCartPage,
  AnimatedRegisterPage,
  AnimatedHomepage,
  AnimatedLoginPage,
  AnimatedMenuPage,
} from "./index";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../components";
import { NotFound } from "../components/not-found/NotFound";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedLoginPage />} />
          <Route path="/register" element={<AnimatedRegisterPage />} />
          <Route path="/home" element={<AnimatedHomepage />} />
          <Route path="/cart" element={<AnimatedCartPage />} />
          <Route path="/menu" element={<AnimatedMenuPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
