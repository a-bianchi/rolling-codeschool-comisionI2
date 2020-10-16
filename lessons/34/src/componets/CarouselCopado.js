import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default class MultipleItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerPadding: "20px",
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {this.props.listado.map((item, index) => {
            return (
              <div key={index}>
                <Link to="/info">
                  <img src={item.url} width={250} height={250}></img>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
