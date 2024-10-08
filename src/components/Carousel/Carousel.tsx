import React, {useRef} from "react";
import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {Navigation, FreeMode, Grid} from 'swiper/modules';
import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/grid';
import classes from "./styles.module.scss";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg?react";



export type CarouselSettings = {
  desktop?: SwiperProps,
  mobile?: SwiperProps
}

interface CarouselProps {
  settings?: CarouselSettings,
  children?: React.ReactNode,
  buttonNextClassName?: string
  buttonPrevClassName?: string
}

function Carousel({settings, children, buttonNextClassName, buttonPrevClassName}: CarouselProps) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);


  const swiperSettingsDesktop: SwiperProps = {
    modules: [Navigation, Grid],
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
    },
    ...settings?.desktop
  }

  const swiperSettingsMobile: SwiperProps = {
    modules: [FreeMode, Grid],
    slidesPerView: "auto",
    freeMode: true,
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    ...settings?.mobile
  }


  const swiperSettings = isMobile ? swiperSettingsMobile : swiperSettingsDesktop;

  return (
    <div className={classes.carouselContainer}>
      <Swiper
        className={classes.carousel}
        {...swiperSettings}
      >
        {children}

        {!isMobile &&
          <>
            <button
              ref={navigationPrevRef}
              className={clsx(classes.carouselBtn, classes.carouselPrev, buttonPrevClassName)}
            >
              <span className={classes.carouselBtnInner}>
                <ArrowRightIcon className={classes.carouselIcon}/>
              </span>
            </button>

            <button
              ref={navigationNextRef}
              className={clsx(classes.carouselBtn, classes.carouselNext, buttonNextClassName)}
            >
            <span className={classes.carouselBtnInner}>
              <ArrowRightIcon className={classes.carouselIcon}/>
            </span>
            </button>
          </>
        }
      </Swiper>
    </div>
  );
}

export default Carousel;