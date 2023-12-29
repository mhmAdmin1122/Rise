// components/VerticalSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import additional Swiper modules CSS if needed

const VerticalSlider = () => {
  const swiperOptions = {
    direction: "vertical" as const,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <div>
      <Swiper {...swiperOptions}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
