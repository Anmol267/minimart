import './Product.css'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import axios from 'axios'


function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products")
        .then((res) =>{
            setProducts(res.data);
            console.log("The data I am getting", res.data);
        })
        .catch((err) =>{
            console.err("Error fetching data",err);   
        })
    }, []);
    return (
        <>
            <div className="card-container">
               {products.slice(1,4).map((item) => (
                <ProductCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    price={item.price}
                    onAddToCart={() => handleAddToCart(item)}
                />
                ))}
            </div>
            <div className="card-container">
               {products.slice(4,7).map((item) => (
                <ProductCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    price={item.price}
                    onAddToCart={() => handleAddToCart(item)}
                />
                ))}
            </div>
        </>
    );
}

export default Product;
