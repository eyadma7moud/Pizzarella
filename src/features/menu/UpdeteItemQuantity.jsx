import { useDispatch } from 'react-redux';
// import Button from '../../ui/Button';
import { decItemQuantity, incItemQuantity } from '../cart/cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <button
        type="round"
        onClick={() => dispatch(decItemQuantity(pizzaId))}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        type="round"
        onClick={() => dispatch(incItemQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
