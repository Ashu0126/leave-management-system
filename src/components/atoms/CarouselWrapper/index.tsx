import { CarouselItem, Carousel } from "react-bootstrap";
import style from "./index.module.scss";

const CarouselWrapper = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <CarouselItem>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
        voluptate, consequatur sapiente voluptatem quam totam quos. Ex itaque
        totam porro, blanditiis modi sed? Ab eligendi suscipit, dolorem
        voluptatibus amet maiores.
      </CarouselItem>
      <CarouselItem>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
        voluptate, consequatur sapiente voluptatem quam totam quos. Ex itaque
        totam porro, blanditiis modi sed? Ab eligendi suscipit, dolorem
        voluptatibus amet maiores.
      </CarouselItem>
      <CarouselItem>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
        voluptate, consequatur sapiente voluptatem quam totam quos. Ex itaque
        totam porro, blanditiis modi sed? Ab eligendi suscipit, dolorem
        voluptatibus amet maiores.
      </CarouselItem>
      <CarouselItem>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
        voluptate, consequatur sapiente voluptatem quam totam quos. Ex itaque
        totam porro, blanditiis modi sed? Ab eligendi suscipit, dolorem
        voluptatibus amet maiores.
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselWrapper;
