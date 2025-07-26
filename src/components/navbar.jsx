import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import './Navbar.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
function Navbar(){
  const {cart} = useContext(CartContext)
    return(
  <nav className="navbar">
  <div className="container">
    <a className="navbar-brand" href="#">
      {/* <GiShoppingBag color="white"/>
      <span class = "minimart-text">Minimart</span> */}
      <img src = {logo} height = "30" width="150"/>
    </a>
    <ul className="navbar-link">
      <li>
        <Link to = "/" className="link">Home</Link>
      </li>
      <li >
         <Link to = "/product" className="link">Product</Link>
      </li>
      <li>
         <Link to = "/contact" className="link">Contact</Link>
      </li>
    </ul>
    
    <input type="text" placeholder = "Search" className = "searchbar"/>
    <button className='search-button'><FiSearch /></button>
    <Link to = "/cart" className="text-dark position-relative me-4">
    <CiShoppingCart size = {30} className = "cart-button" color="white"/>
    {cart.length>0 &&(
      <span className="position-absolute top-0 start-100 badge rounded-pill bg-danger translate middle">
        {cart.length}
      </span>
    )}
    </Link>
  </div>
</nav>
    );
}
export default Navbar;