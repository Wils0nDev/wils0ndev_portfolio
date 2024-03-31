import { Carousel } from "@material-tailwind/react";
import "./scss/carousel.css";
import wilsondev from "../assets/img/wilson_dev.jpg";
import wilsondev2 from "../assets/img/wilson_dev2.jpeg";
import wilsondev3 from "../assets/img/wilson_dev3.jpeg";
import wilsondev4 from "../assets/img/wilsondev4.jpeg";
import wilson_famili from "../assets/img/wilson_famili.jpeg";

export const CarouselChild = () => {
  return (
    <Carousel className="gap-0">
      <img
        src={wilsondev3}
        alt="wilsondev3"
        className="object-cover carousel-img "
      />
      <img
        src={wilsondev2}
        alt="wilsondev2"
        className="object-cover carousel-img "
      />
      <img
        src={wilson_famili}
        alt="wilson_famili"
        className="object-cover carousel-img "
      />
      <img
        src={wilsondev4}
        alt="wilsondev4"
        className="object-cover carousel-img "
      />

      <img
        src={wilsondev}
        alt="wilsondev"
        className="object-cover carousel-img "
      />

      
    </Carousel>
  );
};
