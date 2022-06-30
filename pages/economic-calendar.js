import { Container, Row, Col } from "react-bootstrap";
import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import useTranslation from "next-translate/useTranslation";

export default function EconomicCalendar() {
  const { t } = useTranslation("economic-calendars");
  return (
    <>
      <div className="economic-calendars">
        <TopStaticCarousel
          image="/Insights/economic-calendar-banner.png"
          title={
            <label
              dangerouslySetInnerHTML={{ __html: t("Economic Calendar") }}
            ></label>
          }
          description={t("The importance of our Economic Calendar")}
          position="center"
          align="left"
          noButton={true}
        />

        <Container>
          <Row>
            <Col xs="12" className="py-5 text-center eco-clndr-btn ">
              <a
                className="btn btn-primary btn-custom mb-2"
                href="https://portal.rightfx.com/register"
              >
                {t("Start Trading Now")}
              </a>
              <br />
              {t("Or")}{" "}
              <a href="https://portal.rightfx.com/opendemoaccount">
                {t("Try Demo Account")}
              </a>
            </Col>
          </Row>
        </Container>

        <Container className="mb-5">
          <Row>
            <Col xs="12">
              <div style={{ height: "750px" }}>
                <iframe
                  title="economic calender"
                  scrolling="no"
                  allowtransparency="true"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  src="https://www.mql5.com/en/economic-calendar/widget?mode=2&amp;utm_source=rightfx.com"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
