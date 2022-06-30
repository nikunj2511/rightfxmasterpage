import { Container, Row, Col } from 'react-bootstrap';

import ContactForm from '../components/forms/ContactForm.Component';
import useTranslation from 'next-translate/useTranslation';
import { languages } from '../helpers/Constants';
import { useRouter } from 'next/router';
export default function ContactUs() {
  const { t } = useTranslation('contact-us');
  const router = useRouter();
  const isRTL = languages.filter(x => x.code === router.locale)[0].isRtl;

  return (
    <>
      <div className="hero-slider-static style2" style={{ "backgroundImage": "url(/Company/contact-banner.jpg)" }}>
        <div className="caption">
          <Container>
            <Row className="justify-content-between">
              <Col sm="5">
                <h1 dangerouslySetInnerHTML={{ __html: t('Contact us') }}></h1>
                <p>{t('For any questions, concerns or inquiries')}</p>
              </Col>
              <Col sm="6">
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="contact-information">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <div className="item text-center">
                <img src="/Company/call-icon.svg" alt="RightFX Contact" />
                <h4>{t('Office Phone')}</h4>
                <p>St. Vincent office phone: <strong>+1 213-293-2025</strong></p>
                <p>Dubai office phone: <strong>+971 508738696</strong></p>
                {/* <p>{t('Cyprus Office Phone')}: <strong>{isRTL ? "262207 25 00357" : "00357 25 262207"}</strong></p>
                {/* <p>{t('Dubai - UAE Office Phone')}: <strong>00971 4 5745400</strong></p> */}
                {/* <p>{t('Jordan Office Phone')}: <strong>+962 6 5609000</strong></p>
                <p>{t('Ebene 72201 - Mauritius Office Phone')}: <strong>00230 464 4888</strong></p>  */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center">
                <img src="/Company/support-icon.svg" alt="RightFX Contact" />
                <h4>{t('Client Support')}</h4>
                <p><strong>support@rightfx.com</strong></p>
                <p>{t('Working hours')}: 24/5</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center">
                <img src="/Company/marker-icon.svg" alt="RightFX Contact" />
                <h4>{t('Office Address')}</h4>
                <p><strong>ST VINCENT AND THE GRENADINES OFFICE</strong></p>
                <p>Suite 305, Griffth Corporate Center, Kingstown St. Vincent and the Grenadines</p>
                <p><strong>DUBAI OFFICE</strong></p>
                <p>1103, Regal tower, Business bay, Dubai</p>
                {/* <p><strong>{t('Cyprus')}</strong></p>
                <p>{t('Cyprus Address')}</p>
                <p><strong>{t('Mauritius_contact_us')}</strong></p>
                <p>{t('Mauritius Address_contact_us')}</p>
                <p><strong>{t('Jordan')}</strong></p>
                <p>{t('Jordan Address')}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
