import React from "react";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/slices/authSlice";
import BottomTabNavigator from "./TabNavigator";

const AppRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = true;

  return (
    <>
      {/* Conditional stack navigator rendering based on login state */}

      {/* {isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />} */}
      <BottomTabNavigator />
    </>
  );
};

export default AppRoute;
