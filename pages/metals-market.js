import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarketTable from "../components/market/MarketTable.Component";
import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import TopCarouselOverlay from "../components/market/TopCarouselOverlay.Component";
import TopTabItem from "../components/market/TopTabItem.Component";
import useTranslation from "next-translate/useTranslation";

const tableData = [
  {
    type: "Pro",
    productName: " XAUUSD",
    margin: "From 0.50%",
    average: "20 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },
  {
    type: "Pro",
    productName: " XAGUSD",
    margin: "From 1%",
    average: "20 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },
  {
    type: "Pro",
    productName: " Copper (future)",
    margin: "From 1%",
    average: "20 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },

  {
    type: "VIP",
    productName: " XAUUSD",
    margin: "From 0.50%",
    average: "15 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },
  {
    type: "VIP",
    productName: " XAGUSD",
    margin: "From 1%",
    average: "15 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },
  {
    type: "VIP",
    productName: " Copper (future)",
    margin: "From 1%",
    average: "15 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },

  {
    type: "ECN",
    productName: " XAUUSD",
    margin: "From 0.50%",
    average: "10 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },
  {
    type: "ECN",
    productName: " XAGUSD",
    margin: "From 1%",
    average: "10 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },
  {
    type: "ECN",
    productName: " Copper (future)",
    margin: "From 1%",
    average: "10 Cent",
    tradingHours:
      "Monday 01:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 01:00)",
  },
];

export default function MetalsMarket() {
  const { t } = useTranslation("markets");
  const [selectedTab, setSelectedTab] = useState("Pro");

  const onChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <TopStaticCarousel
        image="/Market/metals-banner.jpg"
        title={
          <label
            dangerouslySetInnerHTML={{ __html: t("Metals_Title") }}
          ></label>
        }
        description={t("Metals_Title_Description")}
        position="center"
        buttonLink="https://portal.rightfx.com/register"
        buttonText={t("Start Trading")}
      />
      {/* <TopCarouselOverlay image='/Market/metals-overlay.png' /> */}
      <div className="forex-points mt-5">
        <Container>
          <Row>
            <Col md="4">
              <TopTabItem
                title={t("Pro")}
                image={"/Market/executive.svg"}
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
                active={selectedTab === "Pro"}
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
            <Col md="4">
              <TopTabItem
                title={t("ECN")}
                image={"/Market/pro.svg"}
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
          </Row>
        </Container>
      </div>
      <MarketTable selectedTab={selectedTab} rows={tableData} />
    </>
  );
}
