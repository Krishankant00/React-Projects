import { BsArrowReturnRight } from "react-icons/bs";
function Button({ title = "Start a Project" }) {
  return (
    <div className="min-w-40 max-w-40 px-5 py-2 flex items-center justify-between bg-white text-black rounded-full">
      <span className="text-sm ">{title}</span>
      <BsArrowReturnRight />
    </div>
  );
}

export default Button;
