import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleChangeEmail = (e) => setEmail(e.target.value);

    const subscribeEmail = (e) => {
        e.preventDefault();
        if (email && email.length > 0) {
            //Submit handle here

            setEmail('');
        }
    }

    return (
        <footer>
            <div className="office-network">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="title">
                                <h2><small>Our</small>Office Network</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className="office-location">
                        <Row>
                            <Col lg="6" className="mb-3">
                                <div className="office-title">Cyprus office <img src="/Layout/cyprus-flag.png" alt="" className="img-fluid" /></div>
                                <div className="office-details">
                                    <Row>
                                        <Col sm="6" className="mb-2">
                                            <address>1 Ayias Zonis Street Nicolaou <br />
                                                Pentadromos Centre Block B, <br />
                                                Limassol 3026, Cyprus</address>
                                        </Col>
                                        <Col sm="6">
                                            Phone: <a href="tel:+357 25 262207">+357 25 262207</a> <br />
                                            General Inquiries: <a href="mailto:info@rightfx.eu">info@rightfx.eu</a>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg="6" className="mb-3">
                                <div className="office-title">Mauritius Office <img src="/Layout/mauritius-flag.png" alt="" className="img-fluid" /></div>
                                <div className="office-details">
                                    <Row>
                                        <Col sm="6" className="mb-2">
                                            <address>The Cyberati Lounge, Ground Floor, <br />
                                                The Catalyst, Silicon Avenue, <br />
                                                40 Cybercity, 72201 Ebène, <br />
                                                Republic of Mauritius</address>
                                        </Col>
                                        <Col sm="6">
                                            Phone: <a href="tel:+230 464 4888">+230 464 4888</a> <br />
                                            General Inquiries: <a href="mailto:info@rightfx.com">info@rightfx.com</a> <br />
                                            Client Support: <a href="mailto:info@rightfx.com">support@rightfx.com</a>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="general-info">
                <Container>
                    <Row>
                        <Col xs="12">
                            <p>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. <strong>71% of retail investor accounts lose money when trading CFDs with this provider</strong>. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="office-links">
                <Container>
                    <div className="quick-links">
                        <Row>
                            <Col lg="4">
                                <h4 className="title">We’ll keep you Updated!</h4>
                                <p>Enter your email address to subscribe our <br /> notification of our new post & features by email.</p>
                                <form className="subscribe-form" onSubmit={(e) => subscribeEmail(e)}>
                                    <div className="d-flex w-100 position-relative">
                                        <input id="newsletter1" type="email" className="form-control" placeholder="Email address" value={email} onChange={(e) => handleChangeEmail(e)} required />
                                        <button className="btn btn-primary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </Col>
                            <Col lg="2" md="6" sm="6">
                                <h4 className="title text-uppercase">Company</h4>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Home</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Who We Are</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Legal Doc</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Support</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Contact Us</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">FAQs</a></li>
                                </ul>
                            </Col>
                            <Col lg="2" md="6" sm="6">
                                <h4 className="title text-uppercase">Markets</h4>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a href="#" className="nav-link p-0">What are CFDs?</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Forex</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Bullion</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Indices</a></li>
                                </ul>
                            </Col>
                            <Col lg="2" md="6" sm="6">
                                <h4 className="title text-uppercase">Trading</h4>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Live Account</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Demo Account</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Deposit</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Account Types</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">MT5 Mobile</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">MT5 Desktop</a></li>
                                </ul>
                            </Col>
                            <Col lg="2" md="6" sm="6">
                                <h4 className="title text-uppercase">Insights</h4>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Market News</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Glossary</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Economic Calendar</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Education</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link p-0">Company News</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className="awards">
                        <Container>
                            <Row>
                                <div className="col-12">
                                    <h5 className="title text-uppercase">Award winning broker</h5>
                                    <p>We have been presented with a number of awards that recognise the quality of our service and dedication to our clients :</p>
                                </div>
                            </Row>
                            <div className="awards-item">
                                <Row>
                                    <Col xs="3"><img src="/Layout/award-1.png" alt="" className="img-fluid" /></Col>
                                    <Col xs="3"><img src="/Layout/award-2.png" alt="" className="img-fluid" /></Col>
                                    <Col xs="3"><img src="/Layout/award-3.png" alt="" className="img-fluid" /></Col>
                                    <Col xs="3"><img src="/Layout/award-4.png" alt="" className="img-fluid" /></Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </Container>
            </div>
            <div className="terms-policy">
                <Container>
                    <div className="payment-icons">
                        <div className="title">
                            <h5>Deposit and withdraw</h5>
                            <p>All payment methods accepted</p>
                        </div>
                        {/* <div className="trusted-brands">
                            <div className="brand">
                                <img src="/Home/mastercard.png" alt="RightFX" className="img-fluid" />
                            </div>
                            <div className="brand">
                                <img src="/Home/wire-transfer.png" alt="RightFX" className="img-fluid" />
                            </div>
                            <div className="brand">
                                <img src="/Home/visa.png" alt="RightFX" className="img-fluid" />
                                <div className="icons">
                                    <img src="/Home/PAYMENT-ICON.png" alt="RightFX" className="img-fluid" />
                                </div>
                            </div>
                            <div className="brand">
                                <img src="/Home/neteller.png" alt="RightFX" className="img-fluid" />
                            </div>
                            <div className="brand">
                                <img src="/Home/mastercard-1.png" alt="RightFX" className="img-fluid" />
                            </div>
                            <div className="brand">
                                <img src="/Home/bitpay.png" alt="RightFX" className="img-fluid" />
                            </div>
                            <div className="brand">
                                <img src="/Home/skrill.png" alt="RightFX" className="img-fluid" />
                            </div>
                            <div className="brand">
                                <img src="/Home/cashu.png" alt="RightFX" className="img-fluid" />
                            </div>
                        </div> */}
                        <div className="icons">
                            <img src="/Home/PAYMENT-ICON.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <p>RIGHTFX LTD is authorised and regulated by the Cyprus Securities and Exchange Commission (CySEC) in Cyprus (License Number <a className='text-decoration-none' target="_blank" rel="noreferrer" href="https://www.cysec.gov.cy/en-GB/entities/investment-firms/cypriot/45838/"><strong>340/17</strong></a>).</p>
                    <p>RIGHTFX LTD is authorised and regulated by the Financial Service Commission (FSC) in Mauritius (License Number <a className='text-decoration-none' target="_blank" rel="noreferrer" href="https://www.fscmauritius.org/en/supervision/register-of-licensees/register-of-licensees-details?licence_no=GB19024778&key=&cat=GB&code="><strong>GB19024778</strong></a>).</p>
                    <p className="d-none d-sm-block">&nbsp;</p>
                    <h4>High Risk Investment Warning</h4>
                    <p>Trading in Foreign Exchange on margin carries a high level of risk and may not be suitable for all investors. The leverage can work against you as well as for you.</p>
                    <p>Before deciding to trade in Foreign Exchange, you should carefully consider your investment objectives, level of experience and risk appetite.</p>
                    <p>There exists a possibility that you could sustain a substantial loss of some or all of your initial inves tment, and therefore should not invest any money that you cannot afford to lose.</p>
                    <p>Make yourself aware of all the risks associated with Foreign Exchange trading and seek advice from an independent financial adviser should you have any doubts.</p>
                    <p className="d-none d-sm-block">&nbsp;</p>
                    <h4>Privacy Policy</h4>
                    <p>This site is owned and operated by RightFX.</p>
                    <p>Your privacy is of the utmost importance to RightFX. We aim to guarantee a satisfying and safe experience for all our clients.</p>
                    <p>We are obligated to comply with EU data protection legislation and, as such, have strict security procedures in place in respect of both the storage and the disclosure of any information shared with us. RightFX will never share any information about specific individuals with any external third party, unless required to do so by Law, or in compliance with our regulatory obligations.</p>
                    <p>For further information on disclosure of information, please refer to Section 26 of the Terms of Business.</p>
                    <p>Because we require our users to share certain types of information with us, we believe they are entitled to understand our policies, terms and conditions regarding the capture and use of that information. This privacy statement discloses the nature and use of such information.</p>
                    <p>RightFX Limited gathers and tracks:</p>
                    <p>1.     Information that users disclose through optional and voluntary submissions in order to receive our electronic newsletter.</p>
                    <p>2.     Information that users disclose to request a free Demo account or acquire full access to our online trading software. This information is required for regulatory purposes, in order to complete the client identification process and assess the suitability of potential users before allowing them to access our services.</p>
                </Container>
            </div>
            <div className="copyright">
                <Container>
                    <div className="border-top">
                        <Row className="align-items-center">
                            <Col lg="4"><p>Copyright &copy; 2021 RightFX. All rights reserved.</p></Col>
                            <Col lg="4" className="text-center">
                                <a target="_blank" rel="noreferrer" href="https://www.cysec.gov.cy/en-GB/entities/investment-firms/cypriot/45838/" className="mx-3"><img src="/Layout/footer-icon-1.png" alt="RightFX" /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.fscmauritius.org/en/supervision/register-of-licensees/register-of-licensees-details?licence_no=GB19024778&key=&cat=GB&code=" className="mx-3"><img src="/Layout/footer-icon-2.png" alt="RightFX" /></a>
                            </Col>
                            <Col lg="4">
                                <div className="social">
                                    <ul className="list-unstyled d-flex">
                                        <li className="ms-4"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/rightfxfx"><i className="bi bi-linkedin"></i></a></li>
                                        <li className="ms-4"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/RightFXfx/"><i className="bi bi-facebook"></i></a></li>
                                        <li className="ms-4"><a target="_blank" rel="noreferrer" href="https://twitter.com/RightFX"><i className="bi bi-twitter"></i></a></li>
                                        <li className="ms-4"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/rightfx/"><i className="bi bi-instagram"></i></a></li>
                                        <li className="ms-4"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC3lQJjwzFOFtCL5OE8J930Q"><i className="bi bi-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </footer>
    )
}