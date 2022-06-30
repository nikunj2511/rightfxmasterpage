import Link from "next/link";
import { Row, Col, Container, Button } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";
export default function Widgets() {
  const { t } = useTranslation("home");
  const iframe = useRef();
  return (
    <div className="widget-bg" id="9">
      <Container>
        <Row className="justify-content-center text-center inverseMobile">
          <Col xs="12 widget-button-mobile">
            <div className="widget-title text-center">
              <Button
                veriant="primary"
                className="btn-lg widget-success-btn"
                href="https://portal.rightfx.com/register"
              >
                {t("Open Account")}
              </Button>
            </div>
          </Col>
          <Col xs="12" md={8}>
            <div className="widget-title text-center">
              <h1>
                <span> {t("Market Currency Rates")}</span>
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("Based on MT4 account spreads"),
                }}
              ></p>
            </div>
          </Col>
          <Col
            xs="12"
            className="mt-4 justify-content-center iframe-container"
            ref={iframe}
          >
            <div className="iframe-tckrs">
              <iframe
                id="widget-ticks-web"
                name="widget-ticks-web"
                src="https://fxpricing.com/fx-widget/ticker-quote-widget.php?id=1,1984,4,6&border=hide&fcs_link=hide&target_link=https%3A%2F%2Fportal.rightfx.com%2Fregister&click_target=current&theme=transparent&by-cr=28A745&sl-cr=DC3545&lang=en&font=Arial, sans-serif&widget_key=tgid5RkgVh3thZcZikbhVwFe"
                width="1090"
                height="200"
              ></iframe>
            </div>
          </Col>
          <Col xs="12" className="widget-button">
            <div className="widget-title text-center">
              <Button
                veriant="primary"
                className="btn-lg widget-success-btn"
                href="https://portal.rightfx.com/register"
              >
                {t("Open Account")}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
