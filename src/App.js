import React from "react";

// uncomment below 2 lines if wanted routes without animation
import {
  Homepage,
  Login,
  Cart,
  Menupage,
  Register,
  NotFound,
} from "./components";

// import {Navbar} from './components'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context";
import { Layout } from "./Layout";

// import {AnimatedRoutes} from "./routeAnimations/AnimatedRoutes";

function App() {
  return (
    <div className="w-full">
      <CartContextProvider>
        <BrowserRouter>

          {/*Normal route without animation. Uncomment below*/}
          <Routes>

            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Homepage />} />
              <Route path="cart" element={<Cart />} />
              <Route path="menu" element={<Menupage />} />
            </Route>

            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

          {/*  Route with animation */}
          {/* <AnimatedRoutes/> */}

        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
