import './footer.css';
import localeJson from "./locale.json"; 
import { useSelector } from "react-redux";


const Footer = () => {
   
  const { locale } = useSelector((state) => state.app);  
  const language = "hr";
  const year = new Date().getFullYear();
  
return ( 
   
<footer className="text-center text-lg-start  bg-dark text-white">

<br />

<section className="link-container">
  <div className="container text-center text-md-start mt-5">

    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <h6 className="text-uppercase fw-bold mb-4">
          <i className="fas fa-gem me-3 text-grayish"></i>TOY STORE
        </h6>
        <p>
        {localeJson.company_text[locale]}
        </p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase fw-bold mb-4">
        {localeJson.menutitle_products[locale]}
        </h6>
        <p>
          <a href="#!" className="text-reset">React</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Redux</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Wordpress</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Symfony</a>
        </p>
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
        {localeJson.menutitle_usefullLinksTitle[locale]}
        </h6>
        <p>
          <a href="#!" className="text-reset">Pricing</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Settings</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Orders</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Help</a>
        </p>
      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
        {localeJson.menutitle_contact[locale]}
        </h6>
        <p><i className="fas fa-home me-3 text-grayish"></i> Vinkovci, VS 32100, HR</p>
        <p>
          <i className="fas fa-envelope me-3 text-grayish"></i>
          info@example.com
        </p>
        <p><i className="fas fa-phone me-3 text-grayish"></i> + 01 234 567 88</p>
        <p><i className="fas fa-print me-3 text-grayish"></i> + 01 234 567 89</p>
      </div>
    </div>
  </div>
</section>

<div className="link-container text-center p-4" >
  © {year} <a className="text-reset fw-bold" href="https://ioox.studio/"> www.ioox.studio</a>
</div>

</footer>


  );
}

export default Footer;

