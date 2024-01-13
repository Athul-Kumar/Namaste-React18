
import RestaurantCard from "./RestaurantCard";

const RestaurantList = (props) => {

    const {resDataList} = props;
 
  return (
    <div className="resListContainer">
      {resDataList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resDataList={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
