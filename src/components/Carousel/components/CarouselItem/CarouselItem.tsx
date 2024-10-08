import {SwiperSlide, SwiperSlideProps} from "swiper/react";
import 'swiper/scss';
import classes from "../../styles.module.scss";



interface CarouselItemProps extends SwiperSlideProps {}

function CarouselItem(props: CarouselItemProps) {
  return (
    <SwiperSlide {...props} className={classes.item}/>
  );
}

CarouselItem.displayName = "SwiperSlider";
export default CarouselItem;