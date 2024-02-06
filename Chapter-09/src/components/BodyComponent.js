import {useState,useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { RESLIST_API } from "../utils/constants";
// import useRestaurantList from "./utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
   const [inputText, setInputText] = useState("");

     useEffect(() => {
       fetchRestlistData();
     }, []);

     const fetchRestlistData = async () => {
       const reslistData = await fetch(RESLIST_API);
       const json = await reslistData.json();
      
      
       setListOfRestaurants(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
           ?.restaurants
       );

       setFilteredRestaurants(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
           ?.restaurants
       );
     };

  
     const isOnline = useOnlineStatus();
    if(isOnline === false){

      return <h1>Check your Internet Connection Again</h1>
    }

  


  
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
