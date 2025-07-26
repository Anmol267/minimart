import './Product.css'
import ProductCard from '../components/ProductCard'
import shirt from '../assets/shirt.webp'
import pant from '../assets/pant.jpg'
import shoe from '../assets/shoe.jpg'
import track from '../assets/track.jpg'
import sweater from '../assets/sweater.jpeg'
import track2 from '../assets/track2.jpg'
import { Link } from 'react-router-dom'


function Product() {
    return(
        <>
    <div className="card-container">
                <ProductCard
                    image = {pant}
                    title = {"Sleek Design Men's Pants with Elastic Waist"}
                    price = {"$699.99"}
                    btnName = {"Add to Cart"}
                    category = {"Fashion"}
                />
                <ProductCard
                    image = {sweater}
                    title = {"Men's Light Grey Sweater with Black Check Collared Shirt"}
                    price = {"$84.99"}
                    btnName = {"Add to Cart"}
                    category = {"Fashion"}
                />
                <ProductCard
                    image = {track2}
                    title = {"Mens Outfit Summer Top Pants Solid Color Pocket ON"}
                    price = {"$39.99"}
                    btnName = {"Add to Cart"}
                    category = {"Fashion"}
                />
    </div>
            <div className="card-container">
                <ProductCard
                    image = {track}
                    title = {"MoFiz Men's Tracksuit 2 Piece Sweatsuit Track Suit"}
                    price = {"$43.99"}
                    btnName = {"Add to Cart"}
                    category = {"Fashion"}
                />
                <ProductCard
                    image = {shoe}
                    title = {"Nike Air Max 270 (White/Bright Crimson/Pink Foam/Black) Size 7.5"}
                    price = {"$120.99"}
                    btnName = {"Add to Cart"}
                    category = {"Fashion"}
                />
                <ProductCard
                    image = {shirt}
                    title = {"Nepali T-Shirt with Swayambhu image"}
                    price = {"$10.99"}
                    btnName = {"Add to Cart"}
                    category = {"Fashion"}
                />
            </div>
            
<nav aria-label="Page navigation example">
    <ul className="pagination">
        <li className="page-item"><Link to="/product" className="page-link">Previous</Link></li>
        <li className="page-item"><Link to="/product" className="page-link">1</Link></li>
        <li className="page-item"><Link to="/fashion" className="page-link">2</Link></li>
        <li className="page-item"><Link to="/furniture" className="page-link">3</Link></li>
        <li className="page-item"><Link to="/furniture" className="page-link">Next</Link></li>
    </ul>
</nav>
        </>
    );
}

export default Product;
