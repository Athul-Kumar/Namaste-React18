import { useState } from "react";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [authBtn, setAuthBtn] = useState("Log In");

  const isOnline = useOnlineStatus();

  return (
    <div className="flex items-center justify-between px-4 bg-cyan-400">
      <div className="logo-container">
        <img className="w-20 mix-blend-darken" src={IMG_URL} />
      </div>

      <div className="">
        <ul className="flex gap-4">
          <li className="font-bold">
            Status:{isOnline === false ? "🔴" : "🟢"}
          </li>
          <li className="font-bold hover:text-slate-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-bold hover:text-slate-300">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="font-bold hover:text-slate-300">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="font-bold hover:text-slate-300">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="font-bold hover:text-slate-300">Cart</li>

          <button
            className="font-bold hover:text-slate-300"
            onClick={() => {
              authBtn === "Log In"
                ? setAuthBtn("Log Out")
                : setAuthBtn("Log In");
            }}
          >
            {authBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
