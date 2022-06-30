import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);

export default function AwardSlider() {
    return (
        <Swiper
            freeMode={false}
            watchSlidesProgress={true}
            watchOverflow={true}
            loop={true}
            autoplay={{
                "delay": 3500,
                "disableOnInteraction": false
            }}
            breakpoints={{
                "320": {
                    "slidesPerView": 2
                },
                "768": {
                    "slidesPerView": 4,
                },
                "1024": {
                    "slidesPerView": 6
                }
            }}
        >
            <SwiperSlide><div className="item"><img src="/Layout/award-1.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
            <SwiperSlide><div className="item"><img src="/Layout/award-2.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
            <SwiperSlide><div className="item"><img src="/Layout/award-3.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
            <SwiperSlide><div className="item"><img src="/Layout/award-4.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
            <SwiperSlide><div className="item"><img src="/Layout/award-5.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
            <SwiperSlide><div className="item"><img src="/Layout/award-6.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
            {/* <SwiperSlide><div className="item"><img src="/Layout/award-8.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide> */}
            <SwiperSlide><div className="item"><img src="/Layout/award-9.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
            <SwiperSlide><div className="item"><img src="/Layout/award-10.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
            <SwiperSlide><div className="item"><img src="/Layout/award-11.png" alt="RightFX Awards" className="img-fluid w-100" /></div></SwiperSlide>
        </Swiper>
    )
}