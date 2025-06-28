import logo from "../assets/download.jpeg"
import { FaCartArrowDown } from "react-icons/fa6";
import './Navbar.css'
function Navbar(){

    return(
    <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="Bootstrap" width="30" height="24"/>
      <span>Minimart</span>
    </a>
    <ul class="navbar-link">
      <li>
        <a href="">Home</a>
      </li>
      <li>
         <a href="">Product</a>
      </li>
      <li>
         <a href="">Contacts</a>
      </li>
    </ul>
    <FaCartArrowDown size = {30}/>
  </div>
</nav>
    );
}
export default Navbar;