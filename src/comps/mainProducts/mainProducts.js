import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product";
import localeJson from "./locale.json";
import { useSelector } from "react-redux";

const MainProducts = () => {
  const { locale } = useSelector((state) => state.app);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container px-4 py-5">
      <h2 className="fw-light pb-2 border-bottom">
        {localeJson.title[locale]}
      </h2>

      <Carousel responsive={responsive} className="card-group">
        <div>
          {" "}
          <Product
            image="/assets/img/01.jpg"
            productTitle={localeJson.product_title[locale]}
            productBody={localeJson.product_body[locale]}
            productPrice={localeJson.product_price[locale]}
            productButton={localeJson.product_button[locale]}
          />{" "}
        </div>
        <div>
          {" "}
          <Product
            image="/assets/img/02.jpg"
            productTitle={localeJson.product_title[locale]}
            productBody={localeJson.product_body[locale]}
            productPrice={localeJson.product_price[locale]}
            productButton={localeJson.product_button[locale]}
          />{" "}
        </div>
        <div>
          {" "}
          <Product
            image="/assets/img/03.jpg"
            productTitle={localeJson.product_title[locale]}
            productBody={localeJson.product_body[locale]}
            productPrice={localeJson.product_price[locale]}
            productButton={localeJson.product_button[locale]}
          />{" "}
        </div>
        <div>
          {" "}
          <Product
            image="/assets/img/04.jpg"
            productTitle={localeJson.product_title[locale]}
            productBody={localeJson.product_body[locale]}
            productPrice={localeJson.product_price[locale]}
            productButton={localeJson.product_button[locale]}
          />{" "}
        </div>
        <div>
          {" "}
          <Product
            image="/assets/img/05.jpg"
            productTitle={localeJson.product_title[locale]}
            productBody={localeJson.product_body[locale]}
            productPrice={localeJson.product_price[locale]}
            productButton={localeJson.product_button[locale]}
          />{" "}
        </div>
        <div>
          {" "}
          <Product
            image="/assets/img/06.jpg"
            productTitle={localeJson.product_title[locale]}
            productBody={localeJson.product_body[locale]}
            productPrice={localeJson.product_price[locale]}
            productButton={localeJson.product_button[locale]}
          />{" "}
        </div>
      </Carousel>
    </div>
  );
};

export default MainProducts;

/*

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const SliderMain = () =>  {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (<Carousel responsive={responsive} className="card-group">
    <div> <Card /> </div>
    <div> <Card /> </div>
    <div> <Card /> </div>
    <div> <Card /> </div>
    <div> <Card /> </div>
    </Carousel>);
}

export default SliderMain;



*/
