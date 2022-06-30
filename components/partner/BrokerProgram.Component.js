import { Container, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function BrokerProgram() {
    const { t } = useTranslation('markets');
    return (
        <div className="broker-program">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="title">
                            <h2 dangerouslySetInnerHTML={{ __html: t('RightFX Introducing Broker Program') }}></h2>
                        </div>
                    </Col>
                    <Col lg="7">
                        <p>{t('We offer financial institutions trading')}</p>
                        <p>{t('Our introducing broker program')}</p>
                    </Col>
                </Row>
                <img src="/Trading/broker-program.png" alt="RightFX Partner" className="img-fluid free img-flip" />
            </Container>
        </div>
    )
}