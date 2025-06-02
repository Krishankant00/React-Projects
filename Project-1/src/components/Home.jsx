import { Link } from "react-router-dom"
import Nav from "./Nav"
import { useContext } from "react"
import { ProductContext } from "../utils/Context"
import Loading from "./Loading";

export default function Home() {

  const [products] = useContext(ProductContext);
  console.log(products);
  return products ? (
    <>
      <Nav />
      <div className=" bg-zinc-100 w-[85%] p-5 flex flex-wrap gap-6 overflow-x-hidden">

        {products.map((p, i) =>
        <Link key={p.id} to={`/details/${p.id}`} className="card  p-2 mt-3  shadow rounded w-[16%]   ">
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
