import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import Blockquote from "../components/common/Blockquote.Component";
import useTranslation from "next-translate/useTranslation";

export default function LegalDocument() {
  const { t } = useTranslation("legal-documents");
  const [selectedTab, setSelectedTab] = useState("Pro");

  const onChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="legal-docs">
      <TopStaticCarousel
        image="/Company/leagl-docs-top-bg.png"
        title={
          <>
            {t("Legal")} <span>{t("Documents")}</span>
          </>
        }
        description={t("To better understand Forex margin trading and CFD")}
        position="end"
        align="left"
        noButton={true}
      />

      <Container>
        <Row>
          <Col xs="12">
            <Blockquote
              title={t("Privacy Policy")}
              description={t("This site is owned and operated by RightFX")}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg="6" className="mb-5">
            <p
              className="font-raleway fw-600"
              dangerouslySetInnerHTML={{ __html: t("Policy") }}
            ></p>
          </Col>
          <Col lg="6" className="mb-5">
            <h5 className="ps-md-3">
              {t("RightFX Limited gathers and tracks")}:
            </h5>
            <ol className="">
              <li className="mb-4">
                {t("Information that users disclose through optional")}
              </li>
              <li>
                {t(
                  "Information that users disclose to request a free Demo account"
                )}
              </li>
            </ol>
          </Col>
        </Row>
      </Container>

      <div className="legal-doc-desclaimer">
        <Container>
          <Row className="justify-content-center">
            <Col xs="10">
              <div className="title">
                <div className="quote">
                  <h3>
                    <span>{t("Risk Disclaimer")}</span>
                  </h3>
                  <p>
                    {t("RightFX Limited is an Investment Firm incorporated")}
                  </p>
                  {/* <p>·  {t('RIGHTFX LTD is authorised and regulated by the Financial Service Commission')}</p> */}
                  {/* <p>·  {t('Footer8')}</p> */}
                </div>
                {/* <h4 className="fw-300">{t('High Risk Investment Warning')}</h4>
                <p>{t('Warning1')}</p>
                <p>{t('Warning2')}</p>
                <p>{t('Warning3')}</p>
                <p>{t('Warning4')}</p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="document-list">
        <Container className="mb-5">
          <Row>
            <Col xs="12">
              <Blockquote
                title={t("RightFX Legal Documents")}
                description={t("Download PDF Files")}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 5, offset: 1 }} md="6" className="mb-3">
              <a href="/documents/RightFX-VPS-Service.docx" target="_blank">
                <img
                  src="/Company/PDF-ICON-01.svg"
                  width="30"
                  alt="RightFX VPS Service"
                />
                <span className="ms-3 doc-title">
                  {" "}
                  {t("RightFX VPS Service")}
                </span>
              </a>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md="6" className="mb-3">
              <a
                href="/documents/Compliant-Handling-Procedures.docx"
                target="_blank"
              >
                <img
                  src="/Company/PDF-ICON-01.svg"
                  width="30"
                  alt="RightFX Limited Complaint Procedures"
                />
                <span className="ms-3 doc-title">
                  {" "}
                  {t("RightFX Limited Complaint Procedures")}
                </span>
              </a>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md="6" className="mb-3">
              <a
                href="/documents/Withdrawal-and-Refund-Policy.docx"
                target="_blank"
              >
                <img
                  src="/Company/PDF-ICON-01.svg"
                  width="30"
                  alt="Withdrawal and Refund Policy"
                />
                <span className="ms-3 doc-title">
                  {" "}
                  {t("Withdrawal and Refund Policy")}
                </span>
              </a>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md="6" className="mb-3">
              <a href="/documents/Privacy-Notice.docx" target="_blank">
                <img
                  src="/Company/PDF-ICON-01.svg"
                  width="30"
                  alt="RightFX Limited Privacy Notice"
                />
                <span className="ms-3 doc-title">
                  {" "}
                  {t("RightFX Limited Privacy Notice")}
                </span>
              </a>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md="6" className="mb-3">
              <a href="/documents/Risk-Warning-Notice.docx" target="_blank">
                <img
                  src="/Company/PDF-ICON-01.svg"
                  width="30"
                  alt="Risk Warning Notice"
                />
                <span className="ms-3 doc-title">
                  {" "}
                  {t("Risk Warning Notice")}
                </span>
              </a>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md="6" className="mb-3">
              <a
                href="/documents/Summary-Order-Execution-Policy.docx"
                target="_blank"
              >
                <img
                  src="/Company/PDF-ICON-01.svg"
                  width="30"
                  alt="Summary Order Execution Policy"
                />
                <span className="ms-3 doc-title">
                  {" "}
                  {t("Summary Order Execution Policy")}
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
