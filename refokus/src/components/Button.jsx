import { BsArrowReturnRight } from "react-icons/bs";
function Button() {
  return (
    <div className="min-w-40 px-5 py-2 flex items-center justify-between bg-white text-black rounded-full">
      <spna className="text-sm ">Start a Project</spna>
      <BsArrowReturnRight />
    </div>
  );
}

export default Button;
