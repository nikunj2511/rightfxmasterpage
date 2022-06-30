import { Row, Col, Container } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
  },
  mobile: {
    breakpoint: {
      max: 515,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 515,
    },
    items: 2,
  },
};
const accountTypes = [
  {
    name: "PRO",
    features: [
      { firstSpan: "Minimum Deposit: ", secondSpan: "$250" },
      { firstSpan: "Spread: ", secondSpan: "From 1.4" },
      { firstSpan: "Commission: ", secondSpan: "No" },
      { firstSpan: "Leverage: ", secondSpan: "1:500" },
      { firstSpan: "Swap Free: ", secondSpan: "10 days" },
      { firstSpan: "Trading Platform: ", secondSpan: "MT5" },
      { firstSpan: "Execution: ", secondSpan: "Market Execution" },
      {
        firstSpan: "Trading Instrument: ",
        secondSpan: "+300 Instruments. Forex, Metals, Indices, Energy",
      },
      { firstSpan: "Account Currency: ", secondSpan: "USD" },
      {
        firstSpan: "Minimum Trade Size: ",
        secondSpan: "0.01 for Forex and Metals",
      },
      { firstSpan: "Stop out level: ", secondSpan: "30%" },
    ],
    imgSrc: "/Icons-Banners/account-types/ICONS-02.svg",
  },
  {
    name: "VIP",
    features: [
      { firstSpan: "Minimum Deposit: ", secondSpan: "$5,000" },
      { firstSpan: "Spread: ", secondSpan: "From 0.9" },
      { firstSpan: "Commission: ", secondSpan: "No" },
      { firstSpan: "Leverage: ", secondSpan: "1:500" },
      { firstSpan: "Swap Free: ", secondSpan: "10 days" },
      { firstSpan: "Trading Platform: ", secondSpan: "MT5" },
      { firstSpan: "Execution: ", secondSpan: "Market Execution" },
      {
        firstSpan: "Trading Instrument: ",
        secondSpan: "+300 Instruments. Forex, Metals, Indices, Energy",
      },
      { firstSpan: "Account Currency: ", secondSpan: "USD" },
      {
        firstSpan: "Minimum Trade Size: ",
        secondSpan: "0.01 for Forex and Metals",
      },
      { firstSpan: "Stop out level: ", secondSpan: "30%" },
    ],
    imgSrc: "/Icons-Banners/account-types/ICONS-03.svg",
    className: "account-types-active",
  },
  {
    name: "ECN",
    features: [
      { firstSpan: "Minimum Deposit: ", secondSpan: "$15,000" },
      { firstSpan: "Spread: ", secondSpan: "From 0.2" },
      { firstSpan: "Commission: ", secondSpan: "5$ Per Lot" },
      { firstSpan: "Leverage: ", secondSpan: "1:500" },
      { firstSpan: "Swap Free: ", secondSpan: "Free" },
      { firstSpan: "Trading Platform: ", secondSpan: "MT5" },
      { firstSpan: "Execution: ", secondSpan: "Market Execution" },
      {
        firstSpan: "Trading Instrument: ",
        secondSpan: "+300 Instruments. Forex, Metals, Indices, Energy",
      },
      { firstSpan: "Account Currency: ", secondSpan: "USD" },
      {
        firstSpan: "Minimum Trade Size: ",
        secondSpan: "0.01 for Forex and Metals",
      },
      { firstSpan: "Stop out level: ", secondSpan: "30%" },
    ],
    imgSrc: "/Icons-Banners/account-types/ICONS-01.svg",
  },
];

const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button>
      <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button>
    </div>
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4>These buttons can be positioned anywhere you want on the screen</h4>
      <CustomLeftArrow onClick={previous}>Prev</CustomLeftArrow>
      <CustomRightArrow onClick={next}>Next</CustomRightArrow>
    </div>
  );
};

export default function AccountTypes() {
  const handleActive = (e) => {
    if (document.querySelector(".account-types-active") !== e.currentTarget) {
      document
        .querySelector(".account-types-active")
        .classList.remove("account-types-active");
    }
    e.currentTarget.classList.add("account-types-active");
  };
  const { t } = useTranslation();
  return (
    <div className="account-types">
      <Container>
        <Row>
          <Col className="py-5">
            <div className="text-center">
              <h1>
                <span style={{ color: "#3b952e" }}>{t("RightFx ")}</span>
                <span
                  style={{ color: "black" }}
                  dangerouslySetInnerHTML={{
                    __html: t(
                      "Accounts are essentially <br/> made to please our customers."
                    ),
                  }}
                ></span>
              </h1>
              <p
                style={{ color: "black" }}
                dangerouslySetInnerHTML={{
                  __html: t(
                    `Instant execution, fast performance, no wasted time. With our various sets of accounts, you can choose whatever matches your investment needs.`
                  ),
                }}
              ></p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="py-5">
            <div className="text-center">
              <Carousel
                centerMode={false}
                partialVisbile={false}
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                containerClass="carousel-container-multi"
                dotListClass=""
                infinite
                keyBoardControl
                responsive={responsive}
                // sliderClass="carousel-slider-multi"
                slidesToSlide={1}
                swipeable
                focusOnSelect
                partialVisible={false}
                showDots={false}
                renderDotsOutside={true}
                renderButtonGroupOutside={true}
                // customButtonGroup={<CustomButtonGroupAsArrows />}
              >
                {accountTypes.map((account, index) => (
                  <div
                    key={`ac-${index}`}
                    className={`carousel-item-multi ${
                      account.className ? account.className : ""
                    }`}
                    onMouseEnter={handleActive}
                  >
                    <div>
                      <h5>{t(account.name)}</h5>
                      <img
                        width="70"
                        height="70"
                        src={account.imgSrc}
                        className="my-3"
                      ></img>
                      <div className="features-div">
                        {account.features.map((feature, key) => (
                          <div key={`ac-${index}-fe-${key}`} className="my-1">
                            <span className="me-2">
                              <i className="bi bi-check-circle"></i>
                            </span>
                            <span>{t(feature.firstSpan)}</span>
                            <span style={{ fontWeight: "bold" }}>
                              {t(feature.secondSpan)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div>
                        <a
                          href="https://portal.rightfx.com/register"
                          className="mt-4 btn btn-rounded plan_round_btn white-button"
                        >
                          <strong className="text-center" s>
                            {t("Open a Live Account")}
                          </strong>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://portal.rightfx.com/opendemoaccount"
                          className="btn btn-rounded plan_round_btn black-button"
                        >
                          <strong className="text-center">
                            {t("Open a Demo Account")}
                          </strong>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className='carousel-item-multi' style={{ backgroundColor: "#ff0505" }}>asdasd</div>
                            <div className='carousel-item-multi'>asdasd</div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
