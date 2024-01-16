import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resDataList } = props;
  const {
    name,
    cloudinaryImageId,
    locality,
    avgRating,
    areaName,
    cuisines,
    costForTwo,
  } = resDataList?.info;

  const { deliveryTime } = resDataList?.info?.sla;
  return (
    <div className="res-card">
      <img className="resCard-img" src={IMG_URL + cloudinaryImageId} alt="" />
      <h1>{costForTwo}</h1>
      <h3>{name}</h3>
      <h3>{avgRating}⭐</h3>
      <h3>{areaName}</h3>
      <h3>{deliveryTime} Minutes Left</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{locality}</h5>
    </div>
  );
};

export default RestaurantCard;
