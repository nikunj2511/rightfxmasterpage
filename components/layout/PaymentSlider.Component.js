import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);

const sliderData = [
    { imgSrc: "/Layout/PSP/1.png" },
    { imgSrc: "/Layout/PSP/2.png" },
    { imgSrc: "/Layout/PSP/3.png" },
    { imgSrc: "/Layout/PSP/4.png" },
    { imgSrc: "/Layout/PSP/5.png" },
    { imgSrc: "/Layout/PSP/6.png" },
    { imgSrc: "/Layout/PSP/7.png" },
    { imgSrc: "/Layout/PSP/8.png" },
    { imgSrc: "/Layout/PSP/9.png" },
    { imgSrc: "/Layout/PSP/10.png" },
    { imgSrc: "/Layout/PSP/11.png" },
    { imgSrc: "/Layout/PSP/12.png" },
    { imgSrc: "/Layout/PSP/13.png" }
]
export default function PaymentSlider() {
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
            {sliderData.map((slide, index) =>
                <SwiperSlide key={index}>
                    <div className="item item-s">
                        <img src={slide.imgSrc} alt="RightFX Payment Methods" className="img-fluid" />
                    </div>
                </SwiperSlide>
            )}
            {/* <SwiperSlide><div className="item item-s"><img src="/Layout/mastercard.png" alt="RightFX Payment Methods" className="img-fluid" /></div></SwiperSlide>
            <SwiperSlide><div className="item item-s"><img src="/Layout/wire-transfer.png" alt="RightFX Payment Methods" className="img-fluid" /></div></SwiperSlide>
            <SwiperSlide><div className="item item-s"><img src="/Layout/visa.png" alt="RightFX Payment Methods" className="img-fluid" /></div></SwiperSlide>
            <SwiperSlide><div className="item item-s"><img src="/Layout/neteller.png" alt="RightFX Payment Methods" className="img-fluid" /></div></SwiperSlide>
            <SwiperSlide><div className="item item-s"><img src="/Layout/mastercard-1.png" alt="RightFX Payment Methods" className="img-fluid" /></div></SwiperSlide>
            <SwiperSlide><div className="item item-s"><img src="/Layout/visa-secure.png" alt="RightFX Payment Methods" className="img-fluid" /></div></SwiperSlide>
            <SwiperSlide><div className="item item-s"><img src="/Layout/skrill.png" alt="RightFX Payment Methods" className="img-fluid" /></div></SwiperSlide>
            <SwiperSlide><div className="item item-s"><img src="/Layout/cashu.png" alt="RightFX Payment Methods" className="img-fluid" /></div></SwiperSlide> */}
        </Swiper>
    )
}