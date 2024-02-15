import {useState} from "react";
import CategoryItems from "./CategoryItems";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {

  return (
    <div>
      <div className="flex justify-between p-4 ">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="cursor-pointer" onClick={() => {
            setShowIndex()
                   
        }}>
          🔽
        </span>
      </div>
      <div>{showItems &&<CategoryItems itemData={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
