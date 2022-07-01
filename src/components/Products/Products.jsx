import React, { useContext } from "react";
import "./Products.css";
import Filter from "./Filter/Filter";
import { FilterContext } from "../Context/ContextFilter";
import Card from "./Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";

export default function Products() {
  const { state } = useContext(FilterContext);

  const productsList = state.filteredItems.filter((product) => {
    return product.title.includes(state.searchKey) || !state.searchKey;
  });
  return (
    <>
      <Filter />
      <div className="search_Container">
        <div className="search_box">
          <SearchBar />
        </div>
      </div>
      <div className="product_container">
        {productsList.length > 0 ? (
          productsList.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <div className="not_products">
            <img
              className="products_empty_img"
              src="images/bare-tree.png"
              alt=""
            />
            <span className="products_empty_title">
              با عرض پوزش هیچ محصولی با جستجوی شما مطابقت نداشت!
            </span>
            <span className="products_empty_guide">
              کلمه کلیدی دیگری را وارد کرده و امتحان کنید
            </span>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
