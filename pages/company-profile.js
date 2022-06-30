import { Container, Row, Col, Form } from 'react-bootstrap';
import AboutUs from '../components/company/AboutUs.Component';
import ContactForm from '../components/company/ContactForm.Component';
import Offices from '../components/company/Offices.Component';
import TopStaticCarousel from '../components/company/TopStaticCarousel.Component';
import useTranslation from 'next-translate/useTranslation';

export default function CompanyProfile() {
  const { t } = useTranslation('company-profile');
  return (
    <div className='company-profile'>
      <div className='header'>
        {/* <img src="/company/HEADER.jpg" /> */}
        <h3 className='text-center'>Everything you need to know to <span style={{ color: "black" }}>Start Trading</span> with us</h3>
      </div>
      <AboutUs />

      <Offices />

      <div className="regulations">
        <Container>
          <Row>
            <Col xs="12">
              <h2>{t('Regulations')}</h2>
              <p>{t('common:Footer1')}</p>
              <p>{t('common:Footer2')}</p>
              <p dangerouslySetInnerHTML={{ __html: t('common:Footer3') }} />
              <p dangerouslySetInnerHTML={{ __html: t('common:Footer4') }} />
              <p className="riskwarning" dangerouslySetInnerHTML={{ __html: t('common:Footer5') }} />
            </Col>
          </Row>
        </Container>
      </div>

      <ContactForm />
    </div>
  )
}
