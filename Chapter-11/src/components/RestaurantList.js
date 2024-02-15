import { Link } from "react-router-dom";
import RestaurantCard,{rescardWithLabel} from "./RestaurantCard";

import ShimmerUI from "./ShimmerUI";

const RestaurantList = (props) => {
  const { restaurantList } = props;

  const RestaurantCardWithOffers = rescardWithLabel(RestaurantCard);

  return restaurantList?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-wrap gap-3 mx-12">
      {restaurantList?.map((restaurant) => (
        <Link
          to={"/restaurants/" + restaurant.info.id}
          key={restaurant.info.id}
        >
          {restaurant.info.aggregatedDiscountInfoV3 ? (
            <RestaurantCardWithOffers restaurantList={restaurant} />
          ) : (
            <RestaurantCard restaurantList={restaurant} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
