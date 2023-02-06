import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./foodItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const removeCartItems = () =>{
        dispatch(clearCart());
    }

    return(
        <div>
            <h1 className='font-bold text-2xl'>
                Cart items {cartItems.length}
            </h1>

            <button className="p-2 font-bold text-2xl bg-green-100" onClick={removeCartItems}> clear cart </button>

            <div className="flex flex-wrap">
            {cartItems.map((item) =>  <FoodItemCard key={item.id} {...item} />)}
            </div>
        </div>
     
    )
}

export default Cart;