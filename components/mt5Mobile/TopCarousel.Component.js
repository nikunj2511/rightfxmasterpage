import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

export default function TopCarousel() {
    return (
        <div className="hero-slider">
            <Carousel indicators={false} fade={true} controls={false} interval={3000} slide={true}>
                <Carousel.Item>
                    <img src="/Trading/MT4-MT5-Banner.png" className="d-block w-100" alt="RightFX MT5-Desktop" />
                    <Carousel.Caption className="pb-lg-5 pb-md-3 mb-lg-4 pb-0 mb-0">
                        <h1 className="fw-normal"><b>MT4 & MT5</b> Mobile</h1>
                        <p className="my-2 mt-md-3 mb-md-4">MT5 is regarded in the trading industry as a powerful tool by many traders around the world.</p>
                        <div className="d-flex align-item-center justify-content-center pt-md-4">
                            <div className="pe-4" >
                                <Link href="/"><a><img src="/Trading/WINDOWS.png" alt="RightFX MT5-Desktop Windows" className="img-fluid img-shad" /></a></Link>
                            </div>
                            <div>
                                <Link href="/"><a><img src="/Trading/IOS.png" alt="RightFX MT5-Desktop IOS" className="img-fluid img-shad" /></a></Link>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}