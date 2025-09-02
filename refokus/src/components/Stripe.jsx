import React from "react";
function Stripe({ val }) {
  return (
    <div className="w-[16.66%] mt-[8%]  flex justify-between items-center px-4 py-6 border-1 border-zinc-500">
      <img src={val.url} alt="" />
      <span className="font-semobold">{val.number}</span>
    </div>
  );
}

export default Stripe;
