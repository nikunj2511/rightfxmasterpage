import { Container, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function ExchangeTradeFeatures() {
    const { t } = useTranslation('markets');
    return (
        <div className="exchange-trade-features">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs="10">
                        <div className="title">
                            <h1 dangerouslySetInnerHTML={{ __html: t('Exchange Trade Features') }}></h1>
                            <p>{t('In addition to Contract for Differences on Futures Markets')}</p>
                            <p>{t('Through our fully manned dealing desk clients have access')}</p>
                            <p>{t('Futures contracts provide a highly liquid')}</p>
                            {/* <p><a href="mailto:dealers@rightfx.com" className="fw-bold">mail: dealers@rightfx.com </a></p> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}