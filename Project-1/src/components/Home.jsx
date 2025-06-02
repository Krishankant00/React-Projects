import { Link, useLocation } from "react-router-dom"
import Nav from "./Nav"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../utils/Context"
import Loading from "./Loading";
import axios from '../utils/axios';


export default function Home() {

  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  
  const [filteredProducts, setfilteredProducts] = useState(null)
  
  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    if (!filteredProducts || category=='undefined') setfilteredProducts(products);
    if (category != "undefined") getproductscategory();
    }
  , [category, products]);
  
  
  

  return products ? (
    <>
      <Nav />
      <div className=" bg-zinc-100 w-[85%] p-5 pt-8 flex flex-wrap gap-6 overflow-x-hidden">

        {filteredProducts && filteredProducts.map((p, i) =>
        <Link key={p.id} to={`/details/${p.id}`} className="card  p-2 mt-8  shadow rounded w-[16%]   ">
        <div className="w-[90%] h-[26vh] card m-1 hover:scale-110 shadow-md rounded-md overflow-hidden ">
          <img
            className="w-full  h-42"
                src={`${p.image}`}
            
          />
        </div>
            <h1 className="w-full text-center hover:text-blue-300 text-xs mt-3 leading-tight font-semibold ">{`${p.title}`}</h1>
      </Link>
        )}

        
    

      </div>
    </>
  ) : (
    <Loading />
  );
}
