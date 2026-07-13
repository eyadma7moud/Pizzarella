// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  const formErrors = useActionData();

  return (
    <div className="mx-auto max-w-xl">
      <h2 className="font-['Baloo_2'] text-2xl font-bold text-[#2B2118] sm:text-3xl">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="mt-8 flex flex-col gap-5">
        <div>
          <label className="mb-1.5 block font-['Baloo_2'] text-sm font-semibold text-[#2B2118]/80">
            First Name
          </label>
          <input
            type="text"
            name="customer"
            required
            className="w-full rounded-2xl border-2 border-[#F3E1C4] bg-white px-4 py-3 text-[#2B2118]
              placeholder:text-[#2B2118]/40 shadow-sm outline-none transition-colors duration-150
              focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/30"
          />
        </div>

        <div>
          <label className="mb-1.5 block font-['Baloo_2'] text-sm font-semibold text-[#2B2118]/80">
            Phone number
          </label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="w-full rounded-2xl border-2 border-[#F3E1C4] bg-white px-4 py-3 text-[#2B2118]
                placeholder:text-[#2B2118]/40 shadow-sm outline-none transition-colors duration-150
                focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/30"
            />
          </div>
          {formErrors?.phone && (
            <p className="mt-1.5 text-sm font-semibold text-[#E63946]">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block font-['Baloo_2'] text-sm font-semibold text-[#2B2118]/80">
            Address
          </label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="w-full rounded-2xl border-2 border-[#F3E1C4] bg-white px-4 py-3 text-[#2B2118]
                placeholder:text-[#2B2118]/40 shadow-sm outline-none transition-colors duration-150
                focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/30"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 rounded-md border-2 border-[#F3E1C4] text-[#E63946] focus:ring-[#E63946]"
          />
          <label htmlFor="priority" className="font-medium text-[#2B2118]">
            Want to give your order priority?
          </label>
        </div>

        <div className="mt-2">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E63946] px-6 py-3
              font-['Baloo_2'] text-sm font-semibold tracking-wide text-[#FFF8ED] shadow-[0_10px_30px_-10px_rgba(166,30,34,0.35)]
              transition-all duration-200 ease-out
              hover:bg-[#A61E22] hover:-translate-y-0.5 hover:shadow-lg
              active:translate-y-0 active:shadow-sm
              disabled:cursor-not-allowed disabled:bg-[#E63946]/50 disabled:translate-y-0 disabled:shadow-none
              sm:w-auto"
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = "Invalid phone number";
  console.log(errors);
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;