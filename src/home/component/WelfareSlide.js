import "home/component/WelfareSlide.css";
import slide01 from "image/slide01.png";
import slide02 from "image/slide02.png";
import slide03 from "image/slide03.png";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function WelfareSlide(props) {
    return (
    <Swiper
      // modules={[Pagination, Autoplay]}
      // spaceBetween={50}
      // slidesPerView={1}
      // navigation
      // pagination={{clickable : true}}
      // autoplay= {{delay:2000}}
      className='slide-container'>
        
            <SwiperSlide><img src={slide01} alt="복지슬라이드01" className="slide" /></SwiperSlide>
            <SwiperSlide><img src={slide02} alt="복지슬라이드02" className="slide" /></SwiperSlide>
            <SwiperSlide><img src={slide03} alt="복지슬라이드03" className="slide" /></SwiperSlide>
     </Swiper>

    );
}

export default WelfareSlide;