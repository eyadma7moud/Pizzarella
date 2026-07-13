import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:max-w-xs">
      <input
        placeholder="🔍 Enter order number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full border-2 border-beige bg-white px-4 py-2 text-sm text-charcoal placeholder:text-charcoal/40 shadow-sm transition-colors focus:border-tomato"
      />
    </form>
  );
}

export default SearchOrder;
