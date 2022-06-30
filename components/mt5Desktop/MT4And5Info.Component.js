import { Container, Row, Col } from 'react-bootstrap';

export default function MT4And5Info(props) {
    return (
        <section className="bg-grey-section pt-5 text-center">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-normal">
                            {props.title}
                        </h1>
                        <p>
                            {props.desc1}
                           <br />
                            {props.desc2}
                        </p>
                        <img src={props.image} alt="RightFX MT5-Desktop" className="img-fluid mt-2" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}