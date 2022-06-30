import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import TopCarousel from "../components/partner/TopCarousel.Component";
import BrokerProgram from "../components/partner/BrokerProgram.Component";
import Benifits from "../components/partner/Benifits.Component";
import Features from "../components/partner/Features.Component";
import LiveRegisterationForm from "../components/forms/LiveRegisterationForm.Component";
import LoginForm from "../components/forms/LoginForm.Component";
import { languages } from "../helpers/Constants";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Partner() {
  const { t } = useTranslation("markets");
  const [activeTab, setActiveTab] = useState("Register");
  const [tabListActive, setTabListActive] = useState(false);
  const router = useRouter();
  const [language, SetLanguageCode] = useState(router.locale);
  const isRtl = languages.filter((x) => x.code === router.locale)[0].isRtl;
  const SetLanguage = (lang) => {
    SetLanguageCode(lang);
    router.push(router.asPath, router.asPath, { locale: lang });
  };
  const onSelectAccType = (e) => {
    switch (e.target.value) {
      case "RightFX EU CySEC":
        window.open("https://rightfx.eu/", "_blank");
        break;
      case "RightFX JOR":
        window.open("https://rightfx.jo/", "_blank");
        break;
      default:
        break;
    }
  };
  const mobInnerWithHandle = () => {
    if (window.innerWidth < 600) {
      setTabListActive(true);
    } else {
      setTabListActive(false);
    }
  };
  useEffect(() => {
    let header = document.getElementsByTagName("header");
    let footer = document.getElementsByTagName("footer");
    header[0].style.display = "none";
    footer[0].style.display = "none";
    mobInnerWithHandle();
    window.addEventListener("resize", mobInnerWithHandle);
  });
  return (
    <>
      {/* <TopCarousel hideContent={tabListActive}/> */}
      <div className="partner-form heigt-frm">
        <Container className="position-relative reg-liv">
          <Row>
            <Col xs="12" className="tabMobRes">
              {/* {!tabListActive == true?
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className={`nav-item parent ${activeTab === 'Register' ? 'active' : ''}`} role="presentation">
                  <button className="nav-link active" onClick={() => setActiveTab('Register')} id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="true">{t('Register')}</button>
                </li>
                <li className={`nav-item parent ${activeTab === 'Login' ? 'active' : ''}`} role="presentation">
                  <button className="nav-link" onClick={() => setActiveTab('Login')} id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="false">{t('Log in')}</button>
                </li>
              </ul>:''} */}
              <div className="tab-content regLiveContent" id="myTabContent">
                <Row>
                  <Container>
                    <div className="form-lng">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="none"
                          className="btn dropdown-toggle"
                          id="dropdown-basic"
                        >
                          <img src="/Layout/lang-grey.png" alt="RightFX" />
                          <span> {language}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          alignright={true}
                          className="dropdown-menu-end column-2 p-0"
                          data-bs-popper="none"
                        >
                          {/* {languages.map(lang =>
                                            <li key={lang.name} style={{visibility :lang.code =="sor" ? 'hidden' : 'visible'}} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>
                                        )} */}
                          {languages.map((lang) =>
                            lang.code === "sor" ? (
                              <li
                                key={lang.name}
                                style={{
                                  visibility:
                                    lang.code == "sor" ? "hidden" : "visible",
                                }}
                                className={`${
                                  language === lang.code ? "active" : ""
                                }`}
                              >
                                <Dropdown.Item
                                  href="#"
                                  onClick={() => SetLanguage(lang.code)}
                                >
                                  <img src={lang.icon} alt="RightFX" />{" "}
                                  {lang.name}{" "}
                                </Dropdown.Item>
                              </li>
                            ) : (
                              <li
                                key={lang.name}
                                className={`${
                                  language === lang.code ? "active" : ""
                                }`}
                              >
                                <Dropdown.Item
                                  href="#"
                                  onClick={() => SetLanguage(lang.code)}
                                >
                                  <img src={lang.icon} alt="RightFX" />{" "}
                                  {lang.name}{" "}
                                </Dropdown.Item>
                              </li>
                            )
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Container>
                </Row>
                <div
                  className={`tab-pane fade ${
                    activeTab === "Register" ? "show active" : ""
                  }`}
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <Row>
                    <Col lg="12">
                      <LiveRegisterationForm />
                    </Col>
                  </Row>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "Login" ? "show active" : ""
                  }`}
                  id="login"
                  role="tabpanel"
                  aria-labelledby="login-tab"
                >
                  <Row>
                    <Col lg="12">
                      <h6 className="text-muted mb-3">
                        {t("Fill in the fields below to login to your account")}
                      </h6>
                      <LoginForm />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {/* <Form.Label>{t('User Type')}<sup>*</sup></Form.Label> */}
            <Col xl="4" md="4"></Col>
            <Col xl="4" md="4">
              <div className="entityAcculogin">
                <span> {t("Already have an account?")} </span>{" "}
                <a
                  href="https://portal.rightfx.com/Login"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <strong> {t("Log in")} </strong>
                </a>
              </div>
            </Col>
            {/* <Col xl="4"md="4">
            <div className="entityAccu">
            <span>{t('Entity')} </span>
          <select name="type" type="text" onChange={(e)=>onSelectAccType(e)}>
                                        <option value="RightFX FSCM">RightFX FSCM </option>
                                        <option value="RightFX JOR">RightFX JOR</option>
                                        <option value="RightFX EU CySEC">RightFX EU CySEC</option>
                                    </select>
            </div>
        
          </Col>  */}
          </Row>
          <Row>
            <Col xl="2"> </Col>
            <Col xl="8" className="accuContent">
              <div>
                <p>{t("RightFX Limited is an Investment Firm incorporated")}</p>
                {/* <p><strong>RightFX limited</strong>is regulated by the Finanial Service Comission FSC in Mauritius <strong>(license no. GB 19024778)</strong> and is part of RightFX Group. Other subsidiaries of RightFX Group are regulated by the <strong>CySEC</strong>(license no. <strong> 340/17</strong>)</p> */}
              </div>
            </Col>
          </Row>

          {/* <img src={`/Trading/register-mobile${isRtl ? '-ar' : ''}.png`} alt="RightFX Partner" className="img-fluid free" /> */}
        </Container>
      </div>
    </>
  );
}
