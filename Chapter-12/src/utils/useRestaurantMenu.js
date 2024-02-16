import { useEffect, useState } from "react";
import { RESMENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const menuData = await fetch(RESMENU_API + resId);
    const json = await menuData.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
