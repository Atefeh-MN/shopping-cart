import { checkIncart } from '../common/checkIn';
import { useCart, useCartActions } from '../context/provider/CartProvider';
import * as data from '../data';
import { toast } from 'react-toastify';
const HomePage = () => {
    const { cart } = useCart();
    const dispatch = useCartActions();
    const addCartHandler = (product) => {
        toast.success(`${product.name} added to cart!`)
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    return (
        <main className='container'>
            <section  className='productList'>
                {data.products.map((product) =>{return (
                    
                        <section className='product' key={product.id}>
                        <div className='productImg'>
                            <img src={product.image} alt={product.name}/>
                            </div>
                            <div className='productDesc'>
                            <p>{product.name}</p>
                            <p>$ {product.price}</p>
                            <button onClick={() => addCartHandler(product)} className='btn primry'>{ checkIncart(cart,product)?'In cart':'Add to cart'}</button>
                        </div>
                        </section>
                )
                })}
            </section>
        </main>
     );
}
 
export default HomePage;