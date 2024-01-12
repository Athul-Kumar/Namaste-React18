
import {LOGO_URL} from "../utils/constants"

const HeaderComponent = () => {
  return (
    <div className="Header">
      <img
        className="img"
        src= {LOGO_URL}
        alt=""
      />

      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default HeaderComponent;