import './Product.css'
import laptop from '../assets/laptop.jpg'
import tv from '../assets/tv.jpg'
import phone from '../assets/phone.jpg'
import washingmachine from '../assets/washingmachine.webp'
import shirt from '../assets/shirt.webp'
import pant from '../assets/pant.jpg'
import shoe from '../assets/shoe.jpg'
import track from '../assets/track.jpg'
import CustomCard from '../components/CustomCard'


function Product() {
    return (
        <>
            <span>Electronics</span>
            <div className="card-container">
                <CustomCard
                    image = {laptop}
                    productName = {"Apple 2025 MacBook Air 15-inch Laptop with M4 chip: 16GB RAM, 256GB SSD Storage"}
                    price = {"$1020.99"}
                    btnName = {"Buy"}
                />
                <CustomCard
                    image = {tv}
                    productName = {"Samsung 75-Inch Class QLED 4K Q80D Series Quantum HDR+ Smart TV w/Dolby Atmos, Alexa Built-in"}
                    price = {"$984.99"}
                    btnName = {"Buy"}
                />
                <CustomCard
                    image = {phone}
                    productName = {"Apple iPhone 16 Pro Max, US Version, 8GB RAM, 256GB Storage, Black Titanium"}
                    price = {"$1299.99"}
                    btnName = {"Buy"}
                />
                <CustomCard
                    image = {washingmachine}
                    productName = {"Washing Machine 12 kg, Series 5, Front Load Washing, Space Saving Full-Automatic Washer"}
                    price = {"$699.99"}
                    btnName = {"Buy"}
                />
            </div>
            <span>Fashion</span>
            <div className="card-container">
                <CustomCard
                    image = {shirt}
                    productName = {"Nepali T-Shirt with Swayambhu image"}
                    price = {"$10.99"}
                    btnName = {"Buy"}
                />
                <CustomCard
                    image = {pant}
                    productName = {"Sleek Design Men's Pants with Elastic Waist"}
                    price = {"$699.99"}
                    btnName = {"Buy"}
                />
                <CustomCard
                    image = {shoe}
                    productName = {"Nike Air Max 270 (White/Bright Crimson/Pink Foam/Black) Size 7.5"}
                    price = {"$120.99"}
                    btnName = {"Buy"}
                />
                <CustomCard
                    image = {track}
                    productName = {"MoFiz Men's Tracksuit 2 Piece Sweatsuit Track Suit"}
                    price = {"$43.99"}
                    btnName = {"Buy"}
                    id="track-image"
                />
            </div>
        </>
    );
}

export default Product;
