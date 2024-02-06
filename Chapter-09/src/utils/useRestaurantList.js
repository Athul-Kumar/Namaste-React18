// import { useEffect, useState } from "react"
// import { RESLIST_API } from "./constants";

// const useRestaurantList = () =>{
//     const [restDatas, setRestDatas] = useState(null);
 
//     useEffect(()=>{
        
//        fetchRestlistData();
//     },[]);

//     const fetchRestlistData = async()=>{
//         const Data = await fetch(RESLIST_API);
//         const json = await Data.json();
//         setRestDatas(json);
      
//     }

//     return restDatas
    
// }


// export default useRestaurantList;