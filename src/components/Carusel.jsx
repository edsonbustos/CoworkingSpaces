import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../img/Carousel/image1.webp";
import img1 from "../img/Carousel/image.jpg";
import "../styles/Carousel.css";
import Info from "./Info";

function Carusel() {
  return (
    <div>
      <Carousel className="carousell">
        <Carousel.Item interval={1000}>
          <Image src={img} className="img1"/>
          <Carousel.Caption className="Options">
            <Info />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image src={img1} className="img2" />
          <Carousel.Caption className="Options">
          <Info />
      </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      
      
    </div>
  );
}

export default Carusel;
