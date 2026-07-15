import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-beige bg-crust/90 px-4 py-4 backdrop-blur sm:px-8">
      {" "}
      <Link
        to="/"
        className="font-heading text-2xl font-extrabold tracking-tight text-marinara sm:text-3xl"
      >
        Pizzarella🍕
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
