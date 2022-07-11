import Buttons from "../Buttons/Buttons";
import { Link } from "react-router-dom";

export default function BasketItem(props) {
  return (
    <div className="basket_item">
      <Link className="basket_link" to={`/${props.id}`}>
        <div className="basket_img">
          <img src={props.image} alt="basket_item" />
        </div>
        <div className="basket_content">
          <span className="basket_title">{props.title}</span>
          <span>{(props.price * props.count).toLocaleString()} تومان</span>
        </div>
      </Link>
      <div className="basket_counter">
        <Buttons {...props} />
      </div>
    </div>
  );
}
