// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";

function Home() {
  const username = useSelector((state) => state.user.username);
  
  return (
    <div className="flex flex-col items-center gap-6 py-10 text-center sm:py-10">
      <span className="rounded-full bg-basil/10 px-4 py-1 font-heading text-sm font-semibold text-basil">
        Fresh dough, daily 🌿
      </span>
      <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-tight text-charcoal sm:text-5xl">
        The best pizza.
        <br />
        <span className="text-tomato">Straight out of the oven</span>, straight
        to you.
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Link to="/menu" className="btn-primary mt-2">
          See the menu &rarr;
        </Link>
      )}
    </div>
  );
}

export default Home;
