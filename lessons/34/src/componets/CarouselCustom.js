import React from "react";
import TinySlider from "tiny-slider-react";

function CarouselCustom(props) {
  const listado = props.listaImagenes || [];
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
  };
  return (
    <div>
      <TinySlider settings={settings}>
        {listado.map((el, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img className={`tns-lazy-img`} src={el.url} data-src={el} alt="" />
          </div>
        ))}
      </TinySlider>
    </div>
  );
}

export default CarouselCustom;
