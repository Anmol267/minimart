function CustomCard({image, productName, price, btnName}){
    return(
        <>
         <div className="card" style={{ width: "26rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">{btnName}</a>
             </div>
         </div>
        </>
    );
}
export default CustomCard;