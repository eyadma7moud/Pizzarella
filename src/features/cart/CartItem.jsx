import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import UpdateItemQuantity from "../menu/UpdeteItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  return (
    <li className="mt-2 flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <p className="font-medium text-charcoal">
        <span className="mr-1 font-heading font-bold text-tomato">
          {quantity}&times;
        </span>{" "}
        {name}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <p className="crust-badge">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId} />

        <button
          onClick={() => {
            dispatch(deleteItem(pizzaId));
          }}
          className="btn-danger-outline !px-4"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
