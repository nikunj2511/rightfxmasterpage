import { Container, Row, Col } from 'react-bootstrap';
import Script from 'next/script'

import useTranslation from 'next-translate/useTranslation';

export default function WebTrader() {
  const { t } = useTranslation('contact-us');
  const newLocal = `
                          setTimeout(() => {
                            new MetaTraderWebTerminal( "webterminal", { 
                                version: 5, 
                                servers: ["RightFXLimited-Demo","RightFXLimited-Live"], 
                                server: "RightFXLimited-Demo", 
                                demoAllServers: true, 
                                utmCampaign: "", 
                                utmSource: "www.rightfx.com", 
                                startMode: "create_demo", 
                                language: "en", 
                                colorScheme: "black_on_white" 
                            } );
                          }, 1000);`;
  return (
    <>
    <div className="hero-slider-static style2" style={{ "backgroundImage": "url(/Company/BG-WEB-TRADER.jpg)",backgroundSize:"100% 100%" }}>
      <div className="webtrader-widget">
          <Container fluid>
            <Row className="justify-content-between">
              <Col>
              {/* <img src="/Company/BG-WEB-TRADER.jpg" className="w-100" alt="RightFX Banner" /> */}
              <div id="webterminal" className="webTraderTerminal"><iframe className="iframe" src="https://trade.mql5.com/trade?version=5&amp;trade_server=RightFXLimited-Demo&amp;servers=RightFXLimited-Demo,RightFXLimited-Live&amp;startup_mode=create_demo&amp;demo_all_servers=1&amp;lang=en&amp;color_scheme=black_on_white&amp;utm_source=www.rightfx.com"></iframe></div>
                {/* <div id="webterminal" style={{width: '100%', height: '75vh',marginTop:'183px'}}></div>
                  <Script src="https://trade.mql5.com/trade/widget.js"></Script>
                  <Script id="webtrader" strategy="afterInteractive"> {newLocal} </Script>  */}
              </Col>
            </Row>
          </Container>
      </div>
      </div>
      {/* <div className="contact-information">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <div className="item text-center">
                <img src="/Company/call-icon.svg" alt="RightFX Contact" />
                <h4>{t('Office Phone')}</h4>
                <p>{t('Cyprus Office Phone')}: <strong>00357 25 262207</strong></p>
                <p>{t('Dubai - UAE Office Phone')}: <strong>00971 4 5745400</strong></p>
                <p>{t('Ebene 72201 - Mauritius Office Phone')} <strong>00230 464 4888</strong></p>
              </div>
            </div>
            <div className="col-md-8 col-lg-7">
              <Row>
                <Col md="6">
                  <div className="item text-center">
                    <img src="/Company/support-icon.svg" alt="RightFX Contact" />
                    <h4>{t('Client Support')}</h4>
                    <p><strong>support@rightfx.com</strong></p>
                    <p>{t('Working hours')}: 24/5</p>
                  </div>
                </Col>
                <Col md="6">
                  <div className="item text-center">
                    <img src="/Company/marker-icon.svg" alt="RightFX Contact" />
                    <h4>{t('Office Address')}</h4>
                    <p><strong>{t('Dubai - UAE')}</strong></p>
                    <p>{t('Dubai Address')}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
