import "./singleProduct.css";
//import localeJson from "./locale.json";
//import { useSelector } from "react-redux";

const SingleProduct = () => {
  //const { locale } = useSelector((state) => state.app);

  return (
     
   <div className="container mt-5 mb-5 single-product">
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img alt="Random product" id="main-image" src="/assets/img/03.jpg" width="250" /> </div>
                            <div className="thumbnail text-center"> <img alt="Random product" onClick={console.log(123)} src="/assets/img/01.jpg" width="70" /> <img alt="Random product" onClick={console.log(123)} src="/assets/img/02.jpg" width="70" /> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Orianz</span>
                                <h5 className="text-uppercase">Men's slim fit t-shirt</h5>
                                <div className="price d-flex flex-row align-items-center"> <span className="act-price">$20</span>
                                    <div className="ml-2"> <small className="dis-price">$59</small> <span>40% OFF</span> </div>
                                </div>
                            </div>
                            <p className="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                            <div className="sizes mt-5">
                                <h6 className="text-uppercase">Size</h6> <label className="radio"> <input type="radio" name="size" value="S" /> <span>S</span> </label> <label className="radio"> <input type="radio" name="size" value="M" /> <span>M</span> </label> <label className="radio"> <input type="radio" name="size" value="L" /> <span>L</span> </label> <label className="radio"> <input type="radio" name="size" value="XL" /> <span>XL</span> </label> <label className="radio"> <input type="radio" name="size" value="XXL" /> <span>XXL</span> </label>
                            </div>
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  );
};

export default SingleProduct;
