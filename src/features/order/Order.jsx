// Test ID: IIDSAT
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    // id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6 animate-fadeIn">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-5 shadow-soft">
        <h2 className="font-heading text-lg font-bold text-charcoal">Status</h2>
        <div className="flex flex-wrap items-center gap-2">
          {priority && (
            <span className="rounded-full bg-tomato/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-tomato">
              Priority
            </span>
          )}
          <span className="rounded-full bg-basil/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-basil">
            {status} order
          </span>
        </div>
      </div>

      <div className="rounded-2xl bg-beige/40 p-5">
        <p className="font-medium text-charcoal">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="mt-1 text-sm text-charcoal/60">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul>
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-soft">
        <p className="flex justify-between text-charcoal/80">
          <span>Price pizza</span> <span>{formatCurrency(orderPrice)}</span>
        </p>
        {priority && (
          <p className="flex justify-between text-charcoal/80">
            <span>Price priority</span>{" "}
            <span>{formatCurrency(priorityPrice)}</span>
          </p>
        )}
        <p className="mt-2 flex justify-between border-t border-beige pt-2 font-heading font-bold text-marinara">
          <span>To pay on delivery</span>
          <span>{formatCurrency(orderPrice + priorityPrice)}</span>
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
