import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import ShimmerUI from "./Shimmer";

const BodyComponent = (props) => {
  const { resDataList } = props;
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [inputText, setInputText] = useState("");

  console.log(listOfRestaurant);
  console.log(filteredRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9816358&lng=76.2998842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  


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
            const filteredRestaurant = listOfRestaurant.filter((rest) =>
              rest.info.name.toLowerCase().includes(inputText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button
          onClick={() => {
            const filteredRatings = listOfRestaurant.filter(
              (rest) => rest.info.avgRating >= 4.5
            );

            setFilteredRestaurant(filteredRatings);
          }}
        >
          Top Rated
        </button>
      </div>
      
      <RestaurantList resDataList={filteredRestaurant} />
    </div>
  );
};

export default BodyComponent;
