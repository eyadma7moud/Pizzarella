import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
// import SearchOrder from "../features/order/SearchOrder";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout bg-crust">
      {/* <div className="flex flex-col gap-3 border-b border-beige/60 bg-beige/30 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <SearchOrder />
      </div> */}
      <Header />

      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8">
        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader />
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <footer className="sticky bottom-0 border-t border-beige bg-white/90 px-4 py-3 shadow-[0_-4px_20px_-4px_rgba(43,33,24,0.08)] backdrop-blur sm:px-8">
        <CartOverview />
      </footer>
    </div>
  );
}

export default AppLayout;