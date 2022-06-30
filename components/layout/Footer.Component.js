import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import { languages } from "../../helpers/Constants";
import { useRouter } from "next/router";
const AwardSliderNoSSR = dynamic(() => import("./AwardSlider.Component"), {
  ssr: false,
});
const PaymentSliderNoSSR = dynamic(() => import("./PaymentSlider.Component"), {
  ssr: false,
});

export default function Footer() {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const isRTL = languages.filter((x) => x.code === router.locale)[0].isRtl;

  const handleChangeEmail = (e) => setEmail(e.target.value);

  const subscribeEmail = (e) => {
    e.preventDefault();
    if (email && email.length > 0) {
      //Submit handle here

      setEmail("");
    }
  };
  const [showDisclamer, setShowDisclamer] = useState(true);
  return (
    <footer id="s9">
      <div className="office-links">
        <Container>
          {/* <div className="open-account">
                        <div className="opn-title">
                        <h3>{t('NEW TRADER!')}</h3>
                        </div>
                        <div className="account-options">
                            <Button variant="outline-secondary" href="/register-demo">{t('Open Demo Account')}</Button>
                            <Button variant="outline-secondary" href="/rightfx-academy">{t('Learn To Trade')}</Button>
                        </div>
                    </div>  */}
          <div className="quick-links">
            <Row>
              {/* <Col xs="12" lg="4" sm="12">
                                <h4 className="title">{t('We’ll keep you Updated!')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: t('Enter your email address') }}></p>
                                <Form className="subscribe-form" onSubmit={() => subscribeEmail()}>
                                    <div className="d-flex w-100 position-relative">
                                        <Form.Control id="newsletter1" type="email" placeholder="Email address" value={email} onChange={(e) => handleChangeEmail(e)} required />
                                        <Button varient="primary" type="submit">{t('Subscribe')}</Button>
                                    </div>
                                </Form>
                            </Col> */}
              <Col xs="6" lg="2">
                <h4 className="title text-uppercase">{t("Company")}</h4>
                <ul className="nav flex-column">
                  {/* <li className="nav-item"><Link href="/"><a className="nav-link p-0">{t('Home')}</a></Link></li> */}
                  <li className="nav-item">
                    <Link href="/company-profile">
                      <a className="nav-link p-0">{t("Company Profile")}</a>
                    </Link>
                  </li>
                  {/* <li className="nav-item"><Link href="/partner"><a className="nav-link p-0">{t('Partner')}</a></Link></li> */}
                  {/* <li className="nav-item"><Link href="/careers"><a className="nav-link p-0">{t('Careers')}</a></Link></li> */}
                  <li className="nav-item">
                    <Link href="/legal-documents">
                      <a className="nav-link p-0">{t("Legal Documents")}</a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      href="https://support.rightfx.com/hc/en-us"
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link p-0"
                    >
                      {t("Help Support")}
                    </a>
                  </li> */}
                  {/*<li className="nav-item"><Link href="/contact-us"><a className="nav-link p-0">{t('Contact Us')}</a></Link></li> */}
                </ul>
              </Col>
              <Col xs="6" lg="2">
                <h4 className="title text-uppercase">{t("Trading")}</h4>
                <ul className="nav flex-column">
                  {/* <li className="nav-item"><a href="https://portal.rightfx.com/register"><a className="nav-link p-0">{t('Live Account')}</a></a></li> */}
                  {/* <li className="nav-item"><a href="/register-demo"><a className="nav-link p-0">{t('Demo Account')}</a></a></li> */}
                  {/* <li className="nav-item"><Link href="/deposit-withdrawal"><a className="nav-link p-0">{t('Deposit')}</a></Link></li> */}
                  <li className="nav-item">
                    <Link href="/accounts">
                      <a className="nav-link p-0">{t("Account Types")}</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/mt5-desktop">
                      <a className="nav-link p-0">
                        {t("MT5")} {t("Platform")}
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link href="/web-trader">
                      <a className="nav-link p-0">{t("WebTrader")}</a>
                    </Link>
                  </li> */}
                  {/*<li className="nav-item"><Link href="/mt4-desktop"><a className="nav-link p-0">{t('MT4')} {t('Platform')}</a></Link></li> */}
                </ul>
              </Col>
              <Col xs="6" lg="2">
                <h4 className="title text-uppercase">{t("Markets")}</h4>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link href="/forex">
                      <a className="nav-link p-0">{t("Forex")}</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/indices-market">
                      <a className="nav-link p-0">{t("Indices")}</a>
                    </Link>
                  </li>
                  {/* <li className="nav-item"><Link href="/energies-market"><a className="nav-link p-0">{t('Commodities Energy')}</a></Link></li> */}
                  {/* <li className="nav-item"><Link href="/metals-market"><a className="nav-link p-0">{t('Metals')}</a></Link></li>
                                    <li className="nav-item"><Link href="/exchange-market"><a className="nav-link p-0">{t('Exchange Futures')}</a></Link></li>*/}
                  {/* <li className="nav-item">
                    <Link href="/stocks">
                      <a className="nav-link p-0">{t("Stocks")}</a>
                    </Link>
                  </li> */}
                </ul>
              </Col>
              <Col xs="6" lg="2">
                <h4 className="title text-uppercase">{t("Partnership")}</h4>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link href="https://portal.rightfx.com/ibregister">
                      <a className="nav-link p-0">
                        {t("Introducing Business Partner")}
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/white-label-partnership">
                      <a className="nav-link p-0">
                        {t("White Label partnership")}
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a href="/corporate-live" className="nav-link p-0">
                      {t("Corporate account")}
                    </a>
                  </li> */}
                </ul>
              </Col>
              {/* <Col xs="6" lg="2">
                                <h4 className="title text-uppercase">{t('Insights')}</h4>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a href="https://insights.rightfx.com/" target="_blank" rel="noreferrer"><a className="nav-link p-0">{t('Market News')}</a></a></li>
                                    <li className="nav-item"><Link href="/glossary"><a className="nav-link p-0">{t('Glossary')}</a></Link></li>
                                    <li className="nav-item"><Link href="/economic-calendar"><a className="nav-link p-0">{t('Economic Calendar')}</a></Link></li>
                                    <li className="nav-item"><Link href="/rightfx-academy"><a className="nav-link p-0">{t('RightFX Academy')}</a></Link></li>
                                    <li className="nav-item"><Link href="/trading-faq"><a className="nav-link p-0">{t('Trading FAQ')}</a></Link></li>
                                    <li className="nav-item"><a href="https://insights.rightfx.com/category/company-news/" target="_blank" rel="noreferrer"><a className="nav-link p-0">{t('Company News')}</a></a></li>
                                </ul>
                            </Col> */}
              <Col xs="6" lg="2">
                <h4 className="title text-uppercase">{t("ContactUs")}</h4>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="/contact-us" target="_blank" rel="noreferrer">
                      <a className="nav-link p-0">{t("ContactForm")}</a>
                    </a>
                  </li>
                  {/* <li className="nav-item"><Link href="/careers"><a className="nav-link p-0">{t('Careers')}</a></Link></li> */}
                  <li className="nav-item">
                    <Link href="/trading-faq">
                      <a className="nav-link p-0">{t("FAQ's")}</a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="py-5 d-flex align-items-center justify-content-between">
              <Col className="col-12 col-md-4">
                <img src="/Layout/top-logo-white.svg"></img>
              </Col>
              <Col className="col-12 col-md-8 mt-2">
                <span style={{ fontWeight: "bold", color: '#3d9730' }}>{t("RightFX")}</span>{" "}
                <span style={{ color: "gray" }}>{t("footer_logo_span_2")}</span>
              </Col>
            </Row>
          </div>
          <div className="office-network">
            <div className="office-location mt-5 mb-5">
              <Row>
                <Col lg="6" className="d-flex">
                  <div className="office-location-container">
                    <div className="office-flag me-3">
                      <img
                        src="/Layout/sv-flag.png"
                        alt="RightFX"
                        className="img-fluid"
                      />
                    </div>
                    <div className="office-details">
                      <Row>
                        <Col xs="12">
                          <div className="office-title">
                            {t("Saint Vincent office")}
                          </div>
                        </Col>
                        <Col xs="12">
                          <address
                            dangerouslySetInnerHTML={{
                              __html: t("Saint Vincent Address"),
                            }}
                          ></address>
                        </Col>
                        <Col xs="12">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: t("Saint Vincent Details"),
                            }}
                          ></span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col lg="6" className="d-flex">
                  <div className="office-location-container">
                    <div className="office-flag me-3">
                      <img
                        style={{ maxWidth: "110%" }}
                        src="/Layout/uae-flag.png"
                        alt="RightFX"
                        className="img-fluid"
                      />
                    </div>
                    <div className="office-details">
                      <Row>
                        <Col xs="12">
                          <div className="office-title">{t("UAE office")}</div>
                        </Col>
                        <Col xs="12">
                          <address
                            dangerouslySetInnerHTML={{
                              __html: t("UAE Address"),
                            }}
                          ></address>
                        </Col>
                        <Col xs="12">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: t("UAE Details"),
                            }}
                          ></span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          {/* <div className="awards">
                        <Row>
                            <Col xs="12">
                                <h5 className="title text-uppercase">{t('Award winning broker')}</h5>
                                <p>{t('Awards Description')}</p>
                            </Col>
                        </Row>
                        <div className="awards-item ltr">
                            <AwardSliderNoSSR />
                        </div>
                    </div> */}
        </Container>
      </div>
      <div className="terms-policy">
        <Container>
          <div className="payment-icons" style={{ paddingBottom: "30px" }}>
            {/* <div className="title">
                            <h5>{t('Deposit and withdraw')}</h5>
                            <p>{t('All payment methods accepted')}</p>
                        </div> */}
            <div className="trusted-brands owl-carousel d-md-flex ltr">
              <PaymentSliderNoSSR />
            </div>
          </div>
          <ol className="border-top" style={{ paddingTop: "60px" }}>
            <li className="mb-4">
              <p>{t("Footer1")}</p>
            </li>
            <li className="mb-4">
              <p>{t("Footer2")}</p>
            </li>
            {/* <li className='mb-4'><p dangerouslySetInnerHTML={{ __html: t('Footer3_1') }} /></li> */}
            <li className="mb-4">
              <p dangerouslySetInnerHTML={{ __html: t("Footer3") }} />
            </li>
          </ol>
          <p
            className="ps-3"
            dangerouslySetInnerHTML={{ __html: t("Footer4") }}
          />
          <p
            className="riskwarning ps-3"
            dangerouslySetInnerHTML={{ __html: t("Footer5") }}
          />
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <div className="border-top">
            <Row className="align-items-center">
              <Col lg="4">
                <p>
                  Copyright &copy; 2022 RightFX. {t("All rights reserved")}.
                </p>
              </Col>
              <Col lg="4" className="text-center">
                {/* <a target="_blank" rel="noreferrer" href="https://www.fscmauritius.org/en/supervision/register-of-licensees/register-of-licensees-details?licence_no=GB19024778&key=&cat=GB&code="  className="mx-3"><img src="/Layout/footer-icon-1.png" alt="RightFX" /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.cysec.gov.cy/en-GB/entities/investment-firms/cypriot/45838/"  className="mx-3"><img src="/Layout/footer-icon-2.png" alt="RightFX" /></a> */}
              </Col>
              <Col lg="4">
                <div className="social">
                  <ul className="list-unstyled d-flex">
                    <li className="ms-4">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/OfficialRightFX/"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li className="ms-4">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/FxRight"
                      >
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li className="ms-4">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/rightfxbroker/"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li className="ms-4">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://api.whatsapp.com/send?phone=971508738696"
                      >
                        <i className="bi bi-whatsapp"></i>
                      </a>
                    </li>
                    <li className="ms-4">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://telegram.me/rightfx"
                      >
                        <i className="bi bi-telegram"></i>
                      </a>
                    </li>
                    <li className="ms-4">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/channel/UC4OFp8Fyzd-ZTvrLC8m8r3w"
                      >
                        <i className="bi bi-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {showDisclamer && (
        <div className="w-100 disclamer">
          <i
            className="bi bi-x-circle"
            onClick={() => {
              setShowDisclamer(false);
            }}
          ></i>
          <Container className="content">{t("disclamer")}</Container>
        </div>
      )}
    </footer>
  );
}
