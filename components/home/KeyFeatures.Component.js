import KeyFeatureItem from "./KeyFeatureItem.Component";
import { Row, Col, Container } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";

export default function KeyFeatures() {
  const { t } = useTranslation("home");

  return (
    <div className="key-features flex-nowrap" id="s2">
      <Container fluid>
        <Row className="justify-content-center h-100">
          <Col className="mb-5 mb-lg-0">
            <KeyFeatureItem
              title={t("common:Forex")}
              icon="/Home/forex-icon.png"
              description={t("Forex Description")}
              link="/forex"
              buttonText={t("Invest in Forex")}
              buttonLink="https://portal.rightfx.com/register"
              delay="500"
            />
          </Col>
          <Col className="mb-5 mb-lg-0">
            <KeyFeatureItem
              title={t("common:Metals")}
              icon="/Home/bullion-icon.png"
              description={t("Metals Description")}
              link="/metals-market"
              buttonText={t("Invest in Metals")}
              buttonLink="https://portal.rightfx.com/register"
              delay="600"
            />
          </Col>
          <Col className="mb-5 mb-lg-0">
            <KeyFeatureItem
              title={t("common:Indices")}
              icon="/Home/indices-icon.png"
              description={t("Indices Description")}
              link="/indices-market"
              buttonText={t("Invest in Indices")}
              buttonLink="https://portal.rightfx.com/register"
              delay="700"
            />
          </Col>
          <Col className="mb-5 mb-lg-0">
            <KeyFeatureItem
              title={t("Energies")}
              icon="/Home/energy-icon.png"
              description={t("Energies Description")}
              link="/energies-market"
              buttonText={t("Invest in Energies")}
              buttonLink="https://portal.rightfx.com/register"
              delay="800"
            />
          </Col>
          <Col className="mb-5 mb-lg-0">
            <KeyFeatureItem
              title={t("Stocks")}
              icon="/Home/stock-icon.png"
              description={t("CFDS Description")}
              link="/stocks"
              buttonText={t("Invest in Stock")}
              buttonLink="https://portal.rightfx.com/register"
              delay="900"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
