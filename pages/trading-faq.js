import { Container, Row, Col } from 'react-bootstrap';
import AccordionCust from '../components/common/AccordionCust.Component';
import Blockquote from '../components/common/Blockquote.Component';
import TopStaticCarousel from '../components/common/TopStaticCarousel.Component';
import useTranslation from 'next-translate/useTranslation';

const faqAccordionData = [{
  header: 'faq_header_1',
  body: 'faq_body_1'
}, {
  header: 'faq_header_2',
  body: 'faq_body_2'
}, {
  header: 'faq_header_3',
  body: 'faq_body_3'
}, {
  header: 'faq_header_4',
  body: 'faq_body_4'
}, {
  header: 'faq_header_5',
  body: 'faq_body_5'
}, {
  header: 'faq_header_6',
  body: 'faq_body_6'
}, {
  header: 'faq_header_7',
  body: 'faq_body_7'
}, {
  header: 'faq_header_8',
  body: 'faq_body_8'
}, {
  header: 'faq_header_9',
  body: 'faq_body_9'
}, {
  header: 'faq_header_10',
  body: 'faq_body_10'
}, {
  header: 'faq_header_11',
  body: 'faq_body_11'
}];

export default function HelpCenter() {
  const { t } = useTranslation('trading-faq');
  return (
    <>
      <div className="help-center">
        <TopStaticCarousel
          image="Trading/FAQS.jpg"
          title={<label dangerouslySetInnerHTML={{ __html: t('Trading Faqs') }}></label>}
          description={t('We are regarded as industry leaders')}
          position='center'
          align='left'
          noButton={true}
        />

        <div className="academy-intro p-0">
          <Container>
            <Row>
              <Col xs="12">
                <Blockquote
                  title={t('Frequently Asked Questions')}
                  description={t('We are regarded as industry leaders')}
                />
              </Col>
            </Row>
          </Container>
          <div className="academy-data pt-0">
            <Container>
              <Row>
                <Col lg="12">
                  <AccordionCust items={faqAccordionData} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}
