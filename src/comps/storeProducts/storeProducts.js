import "./storeProducts.css";
import localeJson from "./locale.json";
import { useSelector } from "react-redux";
import Product from "./product";

const StoreProducts = () => {
  const { locale } = useSelector((state) => state.app);

  return (
    <section>
      <br />
      <div className="text-center container py-5">
        <h4 className="mt-4 mb-5">
          <strong>{localeJson.title[locale]} </strong>
        </h4>
        <div className="row">
          <Product
            productName="Product"
            productPrice="55,00 €"
            buynowButton="Buy now"
            productImage="/assets/img/01.jpg"
            tags={["New", "Cool"]}
          />
          <Product
            productName="Product"
            productPrice="122,00 €"
            buynowButton="Buy now"
            productImage="/assets/img/02.jpg"
            tags={["Cool"]}
          />
          <Product
            productName="Product"
            productPrice="33,00 €"
            buynowButton="Buy now"
            productImage="/assets/img/03.jpg"
            tags={["Retro", "Favorite"]}
          />
          <Product
            productName="Product"
            productPrice="24,00 €"
            buynowButton="Buy now"
            productImage="/assets/img/04.jpg"
            tags={[]}
          />
          <Product
            productName="Product"
            productPrice="5,00 €"
            buynowButton="Buy now"
            productImage="/assets/img/05.jpg"
            tags={["Tag", "Cool"]}
          />
          <Product
            productName="Product"
            productPrice="25,00 €"
            buynowButton="Buy now"
            productImage="/assets/img/06.jpg"
            tags={["New", "Hello"]}
          />
        </div>
      </div>
    </section>
  );
};

export default StoreProducts;
