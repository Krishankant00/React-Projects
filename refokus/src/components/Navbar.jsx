function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center ">
      <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links flex gap-15 ml-20">
        {["Home", "Work", "Culture"].map((elem) => (
          <a className="text-xm" href="#">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"></span>
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
