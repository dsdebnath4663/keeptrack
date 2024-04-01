import React from "react";
import { Provider } from "react-redux";
import ShoppingCart from "./ShoppingCart";
import UserProfile from "./UserProfile";
import store from "./store";

function EcommApp() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingCart />
        <UserProfile />
      </div>
    </Provider>
  );
}

export default EcommApp;
