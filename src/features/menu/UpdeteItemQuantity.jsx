import { useDispatch, useSelector } from "react-redux";
// import Button from '../../ui/Button';
import {
  decItemQuantity,
  getCurrentQuantityById,
  incItemQuantity,
} from "../cart/cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2 rounded-full bg-beige/50 px-2 py-1 md:gap-3">
      <button
        type="round"
        onClick={() => dispatch(decItemQuantity(pizzaId))}
        className="qty-btn"
      >
        -
      </button>
      <span className="w-4 text-center font-heading text-sm font-bold text-charcoal">
        {currentQuantity}
      </span>
      <button
        type="round"
        onClick={() => dispatch(incItemQuantity(pizzaId))}
        className="qty-btn"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
