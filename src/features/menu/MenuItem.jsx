/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
import { useState } from "react";
import UpdateItemQuantity from "./UpdeteItemQuantity";

function MenuItem({ pizza }) {
  const [clicked, setClicked] = useState(false);

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
    console.log(cart);
  }

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
        <p className="">{formatCurrency(unitPrice)}</p>
        <div>
          {!soldOut ? (
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setClicked(!clicked);
                  handleAddItem();
                }}
                className="btn-primary !px-5 !py-2 text-xs sm:text-sm"
              >
                {clicked ? "Delete" : "Add to cart"}
              </button>
              {clicked && (
                <UpdateItemQuantity pizzaId={id} currentQuantity={5} />
              )}
            </div>
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
