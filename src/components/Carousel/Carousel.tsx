import {useRef, ReactNode} from "react";
import {isMobile} from "react-device-detect";
import {Navigation, FreeMode, Grid} from 'swiper/modules';
import { Swiper, SwiperProps } from 'swiper/react';
import {clsx} from "clsx";
import 'swiper/scss';
import 'swiper/scss/grid';
import 'swiper/scss/scss/navigation';
import 'swiper/scss/free-mode';
import classes from "./styles.module.scss";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg?react";



interface CarouselProps extends SwiperProps {
  children?: ReactNode,
  buttonNextClassName?: string
  buttonPrevClassName?: string
}

function Carousel({children, buttonNextClassName, buttonPrevClassName, ...swiperProps}: CarouselProps) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);


  const defaultSettingsDesktop: SwiperProps = {
    modules: [Navigation, Grid],
    slidesPerView: "auto",
    spaceBetween: 8,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
      disabledClass: classes.carouselBtn_disabled,
    },
    onBeforeInit: (swiper) => {
      if (typeof swiper.params.navigation === "object") {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }
    }
  }

  const defaultSettingsMobile: SwiperProps = {
    modules: [FreeMode, Grid],
    slidesPerView: "auto",
    freeMode: true,
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
  }


  const swiperSettings = isMobile ? defaultSettingsMobile : defaultSettingsDesktop;

  return (
    <div className={classes.carouselContainer}>
      <Swiper
        className={classes.carousel}
        {...swiperSettings}
        {...swiperProps}
      >
        {children}

        {!isMobile &&
          <button
            ref={navigationPrevRef}
            className={clsx(classes.carouselBtn, classes.carouselPrev, buttonPrevClassName)}
          >
              <span className={classes.carouselBtnInner}>
                <ArrowRightIcon className={classes.carouselIcon}/>
              </span>
          </button>
        }

        {!isMobile &&
          <button
            ref={navigationNextRef}
            className={clsx(classes.carouselBtn, classes.carouselNext, buttonNextClassName)}
          >
            <span className={classes.carouselBtnInner}>
              <ArrowRightIcon className={classes.carouselIcon}/>
            </span>
          </button>
        }
      </Swiper>
    </div>
  );
}

export default Carousel;