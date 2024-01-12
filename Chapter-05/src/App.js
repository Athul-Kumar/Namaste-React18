import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import resDataList from "./utils/mockData";



const AppLayout = ()=>{

    return (
      <div className="Applayout">
        <HeaderComponent />
        <BodyComponent resDataList={resDataList}/>
      </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);