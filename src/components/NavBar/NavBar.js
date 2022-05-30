import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="NavBar" >
          <Link to='/'>
            <h3>ROPA SHOP</h3>
          </Link>
          <div className="Categories">
              <NavLink to='/category/remeras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>remeras</NavLink>
              <NavLink to='/category/buzos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>buzos</NavLink>
              <NavLink to='/category/camperas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>camperas</NavLink>
          </div>
          <CartWidget />
      </nav>
  )
}

export default NavBar