import { useState, useRef } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

const platformIamges = [
    "/Home/LAPTOP-DESKTOP-TRADING.png",
    "/Home/mobile-trading.png",
    "/Home/CLIENT-PORTAL-PLTFRM.png",
    "/Home/WEB-TRADER.png"
]

export default function PlatformTraders() {
    const { t } = useTranslation('home');
    const handleActive = (e) => {
        if (document.querySelector('.platfrom-active') !== e.currentTarget)
            document.querySelector('.platfrom-active').classList.remove('platfrom-active')
        e.currentTarget.classList.add('platfrom-active')
    }
    const [platform, setPlatform] = useState(1);
    const [platformSrc, setPlatformSrc] = useState('/Home/mobile-trading.png');
    const platformRef = useRef();
    const [platformClass, setPlatformClass] = useState('img-platmob');
    const onClickPlatformHandle = (e, index) => {
        let platformClass = "";
        let platformSrc = "";
        let pltRef = platformRef.current;
        pltRef.style.display = 'none'
        // 
        switch (index) {
            case 0:
                platformClass = "img-desktp-trad-pltform";
                platformSrc = "/Home/LAPTOP-DESKTOP-TRADING.png"
                break;
            case 1:
                platformClass = "img-platmob";
                platformSrc = "/Home/mobile-trading.png"
                break; case 2:
                platformClass = "img-client-prtal-pltform";
                platformSrc = "/Home/CLIENT-PORTAL-PLTFRM.png"
                break; case 3:
                platformClass = "img-web-tradng-pltform";
                platformSrc = "/Home/WEB-TRADER.png"
                break;
            default:
                platformClass = "img-fluid";
                platformSrc = "/Home/mobile-trading.png"
                break;
        }

        //   let platform = platformRef.current;
        //   if(platform.classList.contains('img-fluid')){
        //     platform.classList.remove('img-fluid');
        //     platform.classList.remove('img-fluid');
        //   }
        setTimeout(() => {
            setPlatformClass(platformClass);
            setPlatformSrc(platformSrc);
            pltRef.style.display = 'unset';
        }, 100)
    }
    return (
        <div className="platfrom" id="s5">
            <Container>
                <Row className="justify-content-evenly">
                    <Col lg="5" className="d-flex flex-column">
                        <h4>{t('A Platform for Today’s Traders')}</h4>
                        <p dangerouslySetInnerHTML={{ __html: t('RightFX operates') }}></p>
                        <div className="platfrom-icons mt-auto mb-5 mb-sm-0">
                            <div>
                                <img src="/Home/MT5.png" alt="RightFX Platform Traders" style={{ width: '13%' }} />
                                <a target="_blank" rel="noreferrer" href="https://download.mql5.com/cdn/mobile/mt5/android?server=RightFXLimited-Demo,RightFXLimited-Live" className="mx-2 mx-sm-4"><img src="/Home/ico-android.png" alt="RightFX Platform Traders" /></a>
                                <a target="_blank" rel="noreferrer" href="https://download.mql5.com/cdn/mobile/mt5/ios?server=RightFXLimited-Demo,RightFXLimited-Live" className="mx-2 mx-sm-4"><img src="/Home/ico-apple.png" alt="RightFX Platform Traders" /></a>
                                <a target="_blank" rel="noreferrer" href="https://download.mql5.com/cdn/web/rightfx.limited/mt5/rightfxlimited5setup.exe" className="mx-2 mx-sm-4"><img src="/Home/ico-windows.png" alt="RightFX Platform Traders" /></a>
                                <a target="_blank" rel="noreferrer" href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg?server=RightFXLimited-Demo,RightFXLimited-Live" className="mx-2 mx-sm-4"><img src="/Home/ico-macos.png" alt="RightFX Platform Traders" /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" className={`ltr ${platform === 0 || 1 || 2 ? 'position-relative' : ''}`}>
                        {/* <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" className="platImageHolder"> */}
                        <div className="platImageHolder">
                            <img ref={platformRef} src={platformSrc} alt="RightFX Platform Traders" className={platformClass} />
                        </div>
                    </Col>
                </Row>
                <Row className="py-5 position-relative platfrom-boxes" style={{ zIndex: 5 }}>
                    <Col lg="3" md="6" xs="6">
                        <a className="text-decoration-none cursor-pointer" onClick={() => setPlatform(0), (e) => onClickPlatformHandle(e, 0)}>
                            <div className="item" onMouseEnter={handleActive}>
                                <img src="/Home/p-1.png" alt="RightFX Platform Traders" className="img-fluid" />
                                <h6 dangerouslySetInnerHTML={{ __html: t('Desktop trading platform') }}></h6>
                            </div>
                        </a>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <a className="text-decoration-none cursor-pointer" onClick={() => setPlatform(1), (e) => onClickPlatformHandle(e, 1)}>
                            <div className="item platfrom-active" onMouseEnter={handleActive}>
                                <img src="/Home/p-2.png" alt="RightFX Platform Traders" className="img-fluid" />
                                <h6 dangerouslySetInnerHTML={{ __html: t('Mobile Trading APPS') }}></h6>
                            </div>
                        </a>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <a className="text-decoration-none cursor-pointer" onClick={() => setPlatform(3), (e) => onClickPlatformHandle(e, 3)}>
                            <div className="item" onMouseEnter={handleActive}>
                                <img src="/Home/p-4.png" alt="RightFX Platform Traders" className="img-fluid" />
                                <h6 dangerouslySetInnerHTML={{ __html: t('Web Trading Platform') }}></h6>
                            </div>
                        </a>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <a className="text-decoration-none cursor-pointer" onClick={() => setPlatform(2), (e) => onClickPlatformHandle(e, 2)}>
                            <div className="item" onMouseEnter={handleActive}>
                                <img src="/Home/p-3.png" alt="RightFX Platform Traders" className="img-fluid" />
                                <h6 dangerouslySetInnerHTML={{ __html: t('Client Portal') }}></h6>
                            </div>
                        </a>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}