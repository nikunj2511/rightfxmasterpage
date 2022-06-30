import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import TopCarouselOverlay from "../components/market/TopCarouselOverlay.Component";
import ExchangeQuickInfo from "../components/market/ExchangeQuickInfo.Component";
import ExchangeTradeFeatures from "../components/market/ExchangeTradeFeatures.Component";
import ExchangeList from "../components/market/ExchangeList.Component";
import useTranslation from "next-translate/useTranslation";

export default function ExchangeMarket() {
  const { t } = useTranslation("markets");
  return (
    <>
      <TopStaticCarousel
        image="/Market/exchange-banner.jpg"
        title={
          <label
            dangerouslySetInnerHTML={{ __html: t("Exchange_Title") }}
          ></label>
        }
        description=""
        buttonLink="https://portal.rightfx.com/register"
        buttonText={t("Open Account")}
      />
      {/* <TopCarouselOverlay image='/Market/exchange-overlay.png' /> */}

      <ExchangeQuickInfo />
      <ExchangeTradeFeatures />
      <ExchangeList />
    </>
  );
}
