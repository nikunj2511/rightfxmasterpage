import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation';
import { faCertificate, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Offers() {
    const { t } = useTranslation();
    const handleActive = (e) => {
        if (document.querySelector('.offers-item-active') !== e.currentTarget)
            document.querySelector('.offers-item-active').classList.remove('offers-item-active')
        e.currentTarget.classList.add('offers-item-active')
    }
    return (
        <div className='offers'>
            <Container className='title text-center bg1 items-container pb-5'>
                <h1>
                    {t('Why RightFX')}
                </h1>
                <p className='pb-5'>
                    {t('RightFx forex brokers are trustworthy and skillful, therefore your traders will earn more on account of all skill levels. This is going to happen due to:')}
                </p>
                <Row>
                    <Col className='col-12 offset-md-2 col-md-8 col-lg-4 my-2'>
                        <div className='item p-3 ps-4 offers-item-active' onMouseEnter={handleActive}>
                            <div>
                                <img src="/Icons-Banners/company/comission.png"></img>
                            </div>
                            <div className='mx-4 mt-2'>
                                <h5>{t('No Comission')}</h5>
                                <p className='mb-0'>
                                    {t('No fees are required on deposit and withdrawal.')}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 offset-md-2 offset-lg-0 col-lg-4 col-md-8 my-2'>
                        <div className='item p-3 ps-4' onMouseEnter={handleActive}>
                            <img src="/Icons-Banners/company/swap.png"></img>
                            <div className='mx-4 mt-2'>
                                <h5>{t('No Swaps')}</h5>
                                <p className='mb-0'>
                                    {t('No interests earned or paid for keeping a trade open overnight.')}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className='col-12 offset-md-2 col-md-8 col-lg-4 my-2'>
                        <div className='item p-3 ps-4' onMouseEnter={handleActive}>
                            <img src="/Icons-Banners/company/slipping.png"></img>
                            <div className='mx-4 mt-2'>
                                <h5>{t('No Slippage')}</h5>
                                <p className='mb-0'>
                                    {t('Trades are executed at the rate you see. you will never be surprised by a spread change during volatility.')}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 offset-md-2 offset-lg-0 col-lg-4 col-md-8 my-2'>
                        <div className='item p-3 ps-4' onMouseEnter={handleActive}>
                            <img src="/Icons-Banners/company/nodelay.png"></img>
                            <div className='mx-4 mt-2'>
                                <h5>{t('No Delays')}</h5>
                                <p className='mb-0'>
                                    {t('No latency, orders executed faster than your competitors.')}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-12 offset-md-2 col-md-8 col-lg-4 my-2'>
                        <div className='item p-3 ps-4' onMouseEnter={handleActive}>
                            {/* <img src="/Icons-Banners/company/slipping.png"></img> */}
                            <div className='my-auto'>
                                <FontAwesomeIcon icon={faCertificate} style={{ fontSize: "2.9em" }} />
                            </div>
                            <div className='mx-4 mt-2'>
                                <h5>{t('Regulation')}</h5>
                                <p className='mb-0'>
                                    {t('Saint Vincent and Grenadines, and UAE.')}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 offset-md-2 offset-lg-0 col-lg-4 col-md-8 my-2'>
                        <div className='item p-3 ps-4' onMouseEnter={handleActive}>
                            {/* <img src="/Icons-Banners/company/nodelay.png"></img> */}
                            <div className='my-auto'>
                                <FontAwesomeIcon icon={faUserShield} style={{ fontSize: "2.3em" }} />
                            </div>
                            <div className='mx-4 mt-2'>
                                <h5>{t('Your Funds Are In Safe Hands')}</h5>
                                <p className='mb-0'>
                                    {t('Deposits are separate from operating funds. If you’re in a volatile market, we offer extra protection for you!')}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
