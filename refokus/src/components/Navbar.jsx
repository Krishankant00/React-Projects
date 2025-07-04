import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-15 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-5 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25 #00F19" }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
