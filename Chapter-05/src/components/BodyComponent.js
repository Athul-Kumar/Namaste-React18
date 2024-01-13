import LOGO_URL from "../utils/constants";
import RestaurantList from "./RestaurantList";
import { useState } from "react";

const BodyComponent = (props) => {
  const { resDataList } = props;

  const [inputText, setInputText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState(resDataList);

  return (
    <div className="Body-Container">
      <div className="filter-Container">
        <input
          type="text"
          placeholder="Search..."
          value={inputText}
          onChange={(e) => {
            const { value } = e.target;
            setInputText(value);
          }}
        />
        <button
          onClick={() => {
            const filterRestaurant = resDataList.filter((rest) =>
              rest.info.name.toLowerCase().includes(inputText.toLowerCase())
            );
            setListOfRestaurants(filterRestaurant);
            setInputText("");
          }}
        >
          Search
        </button>
        <button onClick={()=>{
          const topRatedRest = listOfRestaurants.filter((rest)=>rest.info.avgRating > 4.2);
          setListOfRestaurants(topRatedRest);
        }}>Top Rating</button>
      </div>

      <RestaurantList resDataList={listOfRestaurants} />
    </div>
  );
};

export default BodyComponent;
