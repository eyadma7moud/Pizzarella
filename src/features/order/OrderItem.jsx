/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3 shadow-sm">
      <div className="flex flex-1 items-center justify-between gap-3">
        <p className="font-medium text-charcoal">
          <span className="font-heading font-bold text-tomato">
            {quantity}&times;
          </span>{" "}
          {name}
        </p>
        <p className="crust-badge">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
