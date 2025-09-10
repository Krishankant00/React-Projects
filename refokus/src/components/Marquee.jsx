import React from "react";

function Marquee({ imagesurl }) {
  return (
    <div className="flex w-full py-4 gap-10 whitespace-nowrap overflow-hidden">
      {imagesurl.map((url) => (
        <img src={url} className="w-23" />
      ))}
      {imagesurl.map((url) => (
        <img src={url} className="" />
      ))}
    </div>
  );
}

export default Marquee;
