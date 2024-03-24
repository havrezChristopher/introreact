import React from "react";
import { Analytics } from "@vercel/analytics/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      {/* vercel Pour les donnée annalitique du site web voir doc pour personaliser !  https://vercel.com/docs/analytics*/}
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />

        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
