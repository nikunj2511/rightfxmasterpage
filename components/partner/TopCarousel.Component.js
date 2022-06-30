import { Container, Row, Col } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function TopCarousel(props) {
    const { t } = useTranslation('markets');
    return (
        <div className="hero-slider-static style5">
            <img src="/Trading/partners-banner-1.png" alt="RightFX Partner" className="img-fluid" />
            {!props.hideContent ==true?
            <div className="caption">
                <Container>
                    <Row>
                        <Col xs="12">
                            <h1 dangerouslySetInnerHTML={{ __html: t('Partner_Title') }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: t('Partner_Title_Description') }}></p>
                        </Col>
                    </Row>
                </Container>
            </div>:''}
        </div>
    )
}