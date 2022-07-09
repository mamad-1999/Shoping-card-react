import React, { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ProductContext, ProductDispath } from "../../Context/ContextProvider";

export default function Interest(props) {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  const isAddFavorite = state.allProducts.find(
    (product) => product.id === props.id
  );
  return (
    <div
      onClick={() => dispath({ type: "ADD_FAVORITE", payload: props.id })}
      className="Interest"
    >
      {isAddFavorite.isInterest ? (
        <BsHeartFill className="heart_Fill" />
      ) : (
        <BsHeart className="heart" />
      )}
    </div>
  );
}
