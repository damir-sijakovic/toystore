import './cookieConsent.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { skipCookieConsent } from "../../AppSlice";
import localeJson from "./locale.json"; 


const CookieConsent = () => {

  const { locale } = useSelector((state) => state.app);  

  const dispatch = useDispatch();
  const { cookieConsent } = useSelector((state) => state.app);
  const containerRef = useRef(null);

  const hideContainer = () => {
	 containerRef.current.style.display = 'none';
  }

 if (!cookieConsent) {
  return (
	<div className="cookie-consent" ref={containerRef}>
	  <span>{localeJson.title[locale]}<a href="/privacy" className="ml-1 text-decoration-none"> {localeJson.privacy_link_text[locale]} </a> </span>
	  <div className="mt-2 d-flex align-items-center justify-content-center g-2">
		<button className="allow-button mr-1" onClick={() => dispatch(skipCookieConsent())} > {localeJson.button_allow[locale]}  </button>
		<button className="allow-button" onClick={() => hideContainer() } > {localeJson.button_cancel[locale]}  </button>
	  </div>          
	</div>
  );
 }

}

export default CookieConsent;
