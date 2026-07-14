import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { useSelector } from "react-redux";

function CartOverview() {
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);

  if (!totalQuantity) return null;

  return (
    <footer className="fixed bottom-0 left-0 z-40 w-full border-t border-beige bg-white/90 px-4 py-4 shadow-[0_-4px_20px_-4px_rgba(43,33,24,0.08)] backdrop-blur sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <p className="flex items-baseline gap-3 font-heading">
          {/* <span className="font-semibold text-charcoal"> pizzas</span> */}
          <span className="crust-badge">
            {totalQuantity} pizzas ${totalPrice}
          </span>
        </p>
        <Link to="/cart" className="btn-primary !px-5 !py-2 text-xs sm:text-sm">
          Open cart &rarr;
        </Link>
      </div>
    </footer>
  );
}

export default CartOverview;
