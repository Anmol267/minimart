import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import './Navbar.css'
function Navbar(){

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
    <span className = "cart">
    <CiShoppingCart size = {30} className = "cart-button" color="white"/>  My Cart
    </span>
  </div>
</nav>
    );
}
export default Navbar;