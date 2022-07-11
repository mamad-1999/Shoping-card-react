import React, { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import "./Buttons.css";

export default function Buttons(props) {
  const { dispath } = useContext(ProductDispath);
  const { state } = useContext(ProductContext);
  const { id } = props;
  const countItem = state.basket.find((product) => product.id === id);
  return (
    <div className="basket_buttons">
      <span
        onClick={() => dispath({ type: "INCREASE", payload: id })}
        className="basket_plus"
      >
        <AiOutlinePlus />
      </span>
      <span className="counter_number">{props.count}</span>
      {countItem.count === 1 ? (
        <span
          onClick={() => dispath({ type: "REMOVE_FROM_BASKET", payload: id })}
          className="basket_minus"
        >
          <RiDeleteBinLine />
        </span>
      ) : (
        <span
          onClick={() => dispath({ type: "DECREASE", payload: id })}
          className="basket_minus"
        >
          <AiOutlineMinus />
        </span>
      )}
    </div>
  );
}
