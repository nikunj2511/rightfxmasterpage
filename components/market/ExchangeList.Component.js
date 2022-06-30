import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

const ListItems = [
    { label: 'DGCX', value: 'Dubai Gold and Commodity Exchange' },
    { label: 'LME', value: 'London Metal Exchange' },
    { label: 'DME', value: 'Dubai Mercantile Exchange' },
    { label: 'LSE', value: 'London Stock Exchange' },
    { label: 'EDX', value: 'Equity Derivatives Market' },
    { label: 'ME', value: 'Montreal Exchange' },
    { label: 'EUREX', value: 'Euronext Amsterdam Euronext Brussels Euronext LIFFE Euronext Paris' },
    { label: 'FVVB', value: 'Frankfurt Stock Exchange' },
    { label: 'MEFF', value: 'Spanish Futures Exchange' },
    { label: 'NYBOT', value: 'New York Board of Trade' },
    { label: 'HKEX', value: 'Hong Kong Futures Exchange' },
    { label: 'NYSE', value: 'New York Stock Exchange' },
    { label: 'HSE', value: 'Hong Kong Stock Exchange' },
    { label: 'SAFEX', value: 'South African Futures Exchange' },
    { label: 'ICE', value: 'Intercontinental Exchange' },
    { label: 'SFE', value: 'Sydney Futures Exchange' },
    { label: 'IDEM', value: 'Italian Derivative Exchange Market' },
    { label: 'SGX', value: 'Singapore Futures Exchange' },
    { label: 'IMAREX', value: 'Tokyo Commodity Exchange' },
    { label: 'TOCOM', value: 'International Maritime Exchange' },
    { label: 'TSX', value: 'Toronto Stock Exchange' },
]

const ExchangeListItem = (props) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control readOnly type="text" value={props.value} />
        </Form.Group>
    );
}

export default function ExchangeList() {
    const { t } = useTranslation('markets');
    return (
        <div className="exchange-list mt-5">
            <Container>
                <Row>
                    <Col xs="12">
                        <Card className='red-card'>
                            <Card.Header className="text-center bg-light card-header h2 fw-500 p-3"><span className="fw-300">{t('List of')}</span> {t('Exchange')}</Card.Header>
                            <Card.Body>
                                <Row>
                                    {ListItems.length > 0 && ListItems.map((item, i) =>
                                        <Col md="6" key={i} className="px-lg-4">
                                            <ExchangeListItem label={t(item.label)} value={t(item.value)} />
                                        </Col>
                                    )}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}