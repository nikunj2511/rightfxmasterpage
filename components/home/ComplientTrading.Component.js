import { Row, Col, Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation'
import { useEffect } from 'react';
export default function ComplientTrading() {
    const { t } = useTranslation('home');
    const handleActive = (e) => {
        if (document.querySelector('.exclusive-tools-active') !== e.currentTarget)
            document.querySelector('.exclusive-tools-active').classList.remove('exclusive-tools-active')
        e.currentTarget.classList.add('exclusive-tools-active')
    }
    const hideSectionHandle = (() => {
        let divClass = document.getElementsByClassName('exclusive-tools');
        if (window.innerWidth < 600) {
            divClass[0].style.display = "none"
        }
        else {
            divClass[0].style.display = "block"
            // divClass[0].style.removeProperty = 'display'
        }
    });
    useEffect(() => {
        hideSectionHandle();
        window.addEventListener('resize', hideSectionHandle)
    });
    return (
        <div className="exclusive-tools" id="s4">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs={10}>
                        <div className="title">
                            <h1>{t('RightFX Tools')}</h1>
                            <p>{t('Exclusive tools to complement your trading process')} <br />
                                {/* {t('Sign up to RightFX and be part of a growing trading family from the four corners of the planet')} */}
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className="row justify-content-center text-center">
                    <Col>
                        <div className="item exclusive-tools-active" onMouseEnter={handleActive}>
                            <img src="/Home/et-1.png" alt="RightFX Complient Trading" />
                            <h3>{t('Ecomomic')} & <br /> {t('Earnings')} <br /> {t('Calendars')}</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="item" onMouseEnter={handleActive}>
                            <img src="/Home/et-2.png" alt="RightFX Complient Trading" />
                            <h3>{t('Webinars')}</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="item" onMouseEnter={handleActive}>
                            <img src="/Home/et-3.png" alt="RightFX Complient Trading" />
                            <h3>{t('Daily Market')} <br /> {t('News')}</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="item" onMouseEnter={handleActive}>
                            <img src="/Home/et-4.png" alt="RightFX Complient Trading" />
                            <h3>{t('Educational')} <br /> {t('Resources')}</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="item" onMouseEnter={handleActive}>
                            <img src="/Home/et-5.png" alt="RightFX Complient Trading" />
                            <h3>{t('RightFX')} <br /> {t('VPS and more')}</h3>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    )
}