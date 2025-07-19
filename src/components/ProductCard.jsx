import './ProductCard.css'
function ProductCard({image, title, description, price, onAddToCart, category}){
    return(
        <>
         <div className="card" style={{ width: "26rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">{price}</p>
                <p className="card-text">{description}</p>
                <button className="addtocartButton" onClick={onAddToCart}>Add to Cart</button>
             </div>
         </div>
        </>
    );
}
export default ProductCard;