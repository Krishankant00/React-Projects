import { Link } from "react-router-dom"
import Nav from "./Nav"

export default function Home() {
  return (
    <>
    <Nav/>
    <div className=" bg-slate-500 w-[85%] p-5 flex flex-wrap gap-4 overflow-x-hidden">
        <Link to="/details/1" className="card  p-4 mt-3 shadow-lg rounded w-[15%] h-[37vh]  ">
          <div className="w-[90%] h-[26vh] card m-1 hover:scale-110 shadow-md rounded-md overflow-hidden ">
            <img
              className="w-full  h-42"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </div>
            <h1 className="text-center hover:text-blue-300 text-sm mt-3 whitespace-nowrap font-semibold ">Lorem ipsum dolor sit.</h1>
        </Link>

        

      </div>
      </>
  )
}
