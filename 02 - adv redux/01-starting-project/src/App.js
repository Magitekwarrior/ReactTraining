import React, { Fragment } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.uiReducer.isCartVisible);
  console.log("showCart", showCart);

  return (
    <Fragment>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
