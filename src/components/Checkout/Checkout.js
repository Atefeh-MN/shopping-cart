import { Link } from "react-router-dom";
import { useAuth } from "../../context/provider/AuthProvider";
import { useCart } from "../../context/provider/CartProvider";
import './checkout.css'

const Checkout = () => {
    const auth = useAuth();
    const { cart, total } = useCart();
    const originalTotalPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) : 0;
    if (!cart.length) {
        return (<main >
            <Link to='/'>Go to shopping</Link>
        </main>)
    }
    return (<main className="container" >
        <section className="checkoutContainer">
        {auth ? <>
            <section className="userdata">
                <p>
                    Name: {auth.name}
                </p>
                <p>
                    Email: {auth.email}
                </p>
                <p>
                    phonenumber: {auth.phoneNumber}
                </p>
         
        </section>
            <section className="summry">
            
                <h1>Summry</h1>
                {cart.length && cart.map(c => <div className="summryItem">
                    <p>{c.name}*{c.quantity} :{c.quantity}*{c.price}</p>
                </div>)}
                   
                    <div className="summryItem net">
                        <p>Promo</p>
                        <p>{originalTotalPrice - total} $</p>
                    </div>
                    <div className="summryItem">
                        <p>Order Total</p>
                        <p>{total} $</p>
                    </div>
                     <button className="btn primry" style={{ marginTop: '30px', width: '100%' }}> Payment </button>
            </section>
            </> : <p> please login!</p>}
        </section>
    </main> );
}
 
export default Checkout;