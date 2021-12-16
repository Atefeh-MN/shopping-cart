import { NavLink } from 'react-router-dom'
import './Navigation.css'
const items=[{name:'Home',to:'/'},{name:'Cart',to:'/cart'}]

const Navigation = () => {
    return ( 
        <header className='mainNav'>
            <nav>
                <ul>
                    {items.map(item => <li key={item.to} >
                        <NavLink to={item.to} className={(navData)=>navData.isActive?'activeLink':""}>{item.name}</NavLink>
                    </li>)}
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;