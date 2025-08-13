import { Box, Image } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const images = [
  "assets/banner.jpg",
  "assets/fonselp1.png",
  "assets/fonselp2.png",
];

const Banner = () => {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
    },
    created() {
      startAutoSlide();
    },
    updated() {
      startAutoSlide();
    },
    dragStarted() {
      stopAutoSlide();
    },
    animationEnded() {
      startAutoSlide();
    },
    dragEnded() {
      startAutoSlide();
    },
  });
  const startAutoSlide = () => {
    stopAutoSlide();
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    return () => {
      stopAutoSlide();
    };
  }, []);
  return (
    <Box
      ref={sliderRef}
      className="keen-slider"
      overflow="hidden"
      w="full"
      h={{ base: "100px", md: "200px", xl: "250px" }}
    >
      {images.map((src, index) => (
        <Box
          className="keen-slider__slide"
          key={index}
          flex="none"
          w="full"
          h="full"
          borderRadius="10px"
        >
          <Image
            src={src}
            alt={`slide-${index}}`}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
      ))}
    </Box>
  );
};

export default Banner;