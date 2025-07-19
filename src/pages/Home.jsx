import './Home.css'
import CategoryCard from '../components/CategoryCard'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import grocery from '../assets/grocery.jpg'
import fashion from '../assets/fashion.avif'
import electronics from '../assets/electronics.jpg'
import furniture from '../assets/furniture.jpg'
import kitchen from '../assets/kitchen.jpg'
function Home() {
  return (
    <>
    <h1>Let's Do a Little Shopping!</h1>
      
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={image1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={image2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="..."/>
            </div>
          </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
    <h2>Grab the deal! For limited time only</h2>
    <h3>Get it all right here</h3>
    <div className="category">
      <CategoryCard image={grocery} title="Groceries" />
      <CategoryCard image={fashion} title="Fashion" />
      <CategoryCard image={electronics} title="Electronics" />
      <CategoryCard image={furniture} title="Furniture" />
      <CategoryCard image={kitchen} title="Kitchen" />
    </div>
    </>
  );
}

export default Home;
