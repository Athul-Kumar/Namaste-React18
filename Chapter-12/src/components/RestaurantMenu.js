import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerUI from "./ShimmerUI";
import { useState } from "react";

const RestaurantMenu = () => {
  let { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

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
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className=" w-6/12 bg-teal-300 mx-auto my-4 flex justify-between rounded">
        <div className="p-4">
          <h1 className="font-bold text-2xl mb-2">{name}</h1>
          <h5 className="font-thin text-sm">{cuisines.join(",")}</h5>
          <h5 className="font-thin text-sm mb-4">
            {areaName} ,{sla.lastMileTravel}Km
          </h5>
          <h6 className="font-thin text-sm border-b border-gray-950 my-2">
            Far {feeDetails.message}
          </h6>
          <div className="flex gap-2">
            <h4 className="font-bold">{sla.slaString}</h4>
            <h4 className="font-bold">{costForTwoMessage}</h4>
          </div>
        </div>
        <div className="border-2 rounded border-gray-400 h-12 text-center mt-12 mr-4">
          <h4>{avgRating}</h4>
          <h5>{totalRatingsString}</h5>
        </div>
      </div>
      <div className="w-6/12 bg-sky-200 mx-auto my-4  rounded">
        {categories.map((category, index) => (
          //controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
