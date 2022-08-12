import { useState, useEffect } from "react";
import HeaderOffcanvas from "./headerOffcanvas.js";
import HeaderNormal from "./headerNormal.js";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 990) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  if (isMobile) {
    return <HeaderOffcanvas />;
  } else {
    return <HeaderNormal />;
  }
};

export default Header;
