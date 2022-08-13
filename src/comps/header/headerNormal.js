import LogoImage from "./logo3.svg";
import "./header.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { setLocale } from "../../AppSlice";
import localeJson from "./locale.json";
import { useRef } from "react";

const DrawMenu = (props) => {
  const currentPage = window.location.pathname;
  const menuClasses = "nav-link px-2 text-white header-item";
  const selectedMenuClasses = "nav-link px-2 text-muted header-item";
  const selectedLocale = props.selectedLocale;
  const menuItems = ["home", "store", "privacy", "about"];


  const drawListItems = () => {
    var returnList = [];
    for (let i = 0; i < menuItems.length; i++) {
      let menuName = localeJson["menu_" + menuItems[i]][selectedLocale];
      let currentItem = menuItems[i];
      let currentItemHref = currentItem === "home" ? "/" : "/" + currentItem;
      let key = "key_" + menuItems[i];

      if (currentPage === currentItemHref) {
        returnList.push(
          <li key={key}>
            <a href={currentItemHref} className={selectedMenuClasses}>
              {menuName}
            </a>
          </li>
        );
      } else {
        returnList.push(
          <li key={key}>
            <a href={currentItemHref} className={menuClasses}>
              {menuName}
            </a>
          </li>
        );
      }
    }

    return returnList;
  };

  return (
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      {drawListItems()}
    </ul>
  );
};

const HeaderNormal = () => {

  const inputElement = useRef();
  const dispatch = useDispatch();
  const { locale } = useSelector((state) => state.app);

  const localeMenuItemsShort = {
    en: "🇬🇧 EN",
    hr: "🇭🇷 HR",
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      if (!inputElement.current.value) return; 
      window.location = '/search?s=' + inputElement.current.value;
      // console.log('enter press here! ', inputElement.current.value);
    }
  }

  return (
    <header className="p-3 bg-dark text-white fixed-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img className="header-logo" src={LogoImage} />
          </a>

          <DrawMenu seletedItem="home" selectedLocale={locale} />

          <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              onKeyPress={handleKeyPress}
              ref={inputElement}
              type="search"
              className="form-control form-control-dark"
              placeholder={localeJson.search[locale]}
              aria-label="Search"
            />
          </div>

          <DropdownButton
            className="language-button"
            variant="warning"
            title={localeMenuItemsShort[locale]}
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item
              eventKey="option-1"
              onClick={() => dispatch(setLocale("en"))}
            >
              🇬🇧 English (EN)
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="option-2"
              onClick={() => dispatch(setLocale("hr"))}
            >
              🇭🇷 Hrvatski (HR)
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </header>
  );
};

export default HeaderNormal;
