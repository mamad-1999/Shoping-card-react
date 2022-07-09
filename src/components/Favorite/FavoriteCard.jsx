import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductDispath } from "../Context/ContextProvider";

export default function FavoriteCard(props) {
  const { dispath } = useContext(ProductDispath);

  return (
    <div key={props.id} className="favorite_card">
      <Link to={`/${props.id}`}>
        <img className="favorite_img" src={props.image} alt="favorite_image" />
        <div className="favorite_content">
          <div className="favorite_title">
            <span>{props.title}</span>
          </div>
        </div>
      </Link>
      <button
        onClick={() => dispath({ type: "ADD_FAVORITE", payload: props.id })}
        className="favorite_button"
      >
        حذف
      </button>
    </div>
  );
}
