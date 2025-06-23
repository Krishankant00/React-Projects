import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../utils/axios";
import Loading from "./Loading";
import { useState } from "react";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

export default function Details() {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);

  const [product, setproduct] = useState(null);

  const { id } = useParams();

  // const getsingleproduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setproduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }
  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    // getsingleproduct();
  }, []);

  const deleteProductHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id != id);
    setproducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    toast.success("Product removed Successfully");
    navigate("/");
  };
  return product ? (
    <div className="w-[75%] h-full  m-auto p-[10%] flex  justify-center gap-8">
      <img className="h-[70%] pt-4 " src={`${product.image}`} alt="" />
      <div className="content  mt-4 height-[10vh] overflow-auto">
        <h1 className="text-xl font-semibold leading-6 pb-3">{`${product.title}`}</h1>
        <h2 className="my-3 font-semibold text-red-300">{`${product.category}`}</h2>
        <h2 className="font-semibold text-red-300">${`${product.price}`}</h2>
        <p className="mb-[5%] pt-3 italic leading-tight">{`${product.description}`}</p>
        <Link
          to={`/edit/${product.id}`}
          className="py-2 px-3 mr-5 border border-blue-300 rounded mb-3 text-blue-400"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteProductHandler(product.id)}
          className="py-2 px-3 border border-red-300 rounded mb-3 text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
