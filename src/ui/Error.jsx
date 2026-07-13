import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-3xl bg-white px-8 py-12 text-center shadow-soft animate-fadeIn">
      <span className="text-5xl">😢</span>
      <h1 className="font-heading text-2xl font-bold text-marinara">
        Something went wrong
      </h1>
      <p className="text-charcoal/70">{error.data || error.message}</p>
      <button onClick={() => navigate(-1)} className="btn-secondary mt-2">
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
