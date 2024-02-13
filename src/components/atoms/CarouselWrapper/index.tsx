import { CarouselItem, Carousel } from "react-bootstrap";
import style from "./index.module.scss";

const CarouselWrapper = () => {
  return (
    <div className={style.carousel}>
      <Carousel indicators={false}>
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
    </div>
  );
};

export default CarouselWrapper;
