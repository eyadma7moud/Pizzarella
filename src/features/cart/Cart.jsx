import { Link } from "react-router-dom";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  // const cart = fakeCart;

  return (
    <div className="animate-fadeIn">
      <Link
        to="/menu"
        className="text-sm font-semibold text-tomato hover:text-marinara"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-3 font-heading text-2xl font-bold text-charcoal sm:text-3xl">
        Your cart, %NAME%
      </h2>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link to="/order/new" className="btn-primary">
          Order pizzas
        </Link>
        <button className="btn-secondary">Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
