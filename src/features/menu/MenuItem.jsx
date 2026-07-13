/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li
      className={`group flex gap-4 overflow-hidden rounded-3xl bg-white p-3 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-warm sm:flex-col sm:p-4 ${
        soldOut ? "opacity-60 grayscale" : ""
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-24 w-24 shrink-0 rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 sm:h-40 sm:w-full"
      />
      <div className="flex flex-1 flex-col justify-between gap-1 sm:gap-2">
        <div>
          <p className="font-heading text-lg font-bold text-charcoal">{name}</p>
          <p className="text-sm text-charcoal/60">{ingredients.join(", ")}</p>
        </div>
        <div>
          {!soldOut ? (
            <p className="crust-badge">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="inline-flex rounded-full bg-charcoal/10 px-3 py-1 font-heading text-sm font-semibold uppercase tracking-wide text-charcoal/50">
              Sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
