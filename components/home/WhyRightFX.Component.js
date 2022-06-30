import { useState, useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import WhyRightFXItem from './WhyRightFXItem.Component';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Row, Col, Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation'

import bookAnim from '../lottie/home/book.json';
import fundingAnim from '../lottie/home/ac-funding.json';
import comparisionAnim from '../lottie/home/ac-comp.json';
import supportAnim from '../lottie/home/support.json';
import withdrawalAnim from '../lottie/home/withdrawal.json';

// install Swiper modules
SwiperCore.use([Autoplay]);

const lottieStyle = {
    width: 300,
    height: 300,
    border:1
}

const swiperData = [{
    title: 'Accounts Comparison',
    titleColor: 'red',
    description: 'Accounts Comparison Description',
    lottie: comparisionAnim,
    icon: '/Home/ac-icon.png',
    link: '/'
},
{
    title: 'Withdrawal',
    titleColor: 'purple',
    description: 'Withdrawal Description',
    lottie: withdrawalAnim,
    icon: '/Home/wi-icon.png',
    link: '/'
},
{
    title: 'Account Funding',
    titleColor: 'yellow',
    description: 'Account Funding Description',
    lottie: fundingAnim,
    icon: '/Home/af-icon.png',
    link: '/'
}, {
    title: 'Customer Support',
    titleColor: 'blue',
    description: 'Customer Support Description',
    lottie: supportAnim,
    icon: '/Home/cs-icon.png',
    link: '/'
}, {
    title: 'Trading Academy',
    titleColor: 'green',
    description: 'Trading Academy Description',
    icon: '/Home/ta-icon.png',
    lottie: bookAnim,
    link: '/'
}];

export default function WhyRightFX() {
    const { t } = useTranslation('home');
    const [activeInd, setActiveInd] = useState(0);

    const lottieRef = useRef(null)

    useEffect(() => {
       if (swiperData[activeInd].lottie && lottieRef.current) {
           lottieRef.current.setSpeed(0.5);
           setTimeout(() => lottieRef.current.play(), 500);
       }
       hideSectionHandle();
    }, [activeInd])
    const hideSectionHandle=(()=>{
        let divClass = document.getElementsByClassName('training-acedemy');
        if(window.innerWidth < 600){
            divClass[0].style.display="none"
        }
        else{
            divClass[0].style.removeProperty='display'
        }
    });
useEffect(()=>{
window.addEventListener('resize',hideSectionHandle)
});
    return (
        <div className="training-acedemy" id="s3">
            <Container>
                <Row className="justify-content-evenly align-items-center">
                    <Col lg="5" className="text-center training-animation">
                        {
                          (swiperData[activeInd].lottie) && 
                          <div className="d-flex justify-content-center">
                            <Lottie animationData={swiperData[activeInd].lottie} autoplay={false} loop={false} style={lottieStyle} lottieRef={lottieRef} />
                          </div>
                        }
                        <h1 className={swiperData[activeInd].titleColor}><span>{t(swiperData[activeInd].title)}</span></h1>
                        <p>{t(swiperData[activeInd].description)}</p>
                    </Col>
                    <Col lg="5">
                        <div className="swiper-container-wrapper">
                            <div className="swiper-container gallery-thumbs swiper-container-initialized swiper-container-vertical swiper-container-pointer-events">
                                <Swiper
                                    centeredSlides={true}
                                    centeredSlidesBounds={true}
                                    direction="vertical"
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    freeMode={false}
                                    watchSlidesProgress={true}
                                    watchOverflow={true}
                                    loop={true}
                                    autoplay={{
                                        "delay": 3500,
                                        "disableOnInteraction": false
                                    }}
                                    onSlideChange={(e) => setActiveInd(e.realIndex)}
                                >
                                    {swiperData.length > 0 && swiperData.map((item, i) =>
                                        <SwiperSlide key={i}>
                                            <WhyRightFXItem
                                                title={t(item.title)}
                                                titleColor={item.titleColor}
                                                description={t(item.description)}
                                                icon={item.icon}
                                                link={item.link}
                                            />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}