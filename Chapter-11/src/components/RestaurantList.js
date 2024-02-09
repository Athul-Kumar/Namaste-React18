import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

import ShimmerUI from "./ShimmerUI";

const RestaurantList = (props) => {
  const { restaurantList } = props;
  return restaurantList?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-wrap gap-3 mx-12">
      {restaurantList?.map((restaurant) => (
        <Link
          to={"/restaurants/" + restaurant.info.id}
          key={restaurant.info.id}
        >
          <RestaurantCard restaurantList={restaurant} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
