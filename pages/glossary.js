import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import useTranslation from 'next-translate/useTranslation';

export default function Glossary() {
  const { t } = useTranslation('glossary');
  const [searchText, setSearchText] = useState('');
  const [isSticky, setSticky] = useState(false);

  const ref = useRef();
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
      console.log(top);
      //FOR CHECK IN DESKTOP AND MOBILE/TABLET SCREEN
      if (((curWidth >= 1000 && top < -720)
        || (curWidth < 1000 && top < 46))
        && !isSticky) {
        setSticky(true);
      }
      else if (((curWidth >= 1000 && top >= -720)
        || (curWidth < 1000 && top >= 56))
      ) {
        setSticky(false);
      }
    }
  }

  return (
    <>
      <div className="hero-slider-static style3" style={{ "backgroundImage": "url(/Insights/glossary-banner.png)" }}>
        <div className="caption">
          <Container>
            <div className="row">
              <div className="col-12">
                <h1>{t('Glossary')} </h1>
                <div className="search">
                  <Form className="d-flex">
                    <FloatingLabel
                      label="Search here"
                      className="w-100"
                    >
                      <Form.Control value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder={t('Search here')} id="floatingInput" />
                      <img src="/Insights/search-icon.png" alt="RightFX Glossary" />
                    </FloatingLabel>
                  </Form>

                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="refParent-glossary" ref={refParent}></div>
        <div className={`sticky-wrapper-glossary ${isSticky ? 'is-sticky-glossary' : ''}`}>
          <div className="advanced-search" ref={ref}>
            <a href="#A">A</a>
            <a href="#B">B</a>
            <a href="#C">C</a>
            <a href="#D">D</a>
            <a href="#E">E</a>
            <a href="#F">F</a>
            <a href="#G">G</a>
            <a href="#H">H</a>
            <a href="#I">I</a>
            <a href="#J">J</a>
            <a href="#K">K</a>
            <a href="#L">L</a>
            <a href="#M">M</a>
            <a href="#N">N</a>
            <a href="#O">O</a>
            <a href="#P">P</a>
            <a href="#Q">Q</a>
            <a href="#R">R</a>
            <a href="#S">S</a>
            <a href="#T">T</a>
            <a href="#U">U</a>
            <a href="#V">V</a>
            <a href="#W">W</a>
            <a href="#X">X</a>
            <a href="#Y">Y</a>
            <a href="#Z">Z</a>
          </div>

        </div>
      </div>
      <Container className="mb-5">
        <Row>
          <Col>
            {t('pageContent', {}, { returnObjects: true }).map((content, i) =>
              <div id={content.letter} key={i} className="glossary-data"
                style={{ "backgroundImage": i % 2 === 0 ? "url(/Insights/line_pattern-1.png)" : "" }}
              >
                <div className="result">
                  <div className="index">{content.letter}</div>
                  <div className="data">
                    <dl className="row mb-0">
                      {content.items && content.items.map((item, j) =>
                        <>
                          <dt className="col-md-3" dangerouslySetInnerHTML={{ __html: item.term }}></dt>
                          <dd className="col-md-9">
                            {item.definations && item.definations.map((defination, defInd) =>
                              <p key={defInd} dangerouslySetInnerHTML={{ __html: defination }}></p>
                            )}
                          </dd>
                        </>
                      )}
                    </dl>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}
