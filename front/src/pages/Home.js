import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container" >
      <div style={{textAlign: 'center'}}>
        <br />
        <CategoryMenu />
        <br />

      </div>

      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
