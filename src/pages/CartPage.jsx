import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css"
import emptycart from "../assets/emptycart.avif"
function CartPage(){
    const {cart} = useContext(CartContext)
    return(
        <div>
            <h3>Shopping Cart</h3>   
            {
                cart.length === 0 ?(<img className="mx-auto d-block" src={emptycart}/>):(
                    <ul>
                        {cart.map((item, key)=>(
                            <li key={key}>
                                <div className="card" style={{ width: "26rem" }}>
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.category}</p>
                                        <p className="card-text">{item.price}</p>
                                        <p className="card-text">{item.description}</p>
                                        <button className="btn bg-danger text-white">Remove From Cart</button>
                                        <button className="btn btn-primary">Checkout</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}
export default CartPage;