import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9816358&lng=76.2998842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const Data = await response.json();

    setListOfRestaurants(
      Data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      Data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body-containter">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurant"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchedRest = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(inputText.toLowerCase())
            );
            setFilteredRestaurants(searchedRest);
          }}
        >
          search Restaurant
        </button>
        <button
          onClick={() => {
            const topRatedRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurants(topRatedRestaurants);
          }}
        >
          Top Rated
        </button>
      </div>
      <RestaurantList restaurantList={filteredRestaurants} />
    </div>
  );
};

export default BodyComponent;
