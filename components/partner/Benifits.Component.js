import { Container, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function Benifits() {
    const { t } = useTranslation('markets');
    return (
        <div className="benefits">
            <Container>
                <Row>
                    <Col xs="12" className="text-center">
                        <div className="title">
                            <h2 dangerouslySetInnerHTML={{ __html: t('Benefits of partnering with RightFX') }}></h2>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="4" sm="6">
                        <div className="item">
                            <img src="/Trading/BENEFITS ICONS-01.svg" alt="RightFX Partner" className="img-fluid" />
                            <h5 dangerouslySetInnerHTML={{ __html: t('Dedicated Account Manager') }}></h5>
                        </div>
                    </Col>
                    <Col md="4" sm="6">
                        <div className="item">
                            <img src="/Trading/BENEFITS ICONS-02.svg" alt="RightFX Partner" className="img-fluid" />
                            <h5 dangerouslySetInnerHTML={{ __html: t('Marketing Support') }}></h5>
                        </div>
                    </Col>
                    <Col md="4" sm="6">
                        <div className="item">
                            <img src="/Trading/BENEFITS ICONS-03.svg" alt="RightFX Partner" className="img-fluid" />
                            <h5 dangerouslySetInnerHTML={{ __html: t('CUSTOMIZABLE FEE STRUCTUREs') }}></h5>
                        </div>
                    </Col>
                    <Col md="4" sm="6">
                        <div className="item">
                            <img src="/Trading/BENEFITS ICONS-04.svg" alt="RightFX Partner" className="img-fluid" />
                            <h5 dangerouslySetInnerHTML={{ __html: t('Full pledged partner portal') }}></h5>
                        </div>
                    </Col>
                    <Col md="4" sm="6">
                        <div className="item">
                            <img src="/Trading/BENEFITS ICONS-05.svg" alt="RightFX Partner" className="img-fluid" />
                            <h5 dangerouslySetInnerHTML={{ __html: t('Reliable payment schedule') }}></h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}