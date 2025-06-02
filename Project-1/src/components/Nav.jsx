import React from "react";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

export default function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  

  return (
    <nav className="w-[15%] h-full bg-zinc-200 flex flex-col items-center pt-5">
        <a
          className="py-2 px-3 border border-blue-300 rounded mb-3 text-blue-400"
          href=""
        >
          Add new Product
        </a>
        
        <h1 className=" mb-3 w-[80%] font-semibold">Category Filter</h1>
      <div className=" w-[80%]">
        {distinct_category.map((c, i) => (
           <Link key={i} to ={`/?category=${c}`} className=" mb-2 flex items-center ">
           {" "}
           <span className="mr-2 rounded-full w-[15px] h-[15px] bg-blue-300"></span>{" "}
           {c}
         </Link>
         ))}

          
          
        </div>
      </nav>
  )
}
