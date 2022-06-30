import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MarketTable from '../components/market/MarketTable.Component';
import TopStaticCarousel from '../components/common/TopStaticCarousel.Component';
import TopCarouselOverlay from '../components/market/TopCarouselOverlay.Component';
import TopTabItem from '../components/market/TopTabItem.Component';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function EnergiesMarket() {
    const { t } = useTranslation('markets');
    return (
        <>
            <TopStaticCarousel
                image='/Partnership/WHITE-LABEL-BG.jpg'
                title={<label dangerouslySetInnerHTML={{ __html: t('White_Label_Title') }}></label>}
                description={t('White_Label_Title_Description')}
                position='center'
                noButton={true}
            />
            {/* <TopCarouselOverlay image='/Market/energies-overlay.png' /> */}
            <div className="white-label-points">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col xs={10}>
                            <div className="title">
                                <h1>{t('How it works')}</h1>
                            </div>
                        </Col>
                    </Row>
                    <div className="row justify-content-center text-center">
                        <Col md="6" xl="6">
                            <div className="item">
                                <Col md="2">
                                    <div>
                                        <span>1</span>
                                    </div>
                                </Col>
                                <Col md="10">
                                    <h3>{t('Tell us which platforms and instruments')}
                                    </h3>
                                </Col>
                            </div>
                        </Col>
                        <Col md="6" xl="6">
                            <div className="item">
                                <Col md="2">
                                    <div>
                                        <span>2</span>
                                    </div>
                                </Col>
                                <Col md="10">
                                    <h3>{t('Provide your KYC documents and sign the contract with us')}
                                    </h3>
                                </Col>
                            </div>
                        </Col>
                        <Col md="6" xl="6">
                            <div className="item">
                                <Col md="2">
                                    <div>
                                        <span>3</span>
                                    </div>
                                </Col>
                                <Col md="10">
                                    <h3>{t('We`ll provide you with a web API')}
                                    </h3>
                                </Col>
                            </div>
                        </Col>
                        <Col md="6" xl="6">
                            <div className="item">
                                <Col md="2">
                                    <div>
                                        <span>4</span>
                                    </div>
                                </Col>
                                <Col md="10">
                                    <h3>{t('Start onboarding clients and run your venture')}
                                    </h3>
                                </Col>
                            </div>
                        </Col>
                    </div>
                </Container>
            </div>
            <div className="platfrom favShares whit-label-tble">
                <Container>
                    <Row className="justify-content-evenly">
                        <Col lg="5" className="d-flex flex-column">
                            <h2 className='mb-5'>{t('What is included in the RightFX White Label partnership')}</h2>
                            <ul>
                                <li className='mb-4'> {t('MetaTrader 4 and 5 trading platforms - Desktop, Mobile and WebTrader')}</li>
                                {/* <li>{t('Customisable spreads from 0.0 pips')}</li> */}
                                <li className='mb-4'>{t('Several business models available')}</li>
                                <li className='mb-4'>{t('500+ instruments including FX, CFDs on indices, commodities')}</li>
                                <li className='mb-4'>{t('Start in just 2 weeks')}</li>
                            </ul>
                        </Col>
                        <Col lg="6" className={`ltr position-relative`}>
                            <div className="platImageHolder">
                                <img src="/Partnership/CREATIVE-WHITE-LABEL.png" alt="RightFX Platform Traders" className="img-fluid favSharesImg" />
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />

                </Container>
                <Container className='mt-5'>
                    <Row className="justify-content-evenly text-centre">
                        <Col lg="10">
                            <Link href="/contact-us"><button className="btn btn-info btn-lg wl-btn">{t('Lets Talk!')}</button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
