import { NavLink } from 'react-router-dom'
import './Navigation.css';
import { RiShoppingCartLine,RiAccountCircleLine} from "react-icons/ri"
import { useCart } from '../../context/provider/CartProvider';

const items = [{ name: 'Home', to: '/' }, { name: 'Shop', to: '/' }, { name:'blog',to:'/blog'} ];

const Navigation = () => {
    const { cart } = useCart();
    return ( 
        <header className='mainNav'>
            <nav>
                <ul>
                    {items.map(item => <li key={item.to} >
                        <NavLink to={item.to} className={(navData)=>navData.isActive?'activeLink':""}>{item.name}</NavLink>
                    </li>)}
                </ul>

                <ul className='Bar'>
                     <li  key='user'>
                        <NavLink to='/user' className={(navData) => navData.isActive ? "activeBar": ""}>
                         <RiAccountCircleLine className='user'/>
                        </NavLink>
                    </li>
                 <li key='/cart' >
                        <NavLink to='/cart' className={(navData) => navData.isActive ? 'activeBar': ""}>
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