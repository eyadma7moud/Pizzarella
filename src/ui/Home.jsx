// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="relative flex flex-col items-center gap-6 overflow-hidden py-10 text-center sm:py-10">
      {/* Decorative background — purely visual, no interaction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,33,24,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          className="absolute -left-24 -top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(245,166,35,0.35)" }}
        />
        <div
          className="absolute -right-20 top-10 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(230,57,70,0.25)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(88,129,87,0.2)" }}
        />

        <span className="absolute left-[8%] top-[15%] rotate-[-12deg] text-4xl opacity-20 sm:text-5xl">
          🍕
        </span>
        <span className="absolute right-[10%] top-[8%] rotate-[15deg] text-3xl opacity-20 sm:text-4xl">
          🍅
        </span>
        <span className="absolute bottom-[10%] left-[15%] rotate-[8deg] text-3xl opacity-15 sm:text-4xl">
          🧀
        </span>
        <span className="absolute bottom-[18%] right-[12%] rotate-[-10deg] text-4xl opacity-15 sm:text-5xl">
          🌿
        </span>
      </div>

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
