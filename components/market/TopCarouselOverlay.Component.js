import { Container } from 'react-bootstrap';

export default function TopCarouselOverlay(props) {
    return (
        <div className="free-overlay">
            <Container className="text-center">
                <img src={props.image} alt="RightFX Market" className={props.image == "/Market/exchange-overlay.png"?"marginTop35 img-fluid":"img-fluid" } />
            </Container>
        </div>
    )
}