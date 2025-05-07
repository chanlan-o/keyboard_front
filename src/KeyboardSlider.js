import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // ✅ 버전 11 이상에서만 이거!

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function KeyboardSlider() {
  return (
    <section>
      <h2
        style={{
          backgroundColor: '#FFFDBF',
          padding: '0.5rem 1rem',
          display: 'inline-block',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      >
        키덕 PICK! 추천 키보드 💡
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        style={{ marginTop: '1.5rem', position: 'relative' }}
      >
        <SwiperSlide><div className="keyboard-card">키보드1</div></SwiperSlide>
        <SwiperSlide><div className="keyboard-card">키보드2</div></SwiperSlide>
        <SwiperSlide><div className="keyboard-card">키보드3</div></SwiperSlide>
        <SwiperSlide><div className="keyboard-card">키보드4</div></SwiperSlide>
        <SwiperSlide><div className="keyboard-card">키보드5</div></SwiperSlide>
        <SwiperSlide><div className="keyboard-card">키보드6</div></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default KeyboardSlider;
