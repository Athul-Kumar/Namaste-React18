
import { RES_URL } from "../utils/constants";
const RestaurantCard = (props) =>{

  const {restaurantList} = props;
   

   const {
     name,
     cloudinaryImageId,
     avgRating,
     costForTwo,
     cuisines,
     locality,
     areaName,
     sla
   } = restaurantList?.info;
    return (
      <div className="res-card">
        <img src={RES_URL + cloudinaryImageId} alt="" />
        <div className="card-items">
          <h3>{name}</h3>
          <h3>{costForTwo}</h3>
          <h4>{avgRating} ⭐</h4>
          <h4>{sla.deliveryTime} mins</h4>
          <h4>{cuisines.join(",")}</h4>
          <h5>{areaName}</h5>
          <h6>{locality}</h6>
        </div>
      </div>
    );
}

export default RestaurantCard;