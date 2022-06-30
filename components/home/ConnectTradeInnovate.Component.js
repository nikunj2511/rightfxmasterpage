import { Row, Col, Container, Button } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import { languages } from '../../helpers/Constants';
import { useRouter } from 'next/router';

export default function ConnectTradeInnovate() {
    const { t } = useTranslation('home');
    const router = useRouter();
    const isRTL = languages.filter(x => x.code === router.locale)[0].isRtl;
    const margin = isRTL ? { position: "marginRight" } : { position: "marginLeft" }
    return (
        <div className="cti" id="s7">
            <Container>
                <Row className=" justify-content-center text-center">
                    <Col xs="12">
                        <div className="title">
                            <h1>{t('Connect_Trade_Innovate')}</h1>
                            <p dangerouslySetInnerHTML={{ __html: t('Tailor made for today’s generations of traders') }} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <div className="cti-holder">
                            <img src="/Home/Copy-Trade.png" alt="" className="img-fluid" />
                            {/* <div className="key-point left">
                                <h4 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000">{t('Clean & modern layout')}</h4>
                                <img src="/Home/left-point.png" alt="" className="img-fluid img-flip" style={{ "width": "90%" }} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" />
                            </div>
                            <div className="key-point text-end right">
                                <h4 className="lt-arabic-txt" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000">{t('Easy to customize')}</h4>
                                <img src="/Home/right-point.png" alt="" className="img-fluid img-flip" style={{ "width": "72%" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" />
                            </div> */}
                            <div className="text-center button-holder">
                                <Button veriant="primary" className="btn-lg" href="https://portal.rightfx.com/register">{t('Copy Trade with RightFX')}</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}