import './Product.css'
import ProductCard from '../components/ProductCard'
import laptop from '../assets/laptop.jpg'
import tv from '../assets/tv.jpg'
import phone from '../assets/phone.jpg'
import washingmachine from '../assets/washingmachine.webp'
import fridge from '../assets/fridge.webp'
import headphone from '../assets/headphone.jpg'
import { Link } from 'react-router-dom'
function Product() {
    return(
        <>
    <div className="card-container">
                <ProductCard
                    image = {laptop}
                    title = {"Apple 2025 MacBook Air 15-inch Laptop with M4 chip: 16GB RAM, 256GB SSD Storage"}
                    price = {"$1020.99"}
                    btnName = {"Add To Cart"}
                    category={"Electronics"}
                />
                <ProductCard
                    image = {tv}
                    title = {"Samsung 75-Inch Class QLED 4K Q80D Series Quantum HDR+ Smart TV w/Dolby Atmos, Alexa Built-in"}
                    price = {"$984.99"}
                    btnName = {"Add To Cart"}
                    category={"Electronics"}
                />
                <ProductCard
                    image = {phone}
                    title = {"Apple iPhone 16 Pro Max, US Version, 8GB RAM, 256GB Storage, Black Titanium"}
                    price = {"$1299.99"}
                    btnName = {"Add To Cart"}
                    category={"Electronics"}
                /> 
    </div>
            <div className="card-container">
                <ProductCard
                    image = {washingmachine}
                    title = {"Washing Machine 12 kg, Series 5, Front Load Washing, Space Saving Full-Automatic Washer"}
                    price = {"$699.99"}
                    btnName = {"Add To Cart"}
                    category={"Electronics"}
                />
                <ProductCard
                    image = {fridge}
                    title = {"GE 25.6-cu ft French Door Refrigerator with Ice Maker, Water and Ice Dispenser (Fingerprint-resistant Stainless Steel)"}
                    price = {"$1499.99"}
                    btnName = {"Add To Cart"}
                    category={"Electronics"}
                />
                <ProductCard
                    image = {headphone}
                    title = {"Apple AirPods Max Wireless Over-Ear Headphones, Pro-Level Active Noise Cancellation, Personalized Spatial Audio"}
                    price = {"$499.99"}
                    btnName = {"Add To Cart"}
                    category={"Electronics"}
                />
            </div>
            
    <nav aria-label="Page navigation example">
    <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><Link to="/product" className="page-link">1</Link></li>
        <li className="page-item"><Link to="/fashion" className="page-link">2</Link></li>
        <li className="page-item"><Link to="/furniture" className="page-link">3</Link></li>
        <li className="page-item"><Link to="/fashion" className="page-link">Next</Link></li>
    </ul>
    </nav>
        </>
    );
}

export default Product;
