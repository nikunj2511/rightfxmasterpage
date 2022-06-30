import { Carousel, Container } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { languages } from "../../helpers/Constants";
export default function TopCarousel() {
  const { t } = useTranslation("home");
  const [arLang, setArLang] = useState(false);
  const [arLangMob, setArLangMob] = useState(false);
  const router = useRouter();
  const isRTL = languages.filter((x) => x.code === router.locale)[0].isRtl;

  useEffect(() => {
    if (
      router.locale == "ar" ||
      (router.locale == "far" && window.innerWidth > 600)
    ) {
      setArLang(true);
    } else if (
      router.locale == "ar" ||
      (router.locale == "far" && window.innerWidth < 600)
    ) {
      setArLangMob(true);
    } else {
      setArLang(false);
      setArLangMob(false);
    }
  });
  const handleActive = (e) => {
    if (document.querySelector(".button-active") !== e.currentTarget)
      document
        .querySelector(".button-active")
        .classList.remove("button-active");
    e.currentTarget.classList.add("button-active");
  };
  return (
    <div className="hero-slider" id="s1">
      <Container>
        <div className="hero-slider-content">
          <div className="text-center">
            <h1>{t("header-title")} </h1>
            <p>{t("header-p")}</p>
          </div>
          <div className="buttons-group desktop-view">
            <div>
              <a
                onMouseEnter={handleActive}
                href="https://portal.rightfx.com/opendemoaccount"
                className="btn btn-rounded plan_round_btn white-button hero-button"
              >
                <strong className="text-center">
                  {t("Open Demo Account")}
                </strong>
              </a>
            </div>
            <div>
              <a
                onMouseEnter={handleActive}
                href="https://portal.rightfx.com/register"
                className="btn btn-rounded plan_round_btn white-button hero-button button-active second-button"
              >
                <strong className="text-center">
                  {t("Open Live Account")}
                </strong>
              </a>
            </div>
          </div>
          <div className="my-5">
            <img
              width="90%"
              style={{ marginLeft: "5%" }}
              src="/Home/laptop.png"
            ></img>
          </div>
          <div className="buttons-group mobile-view mb-5">
            <div>
              <a
                onMouseEnter={handleActive}
                href="https://portal.rightfx.com/opendemoaccount"
                className="btn btn-rounded plan_round_btn white-button hero-button"
              >
                <strong className="text-center">
                  {t("Open Demo Account")}
                </strong>
              </a>
            </div>
            <div>
              <a
                onMouseEnter={handleActive}
                href="https://portal.rightfx.com/register"
                className="btn btn-rounded plan_round_btn white-button hero-button button-active second-button"
              >
                <strong className="text-center">
                  {t("Open Live Account")}
                </strong>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div>
        {/* <img src="/Home/HERO-BANNER-BG.jpg" className="d-sm-block w-100 bg" alt="RightFX Banner" /> */}
        {/* <div className='content'>
                    <div className='text-center'>
                        <div>
                            <h1>{t('header-title')} </h1>
                            <p>
                                {t('header-p')}
                            </p>
                        </div>
                        <div>
                            <img src="/Home/laptop.png"></img>
                        </div>
                        <div className='buttons-group desktop-view'>
                            <div>
                                <a
                                    onMouseEnter={handleActive}
                                    href="https://portal.rightfx.com/register"
                                    className="btn btn-rounded plan_round_btn white-button hero-button">
                                    <strong className="text-center">
                                        {t('Open Demo Account')}
                                    </strong>
                                </a>
                            </div>
                            <div>
                                <a
                                    onMouseEnter={handleActive}
                                    href="https://portal.rightfx.com/register"
                                    className="btn btn-rounded plan_round_btn white-button hero-button button-active second-button">
                                    <strong className="text-center">
                                        {t('Open Live Account')}
                                    </strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttons-group mobile-view'>
                    <div>
                        <a
                            onMouseEnter={handleActive}
                            href="https://portal.rightfx.com/register"
                            className="btn btn-rounded plan_round_btn white-button hero-button">
                            <strong className="text-center">
                                {t('Open Demo Account')}
                            </strong>
                        </a>
                    </div>
                    <div>
                        <a
                            onMouseEnter={handleActive}
                            href="https://portal.rightfx.com/register"
                            className="btn btn-rounded plan_round_btn white-button hero-button button-active second-button">
                            <strong className="text-center">
                                {t('Open Live Account')}
                            </strong>
                        </a>
                    </div>
                </div> */}
      </div>
      {/* <Carousel indicators={true} fade={false} controls={false} interval={3000} slide={true}> */}
      {/* <Carousel.Item>
                    {!arLang == true ? 
                    <img src="/Home/slider-3.jpg" className="d-none d-sm-block w-100" alt="RightFX Banner" />:
                   <img src="/Home/ACCUPAY-SLIDER-AR.jpg" className="d-none d-sm-block w-100 ar-img-clas" alt="RightFX Banner" /> }
                   {!arLangMob == true ? 
                    <img src="/Home/slider-3-xs.jpg" className="d-block d-sm-none w-100 ar-img-clas" alt="RightFX Banner" />:
                    <img src="/Home/slider-3-xs-ar.jpg" className="d-block d-sm-none w-100" alt="RightFX Banner" />}
                    <Carousel.Caption className="style-3">
                        <h1>{t('banner3_title')} <span>{t('banner3_title2')}</span> {t('banner3_title3')}</h1>
                        <a className="btn btn-secondary btn-lg" href="https://rightfx.com/register/accupay/" target="_blank" rel="noreferrer" > {t('banner_button')} </a>
                        {/* <Link href="https://portal.rightfx.com/register"><a className="btn btn-secondary btn-lg">{t('banner_button')}</a></Link> */}
      {/* <button className="btn btn-secondary btn-lg">{t('banner_button')}</button> *-/}
                    </Carousel.Caption>
                </Carousel.Item> */}
      {/* <Carousel.Item>
                    <img src="/Home/slider-1.jpg" className="d-none d-sm-block w-100" alt="RightFX Banner" />
                    <img src="/Home/slider-1-xs.jpg" className="d-block d-sm-none w-100" alt="RightFX Banner" />
                    <Carousel.Caption className="style-1">
                        <h1>
                            {t('banner1_title')}
                            <span> {t('banner1_title2')}</span></h1>
                        <Link href="https://portal.rightfx.com/register"><a className="btn btn-secondary btn-lg">{t('banner_button')}</a></Link> */}
      {/* <button href="/metals-market" className="btn btn-secondary btn-lg">{t('banner_button')}</button> */}
      {/* </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/Home/slider-2.jpg" className="d-none d-sm-block w-100" alt="RightFX Banner" />
                    <img src="/Home/slider-2-xs.jpg" className="d-block d-sm-none w-100" alt="RightFX Banner" />
                    <Carousel.Caption className="style-5">
                        <h1>{t('banner6_title')}<span>{t('banner6_title2')} </span> <span>{t('banner6_title3')}</span></h1>
                        <Link href="/stocks"><a className="btn btn-secondary btn-lg">{t('Learn More')}</a></Link> */}
      {/* <button className="btn btn-secondary btn-lg">{t('banner_button')}</button> */}
      {/* </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/Home/slider-3.jpg" className="d-none d-sm-block w-100" alt="RightFX Banner" />
                    <img src="/Home/slider-3-xs.jpg" className="d-block d-sm-none w-100" alt="RightFX Banner" />
                    <Carousel.Caption className="style-3">
                        <h1>
                            <span>{t('banner5_title')}</span>
                            {t('banner5_title2')}</h1>
                        <Link href="https://portal.rightfx.com/register"><a className="btn btn-secondary btn-lg">{t('banner_button')}</a></Link>
                    </Carousel.Caption>
                </Carousel.Item> */}
      {/* <Carousel.Item>
                    <img src="/Home/slider-2.jpg" className="d-none d-sm-block w-100" alt="RightFX Banner" />
                    <img src="/Home/slider-2-xs.jpg" className="d-block d-sm-none w-100" alt="RightFX Banner" />
                    <Carousel.Caption className="style-2">
                        <h1>{t('banner2_title')} <span>{t('banner2_title2')}</span></h1>
                        <Link href="https://portal.rightfx.com/register"><a className="btn btn-secondary btn-lg">{t('banner_button')}</a></Link>
                    </Carousel.Caption>
                </Carousel.Item> 
              
                <Carousel.Item>
                    <img src="/Home/slider-4.jpg" className="d-none d-sm-block w-100 " alt="RightFX Banner" />
                    <img src="/Home/slider-4-xs.jpg" className="d-block d-sm-none w-100" alt="RightFX Banner" />
                    <Carousel.Caption className="style-4">
                        <h1><span>{t('banner4_title')}</span> {t('banner4_title2')} <br /> {t('banner4_title3')} <span>{t('banner4_title4')}</span> </h1>
                        <a className="btn btn-secondary btn-lg" href="https://rightfx.com/register/real-zero/" target="_blank" rel="noreferrer" > {t('banner_button')} </a>
                        
                    </Carousel.Caption>
                </Carousel.Item>*/}
      {/* </Carousel> */}
    </div>
  );
}
