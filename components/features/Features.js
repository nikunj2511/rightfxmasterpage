import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Features() {
  const { t } = useTranslation();

  return (
    <div className="features-container">
      <Container>
        <Row>
          <Col className="col-12 col-lg-4 my-4 text-center">
            <div className="feature-icon">
              <i className="bi bi-book"></i>
            </div>
            <h4 className="mb-4">{t("Trading Academy")}</h4>
            <p className="px-3">
              {t(
                "Learning how to trade isn’t that hard anymore! Join our trading academy, and learn how to be an expert trader."
              )}
            </p>
            <Link href="/rightfx-academy">
              <a className="mt-4 btn btn-rounded features_round_btn">
                <strong className="text-center">{t("See More")}</strong>
              </a>
            </Link>
          </Col>
          <Col className="col-12 col-lg-4 my-4 text-center">
            <div className="feature-icon">
              <i className="bi bi-telephone-inbound"></i>
            </div>
            <h4 className="mb-4">{t("Customer Support")}</h4>
            <p className="px-3">
              {t("Our trusted, trained CS team is available 24/7.")}
            </p>
            <Link href="/contact-us">
              <a className="mt-5 btn btn-rounded features_round_btn">
                <strong className="text-center">{t("See More")}</strong>
              </a>
            </Link>
          </Col>
          <Col className="col-12 col-lg-4 my-4 text-center">
            <div>
              <i className="bi bi-activity"></i>
            </div>
            <h4 className="mb-4">{t("Account Funding")}</h4>
            <p className="px-3">
              {t(
                "Quick and easy, choose from a list of easy funding methods and start trading today!"
              )}
            </p>
            <Link href="https://my.rightfx.com">
              <a className="mt-4 btn btn-rounded features_round_btn">
                <strong className="text-center">{t("See More")}</strong>
              </a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-lg-6 my-4 text-center">
            <div className="feature-icon-modified">
              <i className="bi bi-columns"></i>
            </div>
            <h4 className="mb-4">{t("Accounts Comparison")}</h4>
            <p className="px-3">
              {t("Compare different types of accounts to suit your needs.")}
            </p>
            <Link href="/accounts">
              <a className="mt-5 btn btn-rounded features_round_btn">
                <strong className="text-center">{t("See More")}</strong>
              </a>
            </Link>
          </Col>
          <Col className="col-12 col-lg-6 my-4 text-center">
            <div>
              <i className="bi bi-credit-card"></i>
            </div>
            <h4 className="mb-4">{t("Withdrawal")}</h4>
            <p className="px-3">
              {t(
                "Take advantage of our fast withdrawal processing within 1 working day."
              )}
            </p>
            <Link href="https://portal.rightfx.com/login">
              <a className="mt-4 btn btn-rounded features_round_btn">
                <strong className="text-center">{t("See More")}</strong>
              </a>
            </Link>
          </Col>
          {/* <Col className="col-12 col-lg-4 my-4 text-center">
                        <div>
                            <i className="bi bi-calendar-week"></i>
                        </div>
                        <h4 className='mb-4'>{t('Organize Your Deadlines')}</h4>
                        <p className='px-3'>
                            {t('You will be provided with organizational tools so you will NEVER lose control of your deadlines.')}
                        </p>
                        <Link href="/economic-calendar">
                            <a
                                className="mt-4 btn btn-rounded features_round_btn">
                                <strong className="text-center">
                                    {t('See More')}
                                </strong>
                            </a>
                        </Link>
                    </Col> */}
        </Row>
      </Container>
    </div>
  );
}
