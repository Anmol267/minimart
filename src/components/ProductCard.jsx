import { useContext } from 'react';
import './ProductCard.css'
import { CartContext } from '../context/CartContext';
function ProductCard({image, title, description, price, btnName, category}){
    const {addToCart} = useContext(CartContext)
    const handleCart = () =>{
        addToCart({image, title, description, price, btnName, category})
    }
    return(
        <>
         <div className="card" style={{ width: "26rem" }}>
            <img src={image} className="card-img-top mx-auto d-block" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">{price}</p>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary" onClick={handleCart}>{btnName}</button>
             </div>
         </div>
        </>
    );
}
export default ProductCard;