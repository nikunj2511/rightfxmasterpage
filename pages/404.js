import { Container, Row, Col } from 'react-bootstrap';
import TopStaticCarousel from '../components/common/TopStaticCarousel.Component';

export default function Custom404() {
    return (
        <>
            <TopStaticCarousel
                image='/Home/to-bg.jpg'
                title={<>404 <span>Page Not Found</span></>}
                description=''
                position='center'
                noButton={true}
            />
            {/* <div className="hero-slider-static style3" style={{ "backgroundImage": "url(/Home/to-bg.jpg)", "minHeight": "400px" }}>
            </div>
            <Container>
                <Row>
                    <Col className="py-5 text-center fw-300">
                        <h1>404 - Page Not Found</h1>
                    </Col>
                </Row>
            </Container> */}
        </>
    )
}