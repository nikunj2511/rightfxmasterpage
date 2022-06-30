import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';

export default function TradingOptions() {
    const { t } = useTranslation('home');
    const hideSectionHandle = (() => {
        let divClass = document.getElementsByClassName('trading-options');
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
        <div className="trading-options" id="s6">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs="10">
                        <div className="title">
                            {/* <h1>{t('A Spectrum of Trading Options')}</h1> */}
                            {/* <p dangerouslySetInnerHTML={{ __html: t('RightFX provides users with the possibility') }}></p> */}
                            <h1>{t('Trading Options')}</h1>
                            <p dangerouslySetInnerHTML={{ __html: t('Providing various trading options, in a range of financial products through one RightFX account') }}></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link href="/forex">
                            <a className="text-decoration-none">
                                <div className="item">
                                    <img src="/Home/to-1.png" alt="" className="img-fluid" />
                                    <h4>{t('common:Forex')}</h4>
                                    <p>{t('Currencies')}</p>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/metals-market">
                            <a className="text-decoration-none">
                                <div className="item">
                                    <img src="/Home/to-2.png" alt="" className="img-fluid" />
                                    <h4>{t('common:Metals')}</h4>
                                    <p>{t('Gold and Silver')}</p>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/indices-market">
                            <a className="text-decoration-none">
                                <div className="item">
                                    <img src="/Home/to-3.png" alt="" className="img-fluid" />
                                    <h4>{t('common:Indices')}</h4>
                                    <p>{t('DAX, Dow Jones, S&P, and more')}</p>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/energies-market">
                            <a className="text-decoration-none">
                                <div className="item">
                                    <img src="/Home/to-4.png" alt="" className="img-fluid" />
                                    <h4>{t('Energies')}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: t('US Crude, UK Brent, and Natural Gas') }}></p>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/stocks">
                            <a className="text-decoration-none">
                                <div className="item">
                                    <img src="/Home/to-5.png" alt="" className="img-fluid" />
                                    <h4>{t('Stocks')}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: t('Invest in Stock') }}></p>
                                </div>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}