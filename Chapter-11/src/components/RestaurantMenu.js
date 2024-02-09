import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  let { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    sla,
    feeDetails,
    costForTwoMessage,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="Menu-container">
      <h1>{name}</h1>
      <h5>{cuisines.join(",")}</h5>
      <h5>
        {areaName} ,{sla.lastMileTravel}Km
      </h5>
      <h4>{avgRating}</h4>
      <h5>{totalRatingsString}</h5>

      <h6>{feeDetails.message}</h6>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwoMessage}</h4>

      <div className="item-container">
        {itemCards.map((items) => (
          <div key={items?.card?.info?.id}>
            <h4>{items?.card?.info?.name}</h4>
            <h5>Rs:{items?.card?.info?.price / 100}</h5>
            <h6>{items?.card?.info?.description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
