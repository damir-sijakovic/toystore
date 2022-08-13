import "./storeProducts.css";

const Product = (props) => {
  const getTags = () => {

    var returnData = [];
    for (let i = 0; i < props.tags.length; i++) {
      returnData.push(
        <h5 key={i}>
          <span className="badge bg-danger ms-2">{props.tags[i]}</span>
        </h5>
      );
    }

    return returnData;
  };

  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <div className="card">
        <div
          className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light"
        >
          <img alt="Random product" src={props.productImage} className="w-100" />
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                {getTags()}
              </div>
            </div>
            <div className="hover-overlay">
              <div className="mask store-products-mask"></div>
            </div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title mb-3">{props.productName}</h5>
          <h6 className="mb-3">{props.productPrice}</h6>
        </div>
        <button className="btn btn-warning card-button" type="submit">
          {props.buynowButton}
        </button>
      </div>
    </div>
  );
};

export default Product;
