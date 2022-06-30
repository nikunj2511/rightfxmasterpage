import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import TopCarousel from '../components/partner/TopCarousel.Component';
import BrokerProgram from '../components/partner/BrokerProgram.Component';
import Benifits from '../components/partner/Benifits.Component';
import Features from '../components/partner/Features.Component';
import IBRegisterationForm from '../components/forms/IBRegisterationForm.Component';
import LoginForm from '../components/forms/LoginForm.Component';
import { languages } from '../helpers/Constants';
import useTranslation from 'next-translate/useTranslation';

export default function Partner() {
  const { t } = useTranslation('markets');
  const [activeTab, setActiveTab] = useState('Register');

  const router = useRouter();
  const isRtl = languages.filter(x => x.code === router.locale)[0].isRtl;

  return (
    <>
      <TopCarousel />
      <BrokerProgram />
      <Benifits />
      <Features />

      <div className="partner-form">
        <Container className="position-relative">
          <Row>
            <Col xs="12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className={`nav-item parent ${activeTab === 'Register' ? 'active' : ''}`} role="presentation">
                  <button className="nav-link active" onClick={() => setActiveTab('Register')} id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="true">{t('Register')}</button>
                </li>
                <li className={`nav-item parent ${activeTab === 'Login' ? 'active' : ''}`} role="presentation">
                  <button className="nav-link" onClick={() => setActiveTab('Login')} id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="false">{t('Log in')}</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className={`tab-pane fade ${activeTab === 'Register' ? 'show active' : ''}`} id="register" role="tabpanel" aria-labelledby="register-tab">
                  <Row>
                    <Col lg="6">
                      <IBRegisterationForm />
                    </Col>
                  </Row>
                </div>
                <div className={`tab-pane fade ${activeTab === 'Login' ? 'show active' : ''}`} id="login" role="tabpanel" aria-labelledby="login-tab">
                  <Row>
                    <Col lg="6">
                      <h6 className="text-muted mb-3">{t('Fill in the fields below to login to your account')}</h6>
                      <LoginForm />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row >
          <img src={`/Trading/register-mobile${isRtl ? '-ar' : ''}.png`} alt="RightFX Partner" className="img-fluid free" />
        </Container >
      </div >
    </>
  )
}
