import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarketTable from "../components/market/MarketTable.Component";
import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import TopCarouselOverlay from "../components/market/TopCarouselOverlay.Component";
import TopTabItem from "../components/market/TopTabItem.Component";
import useTranslation from "next-translate/useTranslation";

export default function EnergiesMarket() {
  const { t } = useTranslation("markets");
  const [selectedTab, setSelectedTab] = useState("Pro");

  const onChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  const tableData = [
    {
      type: "Pro",
      productName: " UK Crude (Cash)",
      margin: "From 2%",
      average: "0.3",
      tradingHours:
        "Monday 03:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 03:00)",
    },
    {
      type: "Pro",
      productName: " US Crude (Cash)",
      margin: "From 2%",
      average: "0.3",
      tradingHours:
        "Monday 03:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 03:00)",
    },
    {
      type: "VIP",
      productName: " UK Crude (Cash)",
      margin: t("100 D Per System Lot"),
      average: 0.24,
      tradingHours:
        "Monday 03:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 03:00)",
    },
    {
      type: "VIP",
      productName: " US Crude (Cash)",
      margin: t("100 D Per System Lot"),
      average: 0.24,
      tradingHours:
        "Monday 03:00 - Friday 00:00 (Mon - Thurs Break: 00 :00- 03:00)",
    },
  ];

  return (
    <>
      <TopStaticCarousel
        image="/Market/energies-banner.jpg"
        title={
          <label
            dangerouslySetInnerHTML={{ __html: t("Energies_Title") }}
          ></label>
        }
        description={t("Energies_Title_Description")}
        position="center"
        buttonLink="https://portal.rightfx.com/register"
        buttonText={t("Start Trading")}
      />
      {/* <TopCarouselOverlay image='/Market/energies-overlay.png' /> */}
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
    </>
  );
}
