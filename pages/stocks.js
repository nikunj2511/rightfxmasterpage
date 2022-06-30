import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarketTable from "../components/market/MarketTable.Component";
import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import TopCarouselOverlay from "../components/market/TopCarouselOverlay.Component";
import TopTabItem from "../components/market/TopTabItem.Component";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function EnergiesMarket() {
  const { t } = useTranslation("markets");

  return (
    <>
      <TopStaticCarousel
        image="/Market/STOCKS-BG.jpg"
        title={
          <label
            dangerouslySetInnerHTML={{ __html: t("Stocks_Title") }}
          ></label>
        }
        description={t("Stocks_Title_Description")}
        position="center"
        noButton={true}
      />
      {/* <TopCarouselOverlay image='/Market/energies-overlay.png' /> */}
      <div className="stocks-points">
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={10}>
              <div className="title">
                <h1>
                  {t("Trading conditions for leveraged products on Shares")}
                </h1>
              </div>
            </Col>
          </Row>
          <div className="row justify-content-center text-center">
            <Col md="6" xl="6">
              <div className="item">
                <h3>
                  {t("Leveraged products on shares listed on NYSE")}
                  <br />
                </h3>
              </div>
            </Col>
            <Col md="6" xl="6">
              <div className="item">
                <h3>{t("Adjustable order quantity applicable")} </h3>
              </div>
            </Col>
            <Col md="6" xl="6">
              <div className="item">
                <h3>{t("Companies from all market sectors")}</h3>
              </div>
            </Col>
            <Col md="6" xl="6">
              <div className="item">
                <h3>{t("Leveraged products & zero commissions")}</h3>
              </div>
            </Col>
          </div>
        </Container>
      </div>
      <div className="platfrom favShares">
        <Container>
          <Row className="justify-content-evenly">
            <Col lg="5" className="d-flex flex-column">
              <h1>{t("Trade your favorite shares")}</h1>
              <p>{t("Trade fractional leveraged shares on famous")}</p>
            </Col>
            <Col lg="6" className={`ltr position-relative`}>
              <div className="platImageHolder">
                <img
                  src="/Market/STOCKS-CREATIVE.png"
                  alt="RightFX Platform Traders"
                  className="img-fluid favSharesImg"
                />
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </Container>
        <Container>
          <Row className="justify-content-evenly variousResrce">
            <Col lg="8" className="leftPd">
              <p>{t("With various resources, the education academy")}</p>
            </Col>
            <Col lg="4">
              <Link href="https://portal.rightfx.com/register">
                <button className="btn btn-info btn-lg vrbtn">
                  {t("Open an Account")}
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
