
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";

const RestaurantList = (props) => {

    const {resDataList} = props;

 
  return resDataList.length ===0 ? (<ShimmerUI/>): (
    <div className="resListContainer">
      {resDataList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resDataList={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
