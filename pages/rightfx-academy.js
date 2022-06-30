import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopStaticCarousel from '../components/common/TopStaticCarousel.Component';
import useTranslation from 'next-translate/useTranslation';
import AccordionLang from '../components/common/AccordionLang.Component';

export default function RightFXAcademy() {
  const { t } = useTranslation('rightfx-academy');
  const ref = useRef();

  const [isSticky, setSticky] = useState(false);
  const refParent = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (ref.current) {
      const curWidth = window.innerWidth;
      const top = refParent.current.getBoundingClientRect().top;

      //FOR CHECK IN DESKTOP AND MOBILE/TABLET SCREEN
      if (((curWidth >= 1000 && top < 66)
        || (curWidth < 1000 && top < 46))
        && !isSticky) {
        setSticky(true);
      }
      else if (((curWidth >= 1000 && top >= 88)
        || (curWidth < 1000 && top >= 56))
      ) {
        setSticky(false);
      }
    }
  }

  return (
    <>
      <div className="rightfx-academy">
        <TopStaticCarousel
          image='/Insights/accu-academy-banner.png'
          title={<label dangerouslySetInnerHTML={{ __html: t('title') }}></label>}
          description={t('description')}
          position='center'
          align='left'
          noButton={true}
        />
        <div ref={refParent}>
          <div className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`}>
            <div className="academy-links" ref={ref}>
              <Container>
                <div className="links-items">
                  <a href="#markets" className="links">{t('Markets')}</a>
                  <a href="#cfd" className="links">{t('CFD Trading')}</a>
                  <a href="#forex" className="links">{t('Forex')}</a>
                  <a href="#analysis" className="links">{t('Analysis')}</a>
                  <a href="#risk" className="links">{t('Risk')}</a>
                  <a href="#psychology" className="links">{t('Pyschology')}</a>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div className="academy-intro">
          <Container>
            <Row className="justify-content-center text-center">
              <Col xs="10">
                <div className="title">
                  <h1>{t('Welcome to the online trading academy')}</h1>
                  <p dangerouslySetInnerHTML={{ __html: t('The Academy is a free resource') }}></p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {t('pageContent', {}, { returnObjects: true }).map((content, i) =>
          <div className="academy-data"
            key={i}
            // style={{ "backgroundImage": content.primary.section_image && content.primary.section_image.url ? "url(" + content.primary.section_image.url + ")" : "" }}
            id={content.primary.id}>
            <Container>
              <h3 className={"text-white"}>{content.primary.section_title[0].text}</h3>
              <AccordionLang items={content.items} isCollapseAll={true} />
            </Container>
          </div>
        )}
      </div>
    </>
  )
}
