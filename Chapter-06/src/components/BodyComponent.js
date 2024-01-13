import { useState } from "react";
import resDataList from "../utils/mockData";
import RestaurantList from "./RestaurantList";

const BodyComponent = (props) => {
  const { resDataList } = props;

  const [inputText, setInputText] = useState("");
  const [listOfRestaurant, setListOfRestaurant] = useState(resDataList);

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
            const filterRestaurant = listOfRestaurant.filter((rest) =>
              rest.info.name.toLowerCase().includes(inputText.toLowerCase())
            );

            setListOfRestaurant(filterRestaurant);
          }}
        >
          Search Restaurant
        </button>

        <button onClick={()=>{
            const filterRating = listOfRestaurant.filter((rest)=> rest.info.avgRating> 4.2);
            setListOfRestaurant(filterRating);
        }}>Top Rated</button>
      </div>

      <RestaurantList resDataList={listOfRestaurant} />
    </div>
  );
};

export default BodyComponent;
