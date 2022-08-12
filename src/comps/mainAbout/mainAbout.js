import "./mainAbout.css";
import localeJson from "./locale.json";
import { useSelector } from "react-redux";

const MainAbout = () => {
  const { locale } = useSelector((state) => state.app);

  return (
    <section className="py-5 text-center container main-about">
      <div className="row py-lg-5 main-about-inner">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light"> {localeJson.title[locale]} </h1>
          <p className="lead text-muted"> {localeJson.body[locale]} </p>
          <p className="button-gap">
            <a href="#" className="btn btn-warning my-2">
              {" "}
              {localeJson.button_01[locale]}{" "}
            </a>
            <a href="#" className="btn btn-secondary my-2">
              {" "}
              {localeJson.button_02[locale]}{" "}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainAbout;
