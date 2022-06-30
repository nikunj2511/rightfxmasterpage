import { Container, Row, Col, Card } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function ExchangeQuickInfo() {
    const { t } = useTranslation('markets');
    return (
        <div className="exchange-list">
            <Container>
                <Row>
                    <Col xs="12">
                        <Card className='red-card'>
                            <Card.Header className="text-center bg-white card-header h2 fw-500"><span className="fw-300">{t('Quick')}</span> {t('Information')}</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md="4">
                                        <Card.Text className="mb-1"><strong><i className="bi bi-person me-2"></i>{t('Min Deposit')}: </strong>$250</Card.Text>
                                        <Card.Text className="mb-1"><strong><i className="bi bi-calendar-check me-2"></i>{t('Spreads From')}: </strong>{t('1 PIPS')}</Card.Text>
                                    </Col>
                                    <Col md="3" lg="4">
                                        <Card.Text className="mb-1"><strong><i className="bi bi-tag me-2"></i>{t('Min Income')}: </strong>{t('0_01 LOT')}</Card.Text>
                                        <Card.Text className="mb-1"><strong><i className="bi bi-geo-alt me-2"></i>{t('Leverage')}: </strong>{t('1_500')}</Card.Text>
                                    </Col>
                                    <Col md="5" lg="4">
                                        <Card.Text className="mb-1"><strong><i className="bi bi-clock me-2"></i>{t('Execution Less Than')}: </strong>{t('0_1 SEC')}</Card.Text>
                                        <Card.Text><strong><i className="bi bi-briefcase me-2"></i>{t('Funding')}: </strong>{t('Several Chennals')}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}