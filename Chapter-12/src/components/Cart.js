import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems"
import { clearCart } from "../Redux/cartSlice";


const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{

        dispatch(clearCart())
    }

    return (
      <div className="text-center m-5 p-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}>
            Clear Cart
        </button>
            {cartItems.length ===0 && <h5>Add items to the cart now!</h5>}
          <CategoryItems itemData={cartItems} />
        </div>
      </div>
    );
}

export default Cart;