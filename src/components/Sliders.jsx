import styles from './Sliders.module.scss';
import Slide from './Slide';
import { data } from '../data/themes';
import { Navigation, Pagination, A11y, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Sliders() {
  const themes = data;
  
  return (
    <Swiper className={styles.swiper}
      modules={[Navigation, EffectCreative, Pagination, A11y]}
      slidesPerView={1}
      speed={2000}
      navigation={true}
      pagination={{
        type: 'progressbar',
      }}
      effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
            scale:1.3,
            origin: 'top left',
            rotate: [0, 0, -10]
          },
        }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <div id="slider" className={styles.slider}>
          {themes.map((t)=>(
            <SwiperSlide className={styles.swiperSlide}>
              <Slide key={t._id} title={t.title} example={t.example} href={t.href} bgSliderImg={t.bgSliderImg} />
            </SwiperSlide>
          ))}
        </div>
    </Swiper>
  );
}

export default Sliders;
