import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { languages } from "../../helpers/Constants";
import Head from "next/head";

export default function TopNav() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [language, SetLanguageCode] = useState(router.locale);
  const [showCanvas, SetShowCanvas] = useState(false);
  const [menuDropdown, SetMenuDropdown] = useState("");
  const headerRef = useRef();

  const SetLanguage = (lang) => {
    SetLanguageCode(lang);
    router.push(router.asPath, router.asPath, { locale: lang });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (router.pathname == "/company-profile") {
      headerRef.current.style.backgroundColor = "black";
      if (window.pageYoffset > 1)
        headerRef.current.style.backgroundColor = "white";
    } else headerRef.current.style.backgroundColor = "transparent";
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll);
  //     // returned function will be called on component unmount
  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     }
  // }, []);

  const handleScroll = () => {
    const scroll = window.pageYOffset;
    if (headerRef) {
      if (scroll < 1) {
        headerRef.current.classList.remove("scroll-on");
        headerRef.current.style.backgroundColor = "transparent";
        if (router.pathname === "/company-profile") {
          headerRef.current.style.backgroundColor = "black";
        }
      } else {
        headerRef.current.classList.add("scroll-on");
        headerRef.current.style.backgroundColor = "white";
        if (router.pathname == "/company-profile")
          headerRef.current.style.backgroundColor = "white";
      }
    }
  };

  const handleToggle = () => {
    SetShowCanvas(!showCanvas);
    if (showCanvas)
      document.querySelector("body").classList.remove("off-canvas");
    else document.querySelector("body").classList.add("off-canvas");

    let hmburgr = document.getElementById("hamburger-1");
    if (hmburgr.classList.contains("is-active") == true) {
      handleToggleDropdown("");
    }
  };

  const hideMenuOnClick = () => {
    if (showCanvas) {
      SetShowCanvas(false);
      document.querySelector("body").classList.remove("off-canvas");
    }
  };

  const hideDropdown = () => {
    if (!showCanvas) setTimeout(() => SetMenuDropdown(""), 500);
  };

  const handleToggleDropdown = (value) => {
    if (value == menuDropdown) SetMenuDropdown("");
    else SetMenuDropdown(value);
  };
  // const handleLoginHomePge=()=>{
  //     handleToggle();
  //     let hmburgr = document.getElementById('hamburger-1');
  //     if(hmburgr.classList.contains('is-active') == false){
  //     setTimeout(()=>{
  //         handleToggleDropdown('Login');
  //     },500)
  // }
  // else{
  //     handleToggleDropdown('');
  // }
  // }
  return (
    <>
      <header
        className="sticky-header"
        ref={headerRef}
        style={{ maxWidth: "100%" }}
      >
        <Head>
          <title>
            RightFX - Trade Forex , Shares, Commodities and CFDs with CySEC |
            FSCM | JSC Regulated Broker
          </title>
          <meta
            name="description"
            content="RightFX offers CFDs on currency pairs Forex and five other asset classes. Start trading forex and gold online with the world’s Fastest Growing Broker and best forex broker."
          ></meta>
        </Head>
        <Container>
          <Navbar
            bg="light"
            className={`bg-transparent top ${showCanvas ? "off-canvas" : ""}`}
            expand={false}
          >
            {/* {showCanvas ==true ? 
                    <a className={` ${menuDropdown == 'Login' ? 'show' : ''}`} href="#" data-bs-toggle="dropdown" onClick={() => handleToggleDropdown('Login')}>
                                    <img src="/Layout/login-icon-blue.png" alt="" /> 
                                </a>: ''} */}

            <Link href="/">
              <Navbar.Brand href="/" className="brand p-0 cursor-pointer">
                <img
                  src="/Layout/top-logo-white.svg"
                  alt="RightFX logo"
                  className="main-logo"
                />
                <img
                  src="/Layout/top-logo.svg"
                  alt="RightFX logo"
                  className="menu-logo "
                />
              </Navbar.Brand>
            </Link>

            <div className="user-area d-none d-lg-flex">
              <div className="user-desk">
                <Nav
                  className={`offcanvas-collapse navbar navbar-expand-lg navbar-dark justify-content-center bottom ${
                    showCanvas ? "open" : ""
                  }`}
                >
                  <ul className="navbar-nav">
                    <li
                      className="nav-item dropdown"
                      onMouseLeave={hideDropdown}
                    >
                      <a
                        className={`nav-link  dropdown-toggle ${
                          menuDropdown == "Company" ? "show" : ""
                        }`}
                        href="#"
                        data-bs-toggle="dropdown"
                        onClick={() => handleToggleDropdown("Company")}
                      >
                        {" "}
                        {t("Company")}{" "}
                      </a>
                      <ul
                        className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-2 p-0 ${
                          menuDropdown == "Company" ? "show" : ""
                        }`}
                      >
                        <li onClick={hideMenuOnClick}>
                          <Link href="/company-profile">
                            <a className="dropdown-item">
                              {" "}
                              {t("Company Profile")}
                            </a>
                          </Link>
                        </li>
                        {/* <li onClick={hideMenuOnClick}><Link href="/careers"><a className="dropdown-item"> {t('Careers')}</a></Link></li> */}
                        <li onClick={hideMenuOnClick}>
                          <Link href="/legal-documents">
                            <a className="dropdown-item">
                              {" "}
                              {t("Legal Documents")}{" "}
                            </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/contact-us">
                            <a className="dropdown-item"> {t("Contact Us")} </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown"
                      onMouseLeave={hideDropdown}
                    >
                      <a
                        className={`nav-link  dropdown-toggle ${
                          menuDropdown == "Trading" ? "show" : ""
                        }`}
                        href="#"
                        data-bs-toggle="dropdown"
                        onClick={() => handleToggleDropdown("Trading")}
                      >
                        {" "}
                        {t("Trading")}{" "}
                      </a>
                      <ul
                        className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-2 p-0 ${
                          menuDropdown == "Trading" ? "show" : ""
                        }`}
                      >
                        <li onClick={hideMenuOnClick}>
                          <Link href="/mt5-desktop">
                            <a className="dropdown-item" href="#">
                              {" "}
                              {t("MT5")} {t("Desktop")}{" "}
                            </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/mt5-mobile">
                            <a className="dropdown-item" href="#">
                              {" "}
                              {t("MT5")} {t("Mobile")}{" "}
                            </a>
                          </Link>
                        </li>
                        {/* <li onClick={hideMenuOnClick}>
                          <Link href="/web-trader">
                            <a className="dropdown-item" href="#">
                              {" "}
                              {t("Web Trader")}{" "}
                            </a>
                          </Link>
                        </li> */}
                        <li onClick={hideMenuOnClick}>
                          <Link href="/accounts">
                            <a className="dropdown-item" href="#">
                              {" "}
                              {t("Account Types")}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown"
                      onMouseLeave={hideDropdown}
                    >
                      <a
                        className={`nav-link  dropdown-toggle ${
                          menuDropdown == "Markets" ? "show" : ""
                        }`}
                        href="#"
                        data-bs-toggle="dropdown"
                        onClick={() => handleToggleDropdown("Markets")}
                      >
                        {" "}
                        {t("Markets")}{" "}
                      </a>
                      <ul
                        className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-2 p-0 ${
                          menuDropdown == "Markets" ? "show" : ""
                        }`}
                      >
                        <li onClick={hideMenuOnClick}>
                          <Link href="/forex">
                            <a className="dropdown-item"> {t("Forex")} </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/indices-market">
                            <a className="dropdown-item"> {t("Indices")} </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/energies-market">
                            <a className="dropdown-item">
                              {" "}
                              {t("Commodities Energy")}{" "}
                            </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/stocks">
                            <a className="dropdown-item"> {t("Stocks")} </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/metals-market">
                            <a className="dropdown-item"> {t("Metals")} </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/exchange-market">
                            <a className="dropdown-item">
                              {" "}
                              {t("Exchange Futures")}{" "}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className="nav-item dropdown"
                      onMouseLeave={hideDropdown}
                    >
                      <a
                        className={`nav-link  dropdown-toggle ${
                          menuDropdown == "Partnership" ? "show" : ""
                        }`}
                        href="#"
                        data-bs-toggle="dropdown"
                        onClick={() => handleToggleDropdown("Partnership")}
                      >
                        {" "}
                        {t("Partnership")}
                      </a>
                      <ul
                        className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-1 p-0 ${
                          menuDropdown == "Partnership" ? "show" : ""
                        }`}
                      >
                        <li onClick={hideMenuOnClick}>
                          <Link href="https://portal.rightfx.com/ibregister">
                            <a className="dropdown-item">
                              {t("Introducing Business Partner")}{" "}
                            </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/white-label-partnership">
                            <a className="dropdown-item">
                              {" "}
                              {t("White Label partnership")}
                            </a>
                          </Link>
                        </li>
                        {/* <li onClick={hideMenuOnClick}>
                          <Link href="/corporate-live">
                            <a className="dropdown-item">
                              {" "}
                              {t("Corporate account")}
                            </a>
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown"
                      onMouseLeave={hideDropdown}
                    >
                      <a
                        className={`nav-link  dropdown-toggle ${
                          menuDropdown == "Insights" ? "show" : ""
                        }`}
                        href="#"
                        data-bs-toggle="dropdown"
                        onClick={() => handleToggleDropdown("Insights")}
                      >
                        {" "}
                        {t("Insights")}{" "}
                      </a>
                      <ul
                        className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-1 p-0 ${
                          menuDropdown == "Insights" ? "show" : ""
                        }`}
                      >
                        {/* <li onClick={hideMenuOnClick}><Link href="/glossary"><a className="dropdown-item"> {t('Glossary')} </a></Link></li> */}
                        <li onClick={hideMenuOnClick}>
                          <Link href="/economic-calendar">
                            <a className="dropdown-item">
                              {" "}
                              {t("Economic Calendar")}{" "}
                            </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/rightfx-academy">
                            <a className="dropdown-item">
                              {" "}
                              {t("RightFX Academy")}{" "}
                            </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/trading-faq">
                            <a className="dropdown-item">
                              {" "}
                              {t("Trading FAQ")}{" "}
                            </a>
                          </Link>
                        </li>
                        {/* <li onClick={hideMenuOnClick}><Link href="https://insights.rightfx.com/category/company-news"><a className="dropdown-item"> {t('Company News')} </a></Link></li> */}
                      </ul>
                    </li>
                    <li className="nav-item dropdown d-lg-none">
                      <a
                        className={`nav-link dropdown-toggle ${
                          menuDropdown == "Login" ? "show" : ""
                        }`}
                        href="#"
                        data-bs-toggle="dropdown"
                        onClick={() => handleToggleDropdown("Login")}
                      >
                        <img
                          src="/Layout/login-icon-blue.png"
                          alt=""
                          className="login-icon"
                        />{" "}
                        {t("Log in")}
                      </a>
                      <ul
                        className={`dropdown-menu fade-up portal p-0 ${
                          menuDropdown == "Login" ? "show" : ""
                        }`}
                      >
                        {/* <li onClick={hideMenuOnClick}>
                          <Link href="/web-trader">
                            <a className="dropdown-item"> {t("Web Trader")} </a>
                          </Link>
                        </li> */}
                        <li onClick={hideMenuOnClick}>
                          <Link href="https://portal.rightfx.com/login">
                            <a className="dropdown-item">
                              {" "}
                              {t("Client Portal")}{" "}
                            </a>
                          </Link>
                        </li>
                        <li onClick={hideMenuOnClick}>
                          <Link href="/https://portal.rightfx.com/ib/login">
                            <a className="dropdown-item"> {t("Partner")} </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="nav-item dropdown d-lg-none">
                                <a className={`nav-link  dropdown-toggle ${menuDropdown == 'Language' ? 'show' : ''}`} href="#" data-bs-toggle="dropdown" onClick={() => handleToggleDropdown('Language')}>
                                    <img src="/Layout/globe-icon-blue.png" alt="RightFX" /> <span style={{textTransform:'uppercase'}}> {language} </span>
                                </a>
                                <ul className={`dropdown-menu dropdown-menu-end fade-up p-0 column-2 language ${menuDropdown == 'Language' ? 'show' : ''}`}>
                                         {languages.map(lang =>
                                            lang.code === "sor" ? ( <li key={lang.name} style={{visibility :lang.code =="sor" ? 'hidden' : 'visible'}} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                            : ( <li key={lang.name} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                           
                                        )}
                                        {/* {languages.map(lang =>
                                            lang.code === "sor" ? ( <li key={lang.name} style={{visibility :lang.code =="sor" ? 'hidden' : 'visible'}} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                            : ( <li key={lang.name} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                           
                                        )} *-/}
                                </ul>
                            </li> */}
                    <li className="nav-item d-lg-none text-center">
                      <a
                        href="https://portal.rightfx.com/register"
                        className="btn btn-success"
                      >
                        {t("Open Account")}
                      </a>
                      <a
                        href="https://portal.rightfx.com/opendemoaccount"
                        className="btn btn-outline-secondary"
                      >
                        {t("Demo Account")}
                      </a>
                    </li>
                    {/* <li className="nav-item d-lg-none text-center help-txt">
                                            <span onClick={hideMenuOnClick}>
                                                <a href="https://support.rightfx.com/hc/en-us" target='_blank' rel="noreferrer" className="text-black">
                                                    {t('Help Support')} &nbsp;<img src="/Layout/support-icon.png" alt="RightFX" />
                                                </a>
                                            </span>
                                            <span>{t('CySEC')} | {t('FSCM')} | {t('JSC')}</span>
                                        </li> */}
                  </ul>
                </Nav>
                <div className="divider"></div>
              </div>
              <div className="user-actions">
                <a
                  href="https://portal.rightfx.com/register"
                  target="_parent"
                  variant="success"
                  className="btn btn-secondary btn-lg btn-success"
                >
                  {t("Open Account")}
                </a>
                {/* <Button variant="success" href="https://portal.rightfx.com/register">{t('Open Account')}</Button> */}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="none"
                    className="btn dropdown-toggle"
                    id="dropdown-basic"
                  >
                    <img src="/Layout/login-icon.png" alt="RightFX" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    alignright={true}
                    className="dropdown-menu-end p-0"
                    data-bs-popper="none"
                  >
                    {/* <li>
                      <Link href="/web-trader">
                        <a className="dropdown-item"> {t("Web Trader")} </a>
                      </Link>
                    </li> */}
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://portal.rightfx.com/login"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {t("Client Portal")}{" "}
                      </a>
                    </li>
                    <li>
                      <Link href="https://portal.rightfx.com/ib/login">
                        <a className="dropdown-item"> {t("Partner")} </a>
                      </Link>
                    </li>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Dropdown>
                                    <Dropdown.Toggle variant="none" className="btn dropdown-toggle" id="dropdown-basic">
                                        <img src="/Layout/globe-icon.png" alt="RightFX" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu alignright={true} className="dropdown-menu-end column-2 p-0" data-bs-popper="none">
                                    {languages.map(lang =>
                                            lang.code === "sor" ? ( <li key={lang.name} style={{visibility :lang.code =="sor" ? 'hidden' : 'visible'}} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                            : ( <li key={lang.name} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                           
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown> */}
              </div>
            </div>
            <div href="/" className="brand d-lg-none"></div>
            <div className="brnd-respnsive d-lg-none">
              <div className="lgnBtn">
                <a href="https://portal.rightfx.com/login">
                  <img
                    src="/Layout/login-icon.png"
                    alt=""
                    className="main-logo"
                  />
                  <img
                    src="/Layout/login-icon-blue.png"
                    alt=""
                    className="menu-logo"
                  />
                </a>
              </div>
              <div
                className={`d-lg-none hamburger ${
                  showCanvas ? "is-active" : ""
                }`}
                id="hamburger-1"
                onClick={() => handleToggle()}
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </Navbar>
          <Nav
            className={`main-menu offcanvas-collapse navbar navbar-expand-lg navbar-dark justify-content-center bottom ${
              showCanvas ? "open" : ""
            }`}
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown" onMouseLeave={hideDropdown}>
                <a
                  className={`nav-link  dropdown-toggle ${
                    menuDropdown == "Company" ? "show" : ""
                  }`}
                  href="#"
                  data-bs-toggle="dropdown"
                  onClick={() => handleToggleDropdown("Company")}
                >
                  {" "}
                  {t("Company")}{" "}
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-2 p-0 ${
                    menuDropdown == "Company" ? "show" : ""
                  }`}
                >
                  <li onClick={hideMenuOnClick}>
                    <Link href="/company-profile">
                      <a className="dropdown-item"> {t("Company Profile")}</a>
                    </Link>
                  </li>
                  {/* <li onClick={hideMenuOnClick}><Link href="/careers"><a className="dropdown-item"> {t('Careers')}</a></Link></li> */}
                  <li onClick={hideMenuOnClick}>
                    <Link href="/legal-documents">
                      <a className="dropdown-item"> {t("Legal Documents")} </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/contact-us">
                      <a className="dropdown-item"> {t("Contact Us")} </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseLeave={hideDropdown}>
                <a
                  className={`nav-link  dropdown-toggle ${
                    menuDropdown == "Trading" ? "show" : ""
                  }`}
                  href="#"
                  data-bs-toggle="dropdown"
                  onClick={() => handleToggleDropdown("Trading")}
                >
                  {" "}
                  {t("Trading")}{" "}
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-2 p-0 ${
                    menuDropdown == "Trading" ? "show" : ""
                  }`}
                >
                  <li onClick={hideMenuOnClick}>
                    <Link href="/mt5-desktop">
                      <a className="dropdown-item" href="#">
                        {" "}
                        {t("MT5")} {t("Desktop")}{" "}
                      </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/mt5-mobile">
                      <a className="dropdown-item" href="#">
                        {" "}
                        {t("MT5")} {t("Mobile")}{" "}
                      </a>
                    </Link>
                  </li>
                  {/* <li onClick={hideMenuOnClick}>
                    <Link href="/web-trader">
                      <a className="dropdown-item" href="#">
                        {" "}
                        {t("Web Trader")}{" "}
                      </a>
                    </Link>
                  </li> */}
                  <li onClick={hideMenuOnClick}>
                    <Link href="/accounts">
                      <a className="dropdown-item" href="#">
                        {" "}
                        {t("Account Types")}
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseLeave={hideDropdown}>
                <a
                  className={`nav-link  dropdown-toggle ${
                    menuDropdown == "Markets" ? "show" : ""
                  }`}
                  href="#"
                  data-bs-toggle="dropdown"
                  onClick={() => handleToggleDropdown("Markets")}
                >
                  {" "}
                  {t("Markets")}{" "}
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-2 p-0 ${
                    menuDropdown == "Markets" ? "show" : ""
                  }`}
                >
                  <li onClick={hideMenuOnClick}>
                    <Link href="/forex">
                      <a className="dropdown-item"> {t("Forex")} </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/indices-market">
                      <a className="dropdown-item"> {t("Indices")} </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/energies-market">
                      <a className="dropdown-item">
                        {" "}
                        {t("Commodities Energy")}{" "}
                      </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/stocks">
                      <a className="dropdown-item"> {t("Stocks")} </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/metals-market">
                      <a className="dropdown-item"> {t("Metals")} </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/exchange-market">
                      <a className="dropdown-item"> {t("Exchange Futures")} </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown" onMouseLeave={hideDropdown}>
                <a
                  className={`nav-link  dropdown-toggle ${
                    menuDropdown == "Partnership" ? "show" : ""
                  }`}
                  href="#"
                  data-bs-toggle="dropdown"
                  onClick={() => handleToggleDropdown("Partnership")}
                >
                  {" "}
                  {t("Partnership")}
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-1 p-0 ${
                    menuDropdown == "Partnership" ? "show" : ""
                  }`}
                >
                  <li onClick={hideMenuOnClick}>
                    <Link href="https://portal.rightfx.com/ibregister">
                      <a className="dropdown-item">
                        {t("Introducing Business Partner")}{" "}
                      </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/white-label-partnership">
                      <a className="dropdown-item">
                        {" "}
                        {t("White Label partnership")}
                      </a>
                    </Link>
                  </li>
                  {/* <li onClick={hideMenuOnClick}>
                    <Link href="/corporate-live">
                      <a className="dropdown-item"> {t("Corporate account")}</a>
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseLeave={hideDropdown}>
                <a
                  className={`nav-link  dropdown-toggle ${
                    menuDropdown == "Insights" ? "show" : ""
                  }`}
                  href="#"
                  data-bs-toggle="dropdown"
                  onClick={() => handleToggleDropdown("Insights")}
                >
                  {" "}
                  {t("Insights")}{" "}
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-end fade-up menu-fixed column-1 p-0 ${
                    menuDropdown == "Insights" ? "show" : ""
                  }`}
                >
                  {/* <li onClick={hideMenuOnClick}><Link href="/glossary"><a className="dropdown-item"> {t('Glossary')} </a></Link></li> */}
                  <li onClick={hideMenuOnClick}>
                    <Link href="/economic-calendar">
                      <a className="dropdown-item">
                        {" "}
                        {t("Economic Calendar")}{" "}
                      </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/rightfx-academy">
                      <a className="dropdown-item"> {t("RightFX Academy")} </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="/trading-faq">
                      <a className="dropdown-item"> {t("Trading FAQ")} </a>
                    </Link>
                  </li>
                  {/* <li onClick={hideMenuOnClick}><Link href="https://insights.rightfx.com/category/company-news"><a className="dropdown-item"> {t('Company News')} </a></Link></li> */}
                </ul>
              </li>
              <li className="nav-item dropdown d-lg-none">
                <a
                  className={`nav-link dropdown-toggle ${
                    menuDropdown == "Login" ? "show" : ""
                  }`}
                  href="#"
                  data-bs-toggle="dropdown"
                  onClick={() => handleToggleDropdown("Login")}
                >
                  <img
                    src="/Layout/login-icon-blue.png"
                    alt=""
                    className="login-icon"
                  />{" "}
                  {t("Log in")}
                </a>
                <ul
                  className={`dropdown-menu fade-up portal p-0 ${
                    menuDropdown == "Login" ? "show" : ""
                  }`}
                >
                  {/* <li onClick={hideMenuOnClick}>
                    <Link href="/web-trader">
                      <a className="dropdown-item"> {t("Web Trader")} </a>
                    </Link>
                  </li> */}
                  <li onClick={hideMenuOnClick}>
                    <Link href="https://portal.rightfx.com/login">
                      <a className="dropdown-item"> {t("Client Portal")} </a>
                    </Link>
                  </li>
                  <li onClick={hideMenuOnClick}>
                    <Link href="https://portal.rightfx.com/ib/login">
                      <a className="dropdown-item"> {t("Partner")} </a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item dropdown d-lg-none">
                                <a className={`nav-link  dropdown-toggle ${menuDropdown == 'Language' ? 'show' : ''}`} href="#" data-bs-toggle="dropdown" onClick={() => handleToggleDropdown('Language')}>
                                    <img src="/Layout/globe-icon-blue.png" alt="RightFX" /> <span style={{textTransform:'uppercase'}}> {language} </span>
                                </a>
                                <ul className={`dropdown-menu dropdown-menu-end fade-up p-0 column-2 language ${menuDropdown == 'Language' ? 'show' : ''}`}>
                                         {languages.map(lang =>
                                            lang.code === "sor" ? ( <li key={lang.name} style={{visibility :lang.code =="sor" ? 'hidden' : 'visible'}} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                            : ( <li key={lang.name} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                           
                                        )}
                                        {/* {languages.map(lang =>
                                            lang.code === "sor" ? ( <li key={lang.name} style={{visibility :lang.code =="sor" ? 'hidden' : 'visible'}} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                            : ( <li key={lang.name} className={`${language === lang.code ? 'active' : ''}`}><Dropdown.Item href="#" onClick={() => SetLanguage(lang.code)}><img src={lang.icon} alt="RightFX" /> {lang.name} </Dropdown.Item></li>)
                                           
                                        )} *-/}
                                </ul>
                            </li> */}
              <li className="nav-item d-lg-none text-center">
                <a
                  href="https://portal.rightfx.com/register"
                  className="btn btn-success"
                >
                  {t("Open Account")}
                </a>
                <a
                  href="https://portal.rightfx.com/opendemoaccount"
                  className="btn btn-outline-secondary"
                >
                  {t("Demo Account")}
                </a>
              </li>
              {/* <li className="nav-item d-lg-none text-center help-txt">
                                <span onClick={hideMenuOnClick}>
                                    <a href="https://support.rightfx.com/hc/en-us" target='_blank' rel="noreferrer" className="text-black">
                                        {t('Help Support')} &nbsp;<img src="/Layout/support-icon.png" alt="RightFX" />
                                    </a>
                                </span>
                                <span>{t('CySEC')} | {t('FSCM')} | {t('JSC')}</span>
                            </li> */}
            </ul>
          </Nav>
        </Container>
      </header>
    </>
  );
}
