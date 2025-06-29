
import logo from '../assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import './Navbar.css'
function Navbar(){

    return(
  <nav class="navbar">
  <div class="container">
    <a class="navbar-brand" href="#">
      {/* <GiShoppingBag color="white"/>
      <span class = "minimart-text">Minimart</span> */}
      <img src = {logo} height = "30" width="150"/>
    </a>
    <ul class="navbar-link">
      <li>
        <a href="" class = "link">Home</a>
      </li>
      <li>
         <a href="" class = "link">Product</a>
      </li>
      <li>
         <a href="" class = "link">Contacts</a>
      </li>
    </ul>
    
    <input type="text" placeholder = "Search" class = "searchbar"/>
    <button><FiSearch /></button>
    <span class = "cart">
    <CiShoppingCart size = {30} class = "cart-button" color="white"/>  My Cart
    </span>
  </div>
</nav>
    );
}
export default Navbar;