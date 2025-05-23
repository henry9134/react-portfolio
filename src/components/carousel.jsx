import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './carousel.css';

export default function CarouselSection({ language }) {
  return (
    <section id="projects" className="projects-carousel">
      <h2>
        {language === 'en' ? 'Bootcamp Memories' : 'ブートキャンプの思い出'}
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x200?text=Image+1" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x200?text=Image+2" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x200?text=Image+3" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x200?text=Image+4" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
