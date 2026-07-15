import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-beige bg-crust/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          to="/"
          className="text-center font-heading text-2xl font-extrabold tracking-tight text-marinara sm:text-left sm:text-3xl"
        >
          Pizzarella<span className="ml-1">🍕</span>
        </Link>

        <div className="w-full sm:max-w-sm">
          <SearchOrder />
        </div>

        <div className="flex justify-center sm:justify-end">
          <Username />
        </div>
      </div>
    </header>
  );
}

export default Header;