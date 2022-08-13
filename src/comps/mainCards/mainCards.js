import { BiMap, BiCalendar } from "react-icons/bi";
import "./mainCards.css";
import localeJson from "./locale.json";
import { useSelector } from "react-redux";

const MainCards = () => {
  const { locale } = useSelector((state) => state.app);

  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="fw-light pb-2 border-bottom">
        {localeJson.title[locale]}
      </h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg card-image-04">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                <i>{localeJson.block1_text[locale]}</i>
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    className="card-image rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <BiMap size={16} />
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <BiCalendar size={16} />
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg card-image-02">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                <i>{localeJson.block2_text[locale]}</i>
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    className="card-image rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <BiMap size={16} />
                  <small>Zagreb</small>
                </li>
                <li className="d-flex align-items-center">
                  <BiCalendar size={16} />
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg card-image-03">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                <i>{localeJson.block3_text[locale]}</i>
              </h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    className="card-image rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <BiMap size={16} />
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <BiCalendar size={16} />
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
