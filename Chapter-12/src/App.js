import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import ShimmerUI from "./components/ShimmerUI";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerUI from "./components/ShimmerUI";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux';
import cartStore from "./Redux/cartStore"


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  // authentication code dummy
  const [userName, setUserName] = useState();

  useEffect(() => {
    // make an API call sent userName
    const data = {
      name: "Athul Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={cartStore}>
      <div>
        <UserContext.Provider value={{ loggedInUser: "Amar" }}>
          <HeaderComponent />
        </UserContext.Provider>
        <Outlet />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
