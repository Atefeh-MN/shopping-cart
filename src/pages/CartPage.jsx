import { useCart, useCartActions } from "../context/provider/CartProvider";
import './cartPage.css'
import {MdOutlineAdd,MdOutlineRemove } from "react-icons/md"
const CartPage = () => {
    const { cart,total } = useCart();
    const dispatch = useCartActions();
    const incHandler = (cartItem) => {
        dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    };
    const decHandler = (cartItem) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
    }
    if (!cart.length) {
        return(
        <main className="container">
            <h2> Cart is empty!!</h2>
        </main>
        )}
    return ( 
        <main className="container">
            <section className="containerCart">
             <section className="title">
                    <h1>Shopping Cart</h1>
                    <h2>{cart.length}Items</h2>    
                </section> 
            <section className='cartCenter'>

                    <section className="cartItemList">
                        {/* <section className="titelItem">
                            <h2>picture</h2>
                            <h2>Product Name</h2>
                            <h2>Quantity</h2>
                            <h2>Price</h2>
                            <h2>Total price</h2>
                        </section>  */}
                {cart.map((item) =>
                (<div className="cartItem" key={item.id}>
                    <div className="itemImage"><img src={item.image} alt={item.name} /></div>
                    <div>
                    <h2>{item.name}</h2>
                    </div>
                    <div>
                        <button onClick={()=>decHandler(item)} ><MdOutlineRemove/></button>
                        <button >{ item.quantity}</button>
                        <button onClick={()=>incHandler(item)} ><MdOutlineAdd/></button>
                        
                    </div>
                    <div>
                        <p>$ {item.offPrice}</p>
                    </div>
                    <div>
                        <h2>$ {item.offPrice * item.quantity}</h2>
                    </div>
                    
                 </div>))}
            </section>
                   <CartSummry total={total} cart={cart}/>
                </section>
                </section>
        </main>
     );
}
 
export default CartPage;
 
const CartSummry = ({ total, cart }) => {

    const originalTotalPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.price * curr.quantity , 0) : 0;
    
    return( <section className="cartSummry">
                <h1>Cart Summry</h1>
                <div className="summryItem">
                <p> cart Total</p>
                <p>{originalTotalPrice} $</p>
        </div>
        <div className="summryItem">
           <p>cart discount</p>
           <p>{originalTotalPrice - total} $</p> 
        </div>
        <div className="summryItem net">
            <p> net price</p>
                <p>{total} $</p>
        </div>
        <button className="btn primry">Continue</button>
            </section>)
}