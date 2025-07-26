import './Product.css'
import ProductCard from '../components/ProductCard'
import chair from '../assets/chair.webp'
import bed from '../assets/bed.jpg'
import sofa from '../assets/sofa.jpg'
import gamingchair from '../assets/gamingchair.jpg'
import closet from '../assets/closet.jpg'
import table from '../assets/table.webp'
import { Link } from 'react-router-dom'

function Furniture() {
    return(
        <>
    <div className="card-container">
                <ProductCard
                    image = {table}
                    title = {"Square Coffee Table with 4 Drawers and Storage Side Table for Living Room"}
                    price = {"$499.99"}
                    btnName = {"Add to Cart"}
                    category = {"Furniture"}
                />
                <ProductCard
                    image = {bed}
                    title = {"LINSY Queen Bed Frame with Ergonomic Headboard, Platform Metal Bed Frame with RGB Lights, Outlets & Charger"}
                    price = {"$199.99"}
                    btnName = {"Add to Cart"}
                    category = {"Furniture"}
                />
                <ProductCard
                    image = {sofa}
                    title = {"Modern Boucle Sofa Couch with Deep Seat for Living Room,Tufted 3 Seat Sofas Couches,Comfy Sherpa Fabric 3 Seater Cloud"}
                    price = {"$589.99"}
                    btnName = {"Add to Cart"}
                    category = {"Furniture"}
                />
    </div>
            <div className="card-container">
                <ProductCard
                    image = {gamingchair}
                    title = {"Gaming Chair, Backrest and Seat Height Adjustable Swivel Recliner Racing Office Computer Ergonomic Video Game Chair"}
                    price = {"$79.99"}
                    btnName = {"Add to Cart"}
                    category = {"Furniture"}
                />
                <ProductCard
                    image = {closet}
                    title = {"Panana 3 Door Armoires Wardrobe Closet with Clothes Hanging Rail, 6 Storage Shelves Cupboard"}
                    price = {"$249.99"}
                    btnName = {"Add to Cart"}
                    category = {"Furniture"}
                />
                <ProductCard
                    image = {chair}
                    title = {"Renata slate Lounge Chair with black steel legs and top grain leather"}
                    price = {"$699.99"}
                    btnName = {"Add to Cart"}
                    category = {"Furniture"}
                />
            </div>
            
<nav aria-label="Page navigation example">
    <ul className="pagination">
        <li className="page-item"><Link to="/fashion" className="page-link">Previous</Link></li>
        <li className="page-item"><Link to="/product" className="page-link">1</Link></li>
        <li className="page-item"><Link to="/fashion" className="page-link">2</Link></li>
        <li className="page-item"><Link to="/fashion" className="page-link">3</Link></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
    </ul>
</nav>
        </>
    );
}

export default Furniture;
