import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';

export default function TopStaticCarousel(props) {
    const align = props.align ? props.align : 'center';

    return (
        <div className="hero-slider-static" style={{ "backgroundImage": "url(" + props.image + ")", ...props.customStyle }}>
            <div className={`caption ${props.position}`}>
                <Row className="justify-content-center">
                    <Col xs="12" className={`text-${align}`}>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        {!props.noButton &&
                            <Link href={props.buttonLink}><button className="btn btn-info btn-lg">{props.buttonText}</button></Link>
                        }
                        {props.extraSection &&
                            <div>{props.extraSection}</div>
                        }
                    </Col>
                </Row>
            </div>
        </div>
    )
}