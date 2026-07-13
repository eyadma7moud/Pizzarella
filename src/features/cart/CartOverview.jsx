import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="flex items-baseline gap-3 font-heading">
        <span className="font-semibold text-charcoal">23 pizzas</span>
        <span className="crust-badge">$23.45</span>
      </p>
      <Link to="/cart" className="btn-primary !px-5 !py-2 text-xs sm:text-sm">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
