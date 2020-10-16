import React from "react";
import Slider from "react-slick";
import { Image } from "react-bootstrap";

function CarouselCustom(props) {
  const listado = props.listaImagenes || [];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Slider settings={settings}>
        {listado.map((el, index) => (
          <div key={index}>
            <Image src={el.url} rounded width={200} height={200} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselCustom;
