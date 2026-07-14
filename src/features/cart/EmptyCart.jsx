import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center animate-fadeIn">
      <Link
        to="/menu"
        className="self-start text-sm font-semibold text-tomato hover:text-marinara"
      >
        &larr; Back to menu
      </Link>
      <span className="text-5xl">🍕</span>
      <p className="max-w-xs text-charcoal/70">
        Your cart is empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
