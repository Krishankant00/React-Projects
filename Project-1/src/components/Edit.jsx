import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

function Edit() {
  const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const ChangeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  // const [title, settitle] = useState("");
  // const [image, setimage] = useState("");
  // const [category, setcategory] = useState("");
  // const [price, setprice] = useState("");
  // const [description, setdescription] = useState("");

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 3 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Enter valid input");
      return;
    }
    const pi = products.findIndex((p) => p.id == id);
    const CopyData = [...products];
    CopyData[pi] = { ...products[pi], ...product };

    setproducts(CopyData);
    localStorage.setItem("products", JSON.stringify(CopyData));
    toast.success("Product Edited Successfully");
    navigate(-1);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen "
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit product</h1>

      <input
        type="url"
        placeholder="image"
        className="text-1xl bg-zinc-200 rounded p-4 w-1/2 mb-3"
        name="image"
        onChange={ChangeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-200 rounded p-4 w-1/2 mb-3"
        name="title"
        onChange={ChangeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-200 rounded p-4 w-[48%] mb-3"
          name="category"
          onChange={ChangeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-200 rounded p-4 w-[48%] mb-3"
          name="price"
          onChange={ChangeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        name="description"
        onChange={ChangeHandler}
        placeholder="enter product description here.."
        value={product && product.description}
        className="text-1xl bg-zinc-200 rounded p-4 w-1/2 mb-3"
      ></textarea>

      <div className="w-1/2">
        <button className="py-2 px-3 border border-blue-300 rounded mb-3 text-blue-400">
          Save Product
        </button>
      </div>
    </form>
  );
}

export default Edit;
