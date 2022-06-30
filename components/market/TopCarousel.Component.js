import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';

export default function TopCarousel(props) {
    return (
        <div className="hero-slider-static" style={{ "backgroundImage": "url(" + props.image + ")" }}>
            <div className={`caption ${props.isCenter ? 'center' : ''}`}>
                <Row className="justify-content-center">
                    <Col xs="12" className="text-center">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        {!props.noButton &&
                            <Link href={props.buttonLink}><button className="btn btn-info btn-lg">{props.buttonText}</button></Link>
                        }
                    </Col>
                </Row>
            </div>
        </div>
    )
}