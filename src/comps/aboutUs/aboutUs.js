import LocaleEn from "./localeEn";
import LocaleHr from "./localeHr";
import { useSelector } from "react-redux";

const Privacy = () => {    
  const { locale } = useSelector((state) => state.app);  
  
  if (locale === 'hr'){
    return <LocaleHr />;
  }
  else {
    return <LocaleEn />;
  }      
}

export default Privacy;

