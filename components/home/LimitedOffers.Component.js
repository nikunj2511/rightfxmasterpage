import LimitedOfferItem from './LimitedOfferItem.Component';
import { Row, Col, Container } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function LimitedOffers() {
    const { t } = useTranslation('home');

    return (
        <div className="offer" id="s8">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs="10">
                        <div className="title">
                            <h1>{t('The global leader of social trading')}</h1>
                            <p dangerouslySetInnerHTML={{ __html: t('Discover why millions of users from over countries choose to trade with RightFX') }}></p>
                        </div>
                    </Col>
                </Row>
                <Row className="">
                    <Col lg="4">
                        <LimitedOfferItem
                            image="/Home/bonus-offer.svg"
                            title={t('Regulated')}
                            description={t('Regulated Description')}
                            link="/"
                        />
                    </Col>
                    <Col lg="4">
                        <LimitedOfferItem
                            image="/Home/partnership-offer.svg"
                            title={t('Privacy')}
                            description={t('Privacy Description')}
                            link="/"
                        // active={true}
                        />
                    </Col>
                    <Col lg="4">
                        <LimitedOfferItem
                            image="/Home/refer-afriend.svg"
                            title={t('Security')}
                            description={t('Security Description')}
                            link="/"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}