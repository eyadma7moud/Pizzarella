import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return;
  return (
    <p className="rounded-full bg-cheese/20 px-3 py-1 font-heading text-sm font-bold text-marinara sm:text-base">
      {username}
    </p>
  );
  // <div className="hidden text-sm font-semibold md:block">Jonas</div>;
}

export default Username;
