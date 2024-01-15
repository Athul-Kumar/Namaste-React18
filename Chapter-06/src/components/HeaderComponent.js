import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {

  const [authBtn, setAuthBtn] = useState("Log In");

  return (
    <div className="Header">
      <img className="img" src={LOGO_URL} alt="" />

      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={()=>{
            (authBtn ==="Log In") ?setAuthBtn("Log Out") :setAuthBtn("Log In");
          }}>{authBtn}</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
