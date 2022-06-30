import { Container, Row, Col, Carousel } from 'react-bootstrap';

export default function MetaTrader({ image, carouselData }) {
    return (
        <section className="py-5">
            <Container className="ps-ms-0 text-slider">
                <Row>
                    {/* <Col xs={5} lg={6} className="img-flip">
                        <img src="/Trading/MetaTrade5-Features.png" alt="RightFX MT5-Desktop" className="img-fluid d-none d-lg-block" />
                        <img src="/Trading/MetaTrade5-Features-half.png" alt="RightFX MT5-Desktop" className="img-fluid d-block d-lg-none" />
                    </Col>
                    <Col xs={7} lg={6} className="d-flex align-items-center">
                        <div>
                            <h1 className="fw-normal">
                                {props.title}
                            </h1>
                            <p>
                                Download for free to take advantage of all the benefits it has to offer in conjunction with the RightFX MT5 Trading account.
                            </p>
                        </div>
                    </Col> */}
                    <Col xs="12" md="5" className="text-center">
                        <img src={image} alt="RightFX Trading" className="img-fluid ms-auto" />
                    </Col>
                    <Col xs="12" md="7">
                        <Carousel fade controls={false} indicators={false}>
                            {carouselData && carouselData.length > 0 ?
                                carouselData.map((item, count) =>
                                    <Carousel.Item key={count}>
                                        <Carousel.Caption>
                                            <h1 className="fw-normal">
                                                {item.title}
                                            </h1>
                                            <p>
                                                {item.description}
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                                :
                                <></>
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}