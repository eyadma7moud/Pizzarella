import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between gap-4 mt-2 rounded-2xl bg-white px-4 py-3 shadow-sm">
      <p className="font-medium text-charcoal">
        <span className="mr-1 font-heading font-bold text-tomato">
          {quantity}&times;
        </span>{" "}
        {name}
      </p>

      <div className="flex justify-between gap-4">
        <p className="crust-badge">{formatCurrency(totalPrice)}</p>
        <button
          onClick={() => {
            dispatch(deleteItem(pizzaId));
          }}
          className="btn-primary !px-5 !py-2 text-xs sm:text-sm"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
