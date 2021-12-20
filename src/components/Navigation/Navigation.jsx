import { NavLink } from 'react-router-dom'
import './Navigation.css';
import { RiShoppingCartLine,RiAccountCircleLine} from "react-icons/ri"
import { useCart } from '../../context/provider/CartProvider';
import { useAuth } from '../../context/provider/AuthProvider';

const items = [{ name: 'Home', to: '/' }, { name: 'Shop', to: '/shop' }, { name:'blog',to:'/blog'} ];

const Navigation = () => {
    const userData = useAuth();
    const { cart } = useCart();
    return ( 
        <header className='mainNav'>
            <nav>
                <ul>
                    {items.map(item => <li key={item.to} >
                        <NavLink to={item.to} activeClassName='activeLink'>{item.name}</NavLink>
                    </li>)}
                </ul>

                <ul className='Bar'>
                     <li  key='user'>
                        <NavLink to={userData ? '/profile' : '/login'} activeClassName='activeBar'>
                          {userData ? <RiAccountCircleLine className='user' />: 'LogIn'} 
                        
                        </NavLink>
                    </li>
                 <li key='/cart' >
                        <NavLink to='/cart' activeClassName='activeBar'>
                            <RiShoppingCartLine />
                            <span>{cart.length}</span>
                        
                        </NavLink>
                    </li>  
                   
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;