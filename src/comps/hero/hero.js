import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import localeJson from "./locale.json";
import { useSelector } from "react-redux";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const { locale } = useSelector((state) => state.app);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img/24.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{localeJson.block1_title[locale]} </h3>
          <p>{localeJson.block1_text[locale]}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img/23.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{localeJson.block2_title[locale]} </h3>
          <p>{localeJson.block2_text[locale]}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img/27.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{localeJson.block3_title[locale]} </h3>
          <p>{localeJson.block3_text[locale]}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
