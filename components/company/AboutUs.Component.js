import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function AboutUs() {
    const { t } = useTranslation('company-profile');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="about-us-v2">
                <div className="about-info">
                    <Container>
                        <Row className='mb-4'>
                            <Col className='col-12 col-lg-5'>
                                <h1>{t('About us')}</h1>
                            </Col>
                            <Col className='col-12 col-lg-7'>
                                <p dangerouslySetInnerHTML={{ __html: t('Profile 01') }} ></p>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col className='col-12 col-lg-5'>
                                <h1>{t('Right Mission')}</h1>
                            </Col>
                            <Col className='col-12 col-lg-7'>
                                <p>{t('Mission')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-12 col-lg-5'>
                                <h1>{t('Right Vision')}</h1>
                            </Col>
                            <Col className='col-12 col-lg-7'>
                                <p>{t('Vision')}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='partnering-benefits'>
                    <div className="video-img">
                        <img src="/Company/v2/VIdeo-image.jpg" width="100%" height="100%" ></img>
                    </div>
                    {/* <Container>
                        <h2 className='text-center'>
                            benefits of partnering with RightFX
                        </h2>
                        <div className='benefits-container'>
                            <div className='item'>
                                <img src="/Company/v2/icon-money.svg" width={90} height={90}></img>
                                <h6 className='mt-4 mb-3'>
                                    PROFESSIONAL CONDITIONS
                                </h6>
                                <p>
                                    We provide the proper trading environment to the clients.
                                    we offer tight spreads, High quality order execution, No commission on deposits
                                    and withdrawls and wide selection of instruments as we believe that these are the base of the best
                                    trading strategies.
                                </p>
                            </div>
                            <div className='item'>
                                <img style={{ transform: "scale(1.5)" }} src="/Company/v2/icon-trust-01.svg" width={90} height={90}></img>
                                <h6 className='mt-4 mb-3'>
                                    RELIABILITY
                                </h6>
                                <p>
                                    The credibility of RightFX has stood the test of time. We guarantee the protection
                                    of the funds of our customers, and promptly fulfill our financial obligations.
                                </p>
                            </div>
                            <div className='item'>
                                <img src="/Company/v2/icon--service-01.svg" width={90} height={90}></img>
                                <h6 className='mt-4 mb-3'>
                                    CONVENIENT SERVICE
                                </h6>
                                <p>
                                    Our clients are the at most priority and therefore we comply with all the standards
                                    whether its about the professional client support that we offer or localised version
                                    of our website, we also offer the convenient payment system for the client and make sure
                                    that clients can easily and securely make deposits and withdrawls.
                                </p>
                            </div>
                        </div>
                        <div className='benefits-container'>
                            <div className='item'>
                                <img src="/Company/v2/icon-trans.svg" width={90} height={90}></img>
                                <h6 className='mt-4 mb-3'>
                                    TRANSPARENCY
                                </h6>
                                <p>
                                    The manner RightFX works is very simple as we provide the clear picture to our clients.
                                    We believe in integrity and transparency as we comply with legal requirements.
                                </p>
                            </div>
                            <div className='item'>
                                <img src="/Company/v2/icon-quality.svg" width={90} height={90}></img>
                                <h6 className='mt-4 mb-3'>
                                    QUALITY
                                </h6>
                                <p>
                                    Our constant approach is on the quality of our services offered to the clients.
                                    We focus more on improving and expanding the services.
                                </p>
                            </div>
                            <div className='item'>
                                <img src="/Company/v2/icon-access.svg" width={90} height={90}></img>
                                <h6 className='mt-4 mb-3'>
                                    ACCESSIBILITY
                                </h6>
                                <p>
                                    Our services can be easily accessible by the ones who want to start forex trading as there are no
                                    commissions for deposits and withdrawls and also there is no minimum deposit for the basic accounts.
                                </p>
                            </div>
                        </div>
                    </Container> */}
                </div>

                {/*<Container>
                    <Row>
                        <Col lg="6" className="p-0">
                            <div className="about-info">
                                <h2>{t('About us')}</h2>
                                <p>{t('Profile 01')}</p>
                                <p>{t('Profile 02')}</p>
                                <h4>{t('Right Mission')}</h4>
                                <p>{t('Mission')}</p>
                                <h4>{t('Right Vision')}</h4>
                                <p>{t('Vision')}</p>
                            </div>
                        </Col>
                        <Col lg="6" className="p-0">
                            <div className="company-video">
                                <img src="/Company/company-video-bg.jpg" alt="RightFX Company Profile" />
                                <a onClick={() => handleShow()} className="play-video cursor-pointer"><img src="/Company/play-btn.png" alt="RightFX Company Profile" className="img-fluid" /></a>
                            </div>
                        </Col>
                    </Row> 
                </Container>*/}
            </div>

            {/* 
            <Modal show={show} onHide={handleClose} size="lg" centered className="company-modal">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/rTbSFuN6VqQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Modal.Body>
            </Modal> */}
        </>
    )
}