import { Row, Col, Container } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";

export default function PricingPlans() {
  const { t } = useTranslation("accounts");
  return (
    <div className="pricing-plans">
      <Container>
        <div className="plans-table">
          <Row>
            <Col lg="4" className="item-cont">
              <h3>PRO</h3>
              <div className="item">
                <img
                  src="/Trading/Executive-Plan.svg"
                  alt="RightFX Account Types"
                />
                <div className="points">
                  {t("Minimum Deposit")} <strong>$250</strong>
                </div>
                <div className="points">
                  {t("Spread")} <strong>{t("From 1_4")}</strong>
                </div>
                <div className="points">
                  {t("Commission")} <strong>{t("No")}</strong>
                </div>
                <div className="points">
                  {t("Leverage")} <strong>{t("1_500")}</strong>
                </div>
                <div className="points">
                  {t("Swap Free")} <strong>{t("10 days")}</strong>
                </div>
                <div className="points">
                  {t("Trading Platform")} <strong>{t("MT5")}</strong>
                </div>
                <div className="points">
                  {t("Execution")} <strong>{t("Market Execution")}</strong>
                </div>
                <div className="points">
                  {t("Trading Instrument")}{" "}
                  <strong>
                    {t("p300 Instruments Forex_Metals_Indeces_Energy")}
                  </strong>
                </div>
                <div className="points">
                  {t("Account Currency")}{" "}
                  <strong>{t("deposit-withdrawal:USD")}</strong>
                </div>
                <div className="points">
                  {t("Minimum Trade Size")}{" "}
                  <strong>{t("0_01 for Forex and Metals")}</strong>
                </div>
                <div className="points">
                  {t("Stop out level")} <strong>30%</strong>
                </div>
              </div>
              <a
                href="https://portal.rightfx.com/register"
                target="_blank"
                rel="noreferrer"
                className="btn executive-btn"
              >
                {t("Open Account")}
              </a>
            </Col>
            {/* <Col lg="4" className="active"> */}
            <Col lg="4" className="item-cont">
              <h3>VIP</h3>
              <div className="item">
                <img src="/Trading/VIP-Plan.svg" alt="RightFX Account Types" />
                <div className="points">
                  {t("Minimum Deposit")} <strong>$5,000</strong>
                </div>
                <div className="points">
                  {t("Spread")} <strong>{t("From 0_9")}</strong>
                </div>
                <div className="points">
                  {t("Commission")} <strong>{t("No")}</strong>
                </div>
                <div className="points">
                  {t("Leverage")} <strong>{t("1_500")}</strong>
                </div>
                <div className="points">
                  {t("Swap Free")} <strong>{t("10 days")}</strong>
                </div>
                <div className="points">
                  {t("Trading Platform")} <strong>{t("MT5")}</strong>
                </div>
                <div className="points">
                  {t("Execution")} <strong>{t("Market Execution")}</strong>
                </div>
                <div className="points">
                  {t("Trading Instrument")}{" "}
                  <strong>
                    {t("p300 Instruments Forex_Metals_Indeces_Energy")}
                  </strong>
                </div>
                <div className="points">
                  {t("Account Currency")}{" "}
                  <strong>{t("deposit-withdrawal:USD")}</strong>
                </div>
                <div className="points">
                  {t("Minimum Trade Size")}{" "}
                  <strong>{t("0_01 for Forex and Metals")}</strong>
                </div>
                <div className="points">
                  {t("Stop out level")} <strong>30%</strong>
                </div>
              </div>
              <a
                href="https://portal.rightfx.com/register"
                target="_blank"
                rel="noreferrer"
                className="btn vip-btn"
              >
                {t("Request VIP")}
              </a>
            </Col>
            <Col lg="4" className="item-cont">
              <h3>ECN</h3>
              <div className="item">
                <img src="/Trading/Pro-Plan.svg" alt="RightFX Account Types" />
                <div className="points">
                  {t("Minimum Deposit")} <strong>$15,000</strong>
                </div>
                <div className="points">
                  {t("Spread")} <strong>{t("As low as 0_2")}</strong>
                </div>
                <div className="points">
                  {t("Commission")} <strong>$5 Per Lot</strong>
                </div>
                {/* <div className="points">{t('Commission')} <strong>{t('D60 per D1 Million on FX')}</strong></div> */}
                <div className="points">
                  {t("Leverage")} <strong>{t("1_500")}</strong>
                </div>
                <div className="points">
                  {t("Swap Free")} <strong>{t("Free")}</strong>
                </div>
                <div className="points">
                  {t("Trading Platform")} <strong>{t("MT5")}</strong>
                </div>
                <div className="points">
                  {t("Execution")} <strong>{t("Market Execution")}</strong>
                </div>
                <div className="points">
                  {t("Trading Instrument")}{" "}
                  <strong>
                    {t("p300 Instruments Forex_Metals_Indeces_Energy")}
                  </strong>
                </div>
                <div className="points">
                  {t("Account Currency")}{" "}
                  <strong>{t("deposit-withdrawal:USD")}</strong>
                </div>
                <div className="points">
                  {t("Minimum Trade Size")}{" "}
                  <strong>{t("0_01 for Forex and Metals")}</strong>
                </div>
                <div className="points">
                  {t("Stop out level")} <strong>30%</strong>
                </div>
              </div>
              <a
                href="https://portal.rightfx.com/register"
                target="_blank"
                rel="noreferrer"
                className="btn pro-btn"
              >
                {t("Request PRO")}
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
