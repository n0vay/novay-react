import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
        {cartItems.length !== 0 && (
          <button
            className="m-2 p-2 bg-black text-white rounded-md"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 && (
          <h1>Cart is Empty : Add items to Continue</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;