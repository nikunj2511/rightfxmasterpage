import { Container, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import { languages } from '../../helpers/Constants';
import { useRouter } from 'next/router';
export default function Offices() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const isRTL = languages.filter(x => x.code === router.locale)[0].isRtl;
      
    return (
        <div className="offices">
            <Container>
                <Row>
                    <Col xs="12">
                        <h2>{t('company-profile:Offices')}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <div className="office-location">
                            <div className="flag-icon"><img src="/Company/SV-FLAG.jpg" alt="RightFX Company Profile" className="img-fluid" /></div>
                            <div className="office-address">
                                <h5>{t('Saint Vincent office')}</h5>
                                <address dangerouslySetInnerHTML={{ __html: t('Saint Vincent Address').replace('<br/>', '') }}></address>
                                <p dangerouslySetInnerHTML={{ __html: t('Saint Vincent Details') }}></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="office-location">
                            <div className="flag-icon"><img src="/Company/UAE-FLAG.jpg" alt="RightFX Company Profile" className="img-fluid" /></div>
                            <div className="office-address">
                                <h5>{t('UAE office')}</h5>
                                <address dangerouslySetInnerHTML={{ __html: t('UAE Address').replace('<br/>', '') }}></address>
                                <p dangerouslySetInnerHTML={{ __html: t('UAE Details') }}></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}