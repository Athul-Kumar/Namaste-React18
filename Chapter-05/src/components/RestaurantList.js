
import resDataList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const RestaurantList =(props)=>{

  const {resDataList} = props;
    return (
      <div className="resListContainer">
        {resDataList.map((resData) => (
          <RestaurantCard key={resData?.info?.id} resDataList={resData} />
        ))}
      </div>
    );
}


export default RestaurantList;