import React from "react";
import ReactDOM from "react-dom/client";
import resDataList from "./utils/mockData";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";




const AppLayout = ()=>{

    return (
      <div className="Applayout">
        <HeaderComponent />
        <BodyComponent resDataList = {resDataList}/>
      </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);