import React from "react";
import Navbar from "./components/Navbar";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import Products from "./components/Products";

function App() {
  return (
    <div className="w-full text-white bg-zinc-900 font-['satoshi']">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  );
}

export default App;
