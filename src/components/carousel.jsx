import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './carousel.css';

import img1 from '../assets/IMG_0657.jpeg';
import img2 from '../assets/IMG_0663.jpeg';
import img3 from '../assets/IMG_0664.jpeg';
import img4 from '../assets/IMG_0665.jpeg';
import img5 from '../assets/IMG_1291.png';
import img6 from '../assets/IMG_1292.png';
import img7 from '../assets/IMG_1293.png';
import img8 from '../assets/IMG_1294.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function CarouselSection({ language }) {
  return (
    <section id="projects" className="projects-carousel">
      <h2>
        {language === 'en' ? 'Bootcamp Memories' : 'ブートキャンプの思い出'}
      </h2>
      <Swiper
  style={{ height: '250px' }}
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={3}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
>

        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Slide ${i + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

