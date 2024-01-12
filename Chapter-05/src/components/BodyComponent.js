import RestaurantList from "./RestaurantList";

const BodyComponent = (props) => {
  const { resDataList } = props;

  return (
    <div className="Body-Container">
      <h1>Search Functionality Component</h1>
      <RestaurantList resDataList={resDataList} />
    </div>
  );
};


export default BodyComponent;