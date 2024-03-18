import { Carousel } from "@material-tailwind/react";
import "./scss/carousel.css";
import wilsondev from "../assets/img/wilson_dev.jpg";
import wilsondev2 from "../assets/img/wilson_dev2.jpeg";
import wilsondev3 from "../assets/img/wilson_dev3.jpeg";
import wilsondev4 from "../assets/img/wilsondev4.jpeg";
import wilsondev10 from "../assets/img/wilsondev10.jpeg";

export const CarouselChild = () => {
  return (
    <Carousel className="gap-0">
      <img
        src={wilsondev3}
        alt="image 3"
        className="object-cover carousel-img "
      />
      <img
        src={wilsondev2}
        alt="image 3"
        className="object-cover carousel-img "
      />
      <img
        src={wilsondev4}
        alt="image 3"
        className="object-cover carousel-img "
      />

      <img
        src={wilsondev}
        alt="image 1"
        className="object-cover carousel-img "
      />

      <img
        src={wilsondev10}
        alt="image 1"
        className="object-cover carousel-img "
      />
    </Carousel>
  );
};
