import { RES_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { restaurantList } = props;

  const { loggedInUser } = useContext(UserContext);

  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    areaName,
    sla,
  } = restaurantList?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200 bg-blue-500">
      <img className="rounded-lg" src={RES_URL + cloudinaryImageId} alt="" />
      <div className="card-items">
        <h3>{name}</h3>
        <h3>{costForTwo}</h3>
        <h4>{avgRating} ⭐</h4>
        <h4>{sla.deliveryTime} mins</h4>
        <h4>{cuisines.join(",")}</h4>
        <h5>{areaName}</h5>
        <h6>{locality}</h6>
        <h2>{loggedInUser}</h2>
      </div>
    </div>
  );
};

// Higher order component
export const rescardWithLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-zinc-800 text-zinc-50 absolute m-2 p-2 rounded-lg">
          Best Offers Available Now!
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
