import './Home.css'
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
import vegetable from '../assets/vegetables.webp'
import fruits from '../assets/Fruits.png'
import chocolate from '../assets/chocolates.jpeg'
import softdrink from '../assets/softdrink.jpeg'
import kitchen from '../assets/kitchen.jpg'
function Home(){
    return(
        <>
        <h1>Let's Do a Little Shopping!</h1>
        <img src={image1} height = "300" width = "500" class = "product-image"/>
        <img src={image2} height = "300" width = "500" class = "product-image"/>
        <img src={image3} height = "300" width = "500" class = "product-image"/>
        <h2>Grab the deal! For limited time only</h2>
        <h3>Get it all right here</h3>
         <div class="category-row">
        <div class="categories-image">
          <img src={vegetable} height="200" width="300" />
          <p>Fresh Vegetables</p>
        </div>
        <div class="categories-image">
          <img src={fruits} height="200" width="300" />
          <p>Seasonal Fruits</p>
        </div>
        <div class="categories-image">
          <img src={chocolate} height="200" width="300" />
          <p>Chocolates</p>
        </div>
        <div class="categories-image">
          <img src={softdrink} height="200" width="300" />
          <p>Soft Drinks</p>
        </div>
        <div class="categories-image">
          <img src={kitchen} height="200" width="300" />
          <p>Kitchen Essentials</p>
        </div>
      </div>
        </>
        
    );
}
export default Home
