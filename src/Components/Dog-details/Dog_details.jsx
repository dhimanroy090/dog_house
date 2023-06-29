import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import slide1 from '../../assets/images/houses/house1.jpg'
import slide2 from '../../assets/images/houses/house2.jpg'
import slide3 from '../../assets/images/houses/house3.jpg'
import slide4 from '../../assets/images/houses/house4.jpg'
import slide5 from '../../assets/images/houses/house5.jpg'
import slide6 from '../../assets/images/houses/house6.jpg'


const Dog_details = () => {
    return (
        <div className="">
       <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-[500px] my-auto"
      >
        <SwiperSlide>
          <img className="w-1/2 h-[400px] m-auto" src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-1/2 h-[400px] m-auto" src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-1/2 h-[400px] m-auto" src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-1/2 h-[400px] m-auto" src={slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-1/2 h-[400px] m-auto" src={slide5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-1/2 h-[400px] m-auto" src={slide6} />
        </SwiperSlide>
       
      </Swiper>
    </div>
    );
};

export default Dog_details;