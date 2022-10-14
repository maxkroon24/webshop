import { Outlet, Link } from "react-router-dom";
import {MdPersonPin} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
const Layout2 = () => {
  return (
    <>
      <nav className="nav" style={{backgroundColor: 'transparent'}}>
        <li className="logo"><Link to="/" className="a1">Creative</Link></li>
        <ul className="links">
          <li className="link"><Link to="/about" className="a">Why creative cases?</Link></li>
          <li className="link"><Link to="/products" className="a">Products</Link></li>
          <li className="link"><Link to="/contact" className="a">Contact</Link></li>
          <MdPersonPin size={50} color="white" cursor='pointer'/>
          <FaShoppingCart size={40} color="white" style={{marginLeft: '4rem'}} cursor='pointer'/>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout2;