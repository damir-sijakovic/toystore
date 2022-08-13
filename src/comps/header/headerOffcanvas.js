import { useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import LogoImage from "./logo3.svg";
import "./header.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setLocale } from "../../AppSlice";
import localeJson from "./locale.json";

const CreateMenuItems = (props) => {
	const currentPage = window.location.pathname;
	const selectedLocale = props.selectedLocale;	
	const menuItems = [ 'home', 'store', 'privacy', 'about'];
	var returnElements = [];

	for (let i=0; i<menuItems.length; i++){
		let menuName = localeJson["menu_" + menuItems[i]][selectedLocale];
		let currentItem = menuItems[i];
		let currentItemHref = currentItem === "home" ? "/" : "/" + currentItem;
		let key = "key_" + menuItems[i];	
		
		if (currentPage === currentItemHref) {	
			returnElements.push( <Nav.Link href={currentItemHref} key={key} > {menuName} </Nav.Link> );
		}
		else {
			returnElements.push( <Nav.Link className="inactive" href={currentItemHref} key={key} > {menuName} </Nav.Link> );
		}
	}
		
	return (
		<Nav className="flex-column" variant="pills" activeKey={currentPage} >
			{returnElements}
		</Nav>
	);
}


const HeaderOffcanvas = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inputElement = useRef();
  const dispatch = useDispatch();
  const { locale } = useSelector((state) => state.app);

  const hrButton = (locale === 'hr') ? true : false;
  const enButton = (locale === 'en') ? true : false;
  
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      if (!inputElement.current.value) return; 
      window.location = '/search?s=' + inputElement.current.value;
      return;
    }
  }

  return (
    <> 
      <header className="p-3 bg-dark text-white fixed-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img alt="logo" className="header-logo" src={LogoImage} />
            </a>

            <div className="text-end">
              <button
                onClick={handleShow}
                type="button"
                className="btn btn-warning"
              >                
                <FaBars />
              </button>
            </div>
          </div>
        </div>

        <Offcanvas show={show} placement="end" onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>TOY STORE</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

          <div className="m-4">
              <div className="btn-group">
                  <input type="radio" className="btn-check" name="options" id="radio2" autoComplete="off" onChange={() => dispatch(setLocale("en"))} checked={enButton} />
                  <label className="btn btn-outline-warning toggle-futton-flag" htmlFor="radio2"><img alt="English flag" className="toggler-icon" src="/assets/img/en.png" /></label>

                  <input type="radio" className="btn-check" name="options" id="radio1" autoComplete="off" onChange={() => dispatch(setLocale("hr"))}  checked={hrButton} />
                  <label className="btn btn-outline-warning toggle-futton-flag" htmlFor="radio1"><img alt="English flag" className="toggler-icon" src="/assets/img/hr.png" /></label>          
              </div>
          </div>

            <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                onKeyPress={handleKeyPress}
                ref={inputElement}
                type="search"
                className="form-control form-control-dark"
                placeholder="Search"
                aria-label="Search"
              />
            </div>

			<CreateMenuItems selectedLocale={locale} />
     
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
};

export default HeaderOffcanvas;



/*

  <Nav.Link href="/home" className="okok">Home</Nav.Link>
  <Nav.Link eventKey="link-1">Store</Nav.Link>
  <Nav.Link eventKey="link-2">Privacy</Nav.Link>
  <Nav.Link eventKey="link-2">About</Nav.Link>


*/
