import React from "react";
import ReactDOM from "react-dom/client";


const LogoComponent=()=>{
  const imgURL = "https://images.unsplash.com/photo-1551150441-3f3828204ef0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const height = "50px"
  const width = "50px"
  return <img src={imgURL} height={height} width={width}/>;
} 

const Btn = <button>Search</button>;

const SearchBarComponent = ()=>{

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search term"
      />
      {Btn}
    </div>
  );

}

const UserIconComponent = ()=>{

  const UserIcon ="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const height = "50px";
   const width = "50px";
  return (
    <div className="user-icon">
      <img src={UserIcon} height={height} width={width} />
      <div className="initials">Athul</div>
    </div>
  );
}

const HeaderComponent = ()=>{

  return (
    <div className="Header">
      <LogoComponent />
      <SearchBarComponent />
      <UserIconComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
