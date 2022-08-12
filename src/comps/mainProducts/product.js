import './product.css';

const Product = (props) =>  {
    return (
        <div className="card product-card" >
            <img src={props.image} className="card-img-top" />
            <div className="card-body">
            <h3>{props.productTitle}</h3>
            <p className="card-text">{props.productBody}</p>
            <p className="card-price">{props.productPrice}</p>
            </div>
            <button className="btn btn-warning card-button" type="submit">{props.productButton}</button>
           
        </div>
    );
}

export default Product;

