import React from "react";
import Navbar from "./components/Navbar";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import Products from "./components/Products";
import Marquees from "./components/Marquees";

function App() {
  return (
    <div className="w-full text-white bg-zinc-900 font-['satoshi']">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
    </div>
  );
}

export default App;
