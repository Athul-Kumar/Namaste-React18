
import RestaurantList from "./RestaurantList";
import { useState } from "react";



const BodyComponent = (props) => {

  const {resDataList} = props
  const [listOfRestaurants, setListOfRestautants] = useState(resDataList);

  return (
    <div className="Body-Container">
      <button
        onClick={() => {
          const filterList = listOfRestaurants.filter(
            (rest) => rest.info.avgRating > 4.2
          );
          setListOfRestautants(filterList);
        }}
      >
        Filter Restaurant
      </button>

      <RestaurantList
        resDataList={listOfRestaurants}
      />
    </div>
  );
};

export default BodyComponent;
