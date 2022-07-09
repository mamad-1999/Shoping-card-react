import React, { useContext } from "react";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import "./FavoritePage.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import FavoriteCard from "./FavoriteCard";

export default function FavoritePage() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);

  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>علاقه مندی ها</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            صفحه محصولات
          </Link>
        </div>
      </div>
      <div className="favorite-wrapper">
        {state.favorites.length > 0 ? (
          <>
            <div>
              <button
                onClick={() => dispath({ type: "REMOVE_ALL_FAVORITE" })}
                className="favorite_removeAll"
              >
                حذف همه
              </button>
            </div>
            <div className="favorite_container">
              {state.favorites.map((product) => (
                <FavoriteCard key={product.id} {...product} />
              ))}
            </div>
          </>
        ) : (
          <div className="favorite_empty">
            <img
              className="favorite_empty_img"
              src="images/empty_favorite.svg"
              alt=""
            />
            <span className="favorite_empty_title">علاقه مندی ها خالی است</span>
          </div>
        )}
      </div>
    </>
  );
}
