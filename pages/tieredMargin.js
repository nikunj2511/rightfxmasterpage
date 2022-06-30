import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TieredMarginTable from "../components/market/TieredMarginTable.Component";
import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import TopCarouselOverlay from "../components/market/TopCarouselOverlay.Component";
import TopTabItem from "../components/market/TopTabItem.Component";
import useTranslation from "next-translate/useTranslation";

const tableData = [
  { tier: 1, lots: "1 – 50", laverage: "1:400" },
  { tier: 2, lots: "51 – 100", laverage: "1:200" },
  { tier: 3, lots: "101 – 200", laverage: "1:100" },
  { tier: 4, lots: "201 – 250", laverage: "1:50" },
];
const tableData2 = [
  { tier: 1, lots: "1 – 50", laverage: "1:200" },
  { tier: 2, lots: "51 – 100", laverage: "1:100" },
  { tier: 3, lots: "101 – 200", laverage: "1:50" },
  { tier: 4, lots: "201 – 250", laverage: "1:10" },
];
const tableData3 = [
  { tier: 1, lots: "1 – 50", laverage: "1:100" },
  { tier: 2, lots: "51 – 100", laverage: "1:50" },
  { tier: 3, lots: "101 – 200", laverage: "1:25" },
  { tier: 4, lots: "201 – 250", laverage: "1:10" },
];
const tableData4 = [
  { tier: 1, lots: "1 – 1000", laverage: "1:100" },
  { tier: 2, lots: "1001 – 1500", laverage: "1:50" },
  { tier: 3, lots: "1501 – 2000", laverage: "1:25" },
  { tier: 4, lots: "2001 – 2500", laverage: "1:10" },
];
const tableData5 = [
  { tier: 1, lots: "1 – 1000", laverage: "1:50" },
  { tier: 2, lots: "1001 – 1500", laverage: "1:25" },
  { tier: 3, lots: "1501 – 2000", laverage: "1:10" },
  { tier: 4, lots: "2001 – 2500", laverage: "1:5" },
];
export default function IndicesMarket() {
  const { t } = useTranslation("deposit-withdrawal");
  const [selectedTab, setSelectedTab] = useState("Pro");

  const onChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="indices-market">
        <TopStaticCarousel
          image="/Trading/TOPBG-min.jpg"
          title={
            <label
              dangerouslySetInnerHTML={{ __html: t("TieredMargin_Title") }}
            ></label>
          }
          description={t("TieredMargin_Title_Description")}
          position="center"
          buttonLink="https://portal.rightfx.com/register"
          buttonText={"Start Trading"}
        />
        {/* <div className="forex-points mt-5">
          <Container>
            <div className="tieredMarginPg bx-shadow ">
            <Row>
              <Col md="12">
                <div className="tiered-checks">
              <div className="checks-div">
              <Col md="1">

                            <div className="flag-icon"><img src="/Trading/Check-wl.PNG" alt="RightFX Company Profile" className="img-fluid" /></div>
                            </Col>
                            <Col md="11">

                            <div className="checks-text">
                              <p>All Opened Positions for each Instrument will be collectively affected by the news Tiered Margin System once you open a new position or close an existing position of that instrument.</p>
                            </div>
</Col>
                        

                        </div>
                        
                </div>
              </Col>
              <Col md="12">
                <div className="tiered-checks">
              <div className="checks-div">
              <Col md="1">

                            <div className="flag-icon"><img src="/Trading/Check-wl.PNG" alt="RightFX Company Profile" className="img-fluid" /></div>
                            </Col>
                            <Col md="11">

                            <div className="checks-text">
                              <p>It is your sole responsiblity to maintain adequate margin level to keep the open positions in your trading accounts(s).</p>
                            </div>
</Col>
                        

                        </div>
                        
                </div>
              </Col>
              <Col md="12">
                <div className="tiered-checks">
              <div className="checks-div">
              <Col md="1">

                            <div className="flag-icon"><img src="/Trading/Check-wl.PNG" alt="RightFX Company Profile" className="img-fluid" /></div>
                            </Col>
                            <Col md="11">

                            <div className="checks-text">
                              <p>Should you wish to deposit additional funds to maintain your margin level, please click here.</p>
                            </div>
</Col>
                        

                        </div>
                        
                </div>
              </Col>
            </Row>
            </div>
          </Container>
        </div> */}
        <div className="mt-5">
          <TieredMarginTable
            heading={"Forex Product (Currencies)"}
            rows={tableData}
          />
          <TieredMarginTable heading={"GOLD (XAU/USD)"} rows={tableData2} />
          <TieredMarginTable heading={"SILVER (XAG/USD)"} rows={tableData3} />
          <TieredMarginTable heading={"INDICES"} rows={tableData4} />
          <TieredMarginTable heading={"ENERGY"} rows={tableData5} />
        </div>
        <div>
          <div
            className="legal-doc-desclaimer tieredmrginbanner"
            style={{ backgroundImage: "url(/Company/leagl-docs-bg.png)" }}
          >
            <Container>
              <Row className="justify-content-center">
                <Col xs="6" md="6">
                  <div className="title">
                    <strong>Example:</strong>
                    <p>
                      A client has the following open position in his trading
                      account: Open Positions:
                    </p>
                    <p>BUY 150 LOTS EURUSD @ 1.1210</p>
                    <p>SELL 45 LOTS GBP/USD @ 1.3510</p>
                    <p>SELL 70 LOTS XAU/USD @ 1750.00</p>
                  </div>
                  {/* <div className="title">
                  <strong>Margin Calculations :</strong>
                  <p>Leverage (FX Products): 1:400 = 1/400 = 0.0025
</p>
                  <p>Leverage (GOLD): 1:200 = 1/200 = 0.0050</p>
                  <p>EUR/USD Margin Requirement: 150 X 100,000 X 1.1210 X 0.0025 = USD 42,037.50</p>
                  <p>GBP/USD Margin Requirement: 45 X 100,000 X 1.3510 X 0.0025 = USD 15,198.75</p>
                  <p>XAU/USD Margin Requirement: 70 X 100 X 1750 X 0.005 = USD 61,250.00</p>
                  <p>Total Margin Requirement is <strong>USD 118,486.25</strong></p>
                </div> */}
                </Col>
                <Col xs="6" md="6">
                  <div className="title">
                    <strong>Margin Calculations:</strong>
                    <p>
                      Leverage will be calculated according to the new Tiered
                      Margin System levels as illustrated in the tables above.
                    </p>
                    <p>
                      EUR/USD Margin Requirement: 150 X 100,000 X 1.1210 X 0.01
                      = USD 168,150.00 <strong> (FX Margin Tier 3)</strong>
                    </p>
                    <p>
                      GBP/USD Margin Requirement: 45 X 100,000 X 1.3510 X 0.0025
                      = USD 15,198.75 <strong> (FX Margin Tier 1)</strong>
                    </p>
                    <p>
                      XAU/USD Margin Requirement: 70 X 100 X 1750 X 0.01 = USD
                      122,500.00 <strong> (GOLD Margin Tier 2)</strong>
                    </p>
                    <p>
                      Total Margin Requirement under the new system is{" "}
                      <strong> USD 305,848.75</strong>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
