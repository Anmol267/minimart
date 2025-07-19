import './CategoryCard.css'
function CategoryCard({image, title}){
        return(
            <>
            <div class="category-card">
            <img src={image} class="card-img" alt="..."/>
            <div class="card-body">
            <p class="card-text">{title}</p>
            </div> 
            </div> 
            </>
        );
      
}
export default CategoryCard;