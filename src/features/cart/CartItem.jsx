import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const {  name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between gap-4 mt-2 rounded-2xl bg-white px-4 py-3 shadow-sm">
      <p className="font-medium text-charcoal">
        <span className="mr-1 font-heading font-bold text-tomato">
          {quantity}&times;
        </span>{" "}
        {name}
      </p>
      <div className="crust-badge">{formatCurrency(totalPrice)}</div>
    </li>
  );
}

export default CartItem;
