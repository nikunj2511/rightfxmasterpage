import { Container, Row, Col } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
export default function TopStaticCarousel() {
  const { t } = useTranslation("company-profile");
  return (
    <div
      className="hero-slider-static style4"
      style={{ backgroundImage: "url(/Company/company-profile-banner.jpg)" }}
    >
      {/* <div className="caption">
                <Container>
                    <Row>
                        <Col xs="12">
                            <h4>{t('Trade with us')}</h4>
                            <h1>{t('Who we are')} </h1>
                            <p>{t('The FASTEST GROWING BROKER IN THE REGION')}</p>
                        </Col>
                    </Row>
                </Container>
            </div> */}
      <Link href="https://portal.rightfx.com/register">
        <a className="btn btn-secondary btn-lg">{t("home:banner_button")}</a>
      </Link>
      {/* <button className="btn btn-secondary btn-lg">{t('home:banner_button')}</button> */}
    </div>
  );
}
