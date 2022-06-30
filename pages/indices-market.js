import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarketTable from "../components/market/MarketTable.Component";
import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import TopCarouselOverlay from "../components/market/TopCarouselOverlay.Component";
import TopTabItem from "../components/market/TopTabItem.Component";
import useTranslation from "next-translate/useTranslation";

const tableData = [
  {
    type: "ECN",
    productName: " Dow Jones 30",
    margin: "From 1%",
    average: 2.2,
    tradingHours: "Monday 01:00 - Friday 23:15 , 23:30 - 00:00",
  },
  {
    type: "ECN",
    productName: " NASDAQ 100",
    margin: "From 1%",
    average: 1.8,
    tradingHours: "Monday 01:00 - Friday 23:15 , 23:30 - 00:00",
  },
  {
    type: "ECN",
    productName: " S&P 500",
    margin: "From 1%",
    average: 1.5,
    tradingHours: "Monday 01:00 - Friday 23:15 , 23:30 - 00:00",
  },
  {
    type: "ECN",
    productName: " GERMAN30",
    margin: "From 1%",
    average: 1.6,
    tradingHours: "Monday 01:00 - Friday 23:15 , 23:30 - 00:00",
  },

  {
    type: "VIP",
    productName: " Dow Jones 30",
    margin: "From 1%",
    average: 1.6,
    tradingHours: "Monday 01:00 - Friday 23:15 , 23:30 - 00:00",
  },
  {
    type: "VIP",
    productName: " NASDAQ 100",
    margin: "From 1%",
    average: 1.2,
    tradingHours: "Monday 01:00 - Friday 23:15 , 23:30 - 00:00",
  },
  {
    type: "VIP",
    productName: " S&P 500",
    margin: "From 1%",
    average: 1,
    tradingHours: "Monday 01:00 - Friday 23:15 , 23:30 - 00:00",
  },
  {
    type: "VIP",
    productName: " GERMAN30",
    margin: "From 1%",
    average: 1,
    tradingHours: "Monday 01:00 - Friday 23:15 , 23:30 - 00:00",
  },
];

export default function IndicesMarket() {
  const { t } = useTranslation("markets");
  const [selectedTab, setSelectedTab] = useState("ECN");

  const onChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="indices-market">
        <TopStaticCarousel
          image="/Market/indices-banner.jpg"
          title={
            <label
              dangerouslySetInnerHTML={{ __html: t("Indices_Title") }}
            ></label>
          }
          description={t("Indices_Title_Description")}
          position="center"
          buttonLink="https://portal.rightfx.com/register"
          buttonText={t("Start Trading")}
        />
        {/* <TopCarouselOverlay image='/Market/indices-overlay.png' className="abc" /> */}
        <div className="forex-points mt-5">
          <Container>
            <Row>
              <Col md="4">
                <TopTabItem
                  title={t("ECN")}
                  image={"/Market/Pro.svg"}
                  description={
                    <label
                      dangerouslySetInnerHTML={{
                        __html: t("Open an RightFX Trading Account"),
                      }}
                    ></label>
                  }
                  onChangeTab={(tab) => {
                    onChangeTab(tab);
                  }}
                  active={selectedTab === "ECN"}
                />
              </Col>
              <Col md="4">
                <TopTabItem
                  title={t("VIP")}
                  image={"/Market/vip.svg"}
                  description={
                    <label
                      dangerouslySetInnerHTML={{
                        __html: t("Open an RightFX Trading Account"),
                      }}
                    ></label>
                  }
                  onChangeTab={(tab) => {
                    onChangeTab(tab);
                  }}
                  active={selectedTab === "VIP"}
                />
              </Col>
              {/* <Col md="4">
                <TopTabItem
                  title={t('ECN')}
                  image={'/Market/pro.svg'}
                  description={<label dangerouslySetInnerHTML={{ __html: t('Open an RightFX Trading Account') }}></label>}
                  onChangeTab={(tab) => { onChangeTab(tab) }}
                  active={selectedTab === 'ECN'}
                />
              </Col> */}
            </Row>
          </Container>
        </div>
        <MarketTable selectedTab={selectedTab} rows={tableData} />
      </div>
    </>
  );
}
