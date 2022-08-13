import "./mainFeatures.css";
import { GiCat, GiPuzzle, GiBrickWall } from "react-icons/gi";
import localeJson from "./locale.json";
import { useSelector } from "react-redux";

const MainFeatures = () => {
  const { locale } = useSelector((state) => state.app);

  return (
    <div className="container px-4 py-5" id="hanging-icons">
      <h2 className="fw-light pb-2 border-bottom">
        {localeJson.title[locale]}{" "}
      </h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-secondary flex-shrink-0 me-3">
            <GiCat size={70} />
          </div>
          <div>
            <h2>{localeJson.block1_title[locale]} </h2>
            <p> {localeJson.block1_body[locale]} </p>
            <a href="/" className="btn btn-warning">
              {localeJson.block1_button[locale]}
            </a>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-secondary flex-shrink-0 me-3">
            <GiPuzzle size={70} />
          </div>
          <div>
            <h2>{localeJson.block2_title[locale]}</h2>
            <p>{localeJson.block2_body[locale]}</p>
            <a href="/" className="btn btn-warning">
              {localeJson.block2_button[locale]}
            </a>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-secondary flex-shrink-0 me-3">
            <GiBrickWall size={70} />
          </div>
          <div>
            <h2>{localeJson.block3_title[locale]}</h2>
            <p> {localeJson.block3_body[locale]} </p>
            <a href="/" className="btn btn-warning">
              {localeJson.block3_button[locale]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;
