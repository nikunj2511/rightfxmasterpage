import { Container, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function Features() {
    const { t } = useTranslation('markets');
    return (
        <div className="features ltr">
            <Container>
                <Row>
                    <Col xs="12" className="text-center">
                        <div className="title">
                            <h2 dangerouslySetInnerHTML={{ __html: t('Check Our IB Features') }}></h2>
                        </div>
                    </Col>
                </Row>
                <div className="dashboard-features">
                    <img src="/Trading/PARTNER-CP.png" alt="RightFX Partner" className="partner-dashboard" />
                    <Row className="justify-content-around">
                        <Col lg="3">
                            <div className="item">
                                <h4 dangerouslySetInnerHTML={{ __html: t('Informative Dashboard') }}></h4>
                                <p>{t('Our dashboard display all information related to leads')}</p>
                                <img src="/Trading/feature-point-1.png" alt="RightFX Partner" className="img-fluid free1" />
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="item text-end">
                                <h4 dangerouslySetInnerHTML={{ __html: t('Custom Campaigns') }}></h4>
                                <p>{t('You can create a custom onboarding campaigns')}</p>
                                <img src="/Trading/feature-point-2.png" alt="RightFX Partner" className="img-fluid free2" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-around">
                        <Col lg="3">
                            <div className="item">
                                <h4>{t('Quick Actions')}</h4>
                                <p>{t('Quick actions to do all your admin')}</p>
                                <img src="/Trading/feature-point-3.png" alt="RightFX Partner" className="img-fluid free3" />
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="item text-end">
                                <h4>{t('Risk Free')}</h4>
                                <p>{t('We have a strong reporting system')}</p>
                                <img src="/Trading/feature-point-4.png" alt="RightFX Partner" className="img-fluid free4" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}