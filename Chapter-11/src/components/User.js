import { useEffect, useState } from "react";
import { USERINFO_API } from "../utils/constants";

const User = () => {
  const [userInfo, setUserInfo] = useState({
    name: "dummy name",
    location: "dummy location",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const Data = await fetch(USERINFO_API);
      const json = await Data.json();

      setUserInfo(json);
    } catch (error) {
      setError(error.message || "An error occured");
    }
  };

  //   useEffect(()=>{

  //     const timer = setInterval(()=>{
  //         console.log("Timer started");
  //     },1000)
  //     console.log("UseEffect set");

  //     return ()=>{

  //         clearInterval(timer);
  //         // console.log("useEffect return");

  //     }
  //   },[])

  const { name, location } = userInfo;
  return (
    <div className="us-container">
      <h1>Function Based User Component</h1>
      <ol>
        <li>Name:{name}</li>
        <li>Location:{location}</li>
      </ol>
    </div>
  );
};

export default User;
