import { useState } from "react";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [authBtn, setAuthBtn] = useState("Log In");

  const isOnline = useOnlineStatus()

  return (
    <div className="nav-bar">
      <img className="header-img" src={IMG_URL} />
      <div className="nav-list">
        <ul>
        <li>
          Status:{(isOnline ===false) ? "🔴" : "🟢"}
        </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>

          <button
            className="user-Btn"
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
