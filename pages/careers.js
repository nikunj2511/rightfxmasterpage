import { Container, Row, Col } from 'react-bootstrap';
import TopStaticCarousel from '../components/common/TopStaticCarousel.Component';
import Accordion from '../components/common/Accordion.Component';
import Blockquote from '../components/common/Blockquote.Component';
import useTranslation from 'next-translate/useTranslation';

const introductionAccordionData = [
  {
    header: 'Arabic Speaking Female Receptionist / Secretary - UAE',
    body:
      <>
        <p>Full-time | United Arab Emirates</p>
        <br />
        <p><strong>Please read Job description carefully, Only shortlisted candidates will be contacted</strong></p>
        <p style={{ textDecorationLine: 'underline' }}>The ideal candidate should have the Skills & Qualifications below:</p>
        <p>We are looking for young, enthusiastic and talented candidates with Receptionist / Secretary experience.</p>
        <p>• Candidates must be locally available in UAE ready to start as soon as possible.</p>
        <p>• Proven experience as a Receptionist & Secretary or related role.</p>
        <p>• Microsoft office knowledge is a must ( Word – Excel – PowerPoint, etc )</p>
        <p>• The ideal candidate needs to have excellent communication and interpersonal skills (no compromise on this).</p>
        <p>• Should be interactive and high on energy.</p>
        <br />
        <p style={{ textDecorationLine: 'underline' }}>The main job responsibilities include the following:</p>
        <p>Responsible for handling office reception and administration duties, including greeting guests and offering them a beverage,Responsible for handling office reception and administration duties, including greeting guests and offering them a beverage,</p>
        <p>• Answer phones and email inquiries.</p>
        <p>• Route calls to specific people.</p>
        <p>• Answer inquiries about the company.</p>
        <p>• Greet visitors warmly and make sure they are comfortable.</p>
        <p>• Call persons waiting for visitors and book them a room to meet in.</p>
        <p>• Schedule meetings and conference rooms.</p>
        <p>• Ensure the reception area is tidy.</p>
        <p>• Coordinate mail flow in and out of the office.</p>
        <p>• Coordinate office activities.</p>
        <p>• Handle phone calls from people calling in sick.</p>
        <p>• Gather personal and insurance information</p>
        <p>• Arrange appointments.</p>
        <p>• Collect and distribute parcels and other mail.</p>
        <p>• Perform basic bookkeeping, filing, and clerical duties.</p>
        <p>• Take and relay messages.</p>
        <p>• Update appointment calendars.</p>
        <p>• Schedule follow-up appointments.</p>
        <p>• Office management – responsible for pantry and office supplies.</p>
        <br />
        <p><strong>Requirements</strong></p>
        <p>- University Degree or relevant working experience</p>
        <p>- Excellent command of the English language</p>
        <p>- Computer literacy to a high level</p>
        <p>- Flexible, analytical skills, excellent communication skills, high attention to detail</p>
        <p>- Any knowledge of Finance and Economics is advantageous</p>
        <p>- Ability to work in shifts 24/7 on a rotation basis</p>
        <br />
        <p><strong>Benefits</strong></p>
        <p>• Customer service: The ability to communicate clearly, positively and effectively both orally and in writing.</p>
        <p>• 1-2 Year experience in Reception /admin /secretary is a must for eligibility. The candidate needs to have a similar experience.</p>
        <p>• To display a positive and enthusiastic work ethic and style.</p>
        <p>• To display a positive and enthusiastic work ethic and style.</p>
      </>
  },
  {
    header: 'Customer Support & Retention Specialist - UAE',
    body:
      <>
        <p>Full-time | United Arab Emirates</p>
        <br />
        <p>RightFX, the leading FX and CFD broker is looking for a Customer Support & Retention Specialist to join our brokerage firm.

          The ideal candidate will be part of a growing Customer Support team, customer-oriented with a drive to achieve goals, design and implement customer retention strategies to increase loyalty and retain business. Analyze customer feedback, negotiate with customers, implement retention strategies. This individual will have excellent communication abilities and negotiation skills.</p>
        <p><strong>Purpose:</strong></p>
        <p>• Espouse the Client Services & Retention model to optimize the client experience for RightFX diverse client base with the explicit goals of:</p>
        <p>• Assist clients through different channels and liaise with appropriate departments to resolve issues. </p>
        <p>• Achieving a “step change” in client satisfaction.</p>
        <p>• Maximizing client retention.</p>
        <p>• Contribute to driving change across the organization to create a service-oriented culture.</p>
        <p>• Champion cross-team collaboration to achieve a cultural shift be a catalyst for change.</p>
        <p>• Collaborate with all departments to help define & implement a framework/model to capture, review, action and report on key customer insights that may contribute to Business revenue.</p>
        <p>• Ability to multi-task, prioritize, and manage time effectively in a fast-paced environment.</p>
        <p>• Report on relevant trends & insights as they relate to client queries, complaints, and potential opportunities for RightFX.</p>
        <p>• Adhere to established policies, guidelines, procedures, and training plans to meet the obligations set out in RightFX compulsory literature.</p>
        <p>• Contribute to driving change across the organization to create a service-oriented culture.</p>
        <p>• Contribute to driving change across the organization to create a service-oriented culture.</p>
        <br />
        <p><strong>Responsibilities:</strong></p>
        <p>• Provide frontline support for all (relevant) client interactions covering telephone, e-mail, and online media: aim to exceed clients’ expectations in every instance.</p>
        <p>• Be the “first line of defense” (with other stakeholders) to identify, escalate and manage potential risk.</p>
        <p>• Provide fallback support for the Sales team (as appropriate).</p>
        <p>• Achieve retention monthly targets.</p>
        <p>• Provide training to clients on the use of the Company’s products.</p>
        <p>• Ensuring customer satisfaction.</p>
        <p>• developing aggressive retention strategies based on customer feedback.</p>
        <br />
        <p><strong>Qualifications:</strong></p>
        <p>• 2+ years of experience in customer retention or relationship management, including program development and execution.</p>
        <p>• Bachelor’s degree in business administration.</p>
        <p>• Fluent English both in written and oral communications skills.</p>
        <p>• Proven ability to multi-task, deliver exceptional results and motivate/manage others in a fast-paced, dynamic environment.</p>
        <p>• Strong decision-making and problem-solving skills.</p>
        <p>• Excellent sales skills.</p>
        <p>• Proficiency with Microsoft Office Suite, including Word, Excel, PowerPoint and Outlook.</p>
        <br />
        <p style={{ textDecorationLine: 'underline' }}><strong>CANDIDATE PROFILE:</strong></p>
        <p><strong>Nationality :</strong> Any</p>
        <p><strong>Gender :</strong> Female preferable</p>
        <p><strong>Availability :</strong> Can join immediately and willing to work in a permanent role</p>
        <p><strong>Education :</strong> Bachelor’s degree in business administration </p>
        <p><strong>Experience :</strong> Knowledge of forex is a must</p>
        <p><strong>Language :</strong> Fluent in English, Arabic desirable.</p>
      </>
  },
  {
    header: 'Senior FX sales professional - UAE',
    body:
      <>
        <p>Full-time | United Arab Emirates</p>
        <br />
        <p>RightFX, the leading FX and CFD broker is looking for a Senior FX sales professional to join our brokerage firm. The ideal candidate will be part of a growing sales team, customer-oriented with a drive to achieve goals and maintain a great sales pipeline and business development efforts. This individual will have excellent communication abilities and negotiation skills.</p>
        <p><strong>Requirements and Responsibilities:</strong></p>
        <p>• Experience in FX sales position within a brokerage or private banking in the UAE.</p>
        <p>• Transferable portfolio of HNW clients.</p>
        <p>• Deep understanding and experience with financial products such as FX, Commodities, shares, indices.</p>
        <p>• Sales driven, outgoing and ambitious professional.</p>
        <p>• Proven sales track record and strong negotiation skills.</p>
        <p>• Highly customer-focused and problem-solving skills.</p>
        <p>• Work with key accounts to develop new business, and to ensure satisfaction.</p>
        <p>• Coordinating with Sales Team and working accordingly towards marketing which results in incoming inquiries.</p>
        <p>• Ensure the company is well marketed via effective communication, sending newsletters, email marketing, Contenting in spreading information of presence in the market.</p>
        <p>• Well-versed in using Company CRM and preparing reports.</p>
        <p>• English language skills required, Japanese and Arabic desirable.</p>
        <br />
        <p><strong>Qualifications:</strong></p>
        <p>• Bachelors degree or equivalent experience.</p>
        <p>• 2+ years of proven success in FX sales.</p>
        <p>• Strong negotiation, presentation and communication skills</p>
        <p>• The ability to work effectively and in an organized manner both independently or co-cooperatively as part of a team.</p>
        <br />
        <p style={{ textDecorationLine: 'underline' }}><strong>CANDIDATE PROFILE:</strong></p>
        <p><strong>Nationality :</strong> Any</p>
        <p><strong>Gender :</strong> Female / Male</p>
        <p><strong>Availability :</strong> Can join immediately and willing to work in a permanent role</p>
        <p><strong>Education :</strong> High school / higher education / telemarketing / sales / knowledge of forex is a must </p>
      </>
  },
  {
    header: 'Arabic Speaking Digital/Social Media Account Manager - UAE',
    body:
      <>
        <p>Full-time | United Arab Emirates</p>
        <br />
        <p><strong>Key Responsibilities Include:</strong></p>
        <p>• Developing & implementing a social media strategy through competitive research, platform determination, benchmarking messaging and audience identification.</p>
        <p>• Execute, drive and strategize a weekly social media schedule for the various accounts handled.</p>
        <p>• Execute daily tasks on social media, blogs and websites across the identified platforms; including publishing content, performing enhancements and modifications, coordinating prompt responses to questions and comments over social media platforms.</p>
        <p>• Cover live activations on social media.</p>
        <p>• Continuously improve by capturing and analyzing the appropriate social data/ metrics, insights and best practices.</p>
        <p>• Entering websites and blogs data from source documents.</p>
        <p>• Planning digital marketing campaigns, including web, SEO/SEM, email, social media and display advertising.</p>
        <p>• Execution of Email Campaigns: Deployment, delivery management and reporting for all outbound email communications.</p>
        <p>• Coding and Design: A penchant for email design and thorough knowledge of responsive HTML coding; ensuring each communication is on-brand and meets all requirements of a great email.</p>
        <br />
        <p><strong>A bit about us:</strong></p>
        <p>RightFX is a young force in the Forex and CFD markets, committed to delivering a powerful, accessible and fair trading Experience. Led by a team of professionals with years of experience in the field, we have always put innovation, speed and agility at the core of our business. As we grow our reach and cement ourselves as an online broker on the rise, we look forward to further providing our clients with the right tools and services to assist their trading needs, leading the charge towards the future of trading.</p>
      </>
  },
  {
    header: 'Senior FX sales professional - Jordan',
    body:
      <>
        <p>Full-time | Jordan</p>
        <br />
        <p>RightFX, the leading FX and CFD broker is looking for a Senior FX sales professional to join our brokerage firm. The ideal candidate will be part of a growing sales team, customer-oriented with a drive to achieve goals and maintain a great sales pipeline and business development efforts. This individual will have excellent communication abilities and negotiation skills.</p>
        <p><strong>Requirements and Responsibilities:</strong></p>
        <p>• Experience in FX sales position within a brokerage or private banking in the Jordan.</p>
        <p>• Transferable portfolio of HNW clients.</p>
        <p>• Deep understanding and experience with financial products such as FX, Commodities, shares, indices.</p>
        <p>• Sales driven, outgoing and ambitious professional.</p>
        <p>• Proven sales track record and strong negotiation skills.</p>
        <p>• Highly customer-focused and problem-solving skills.</p>
        <p>• Work with key accounts to develop new business, and to ensure satisfaction.</p>
        <p>• Coordinating with Sales Team and working accordingly towards marketing which results in incoming inquiries.</p>
        <p>• Ensure the company is well marketed via effective communication, sending newsletters, email marketing, Contenting in spreading information of presence in the market.</p>
        <p>• Well-versed in using Company CRM and preparing reports.</p>
        <p>• English language skills required, Japanese and Arabic desirable.</p>
        <br />
        <p><strong>Qualifications:</strong></p>
        <p>• Bachelors degree or equivalent experience.</p>
        <p>• 2+ years of proven success in FX sales.</p>
        <p>• Strong negotiation, presentation and communication skills</p>
        <p>• The ability to work effectively and in an organized manner both independently or co-cooperatively as part of a team.</p>
        <br />
        <p style={{ textDecorationLine: 'underline' }}><strong>CANDIDATE PROFILE:</strong></p>
        <p><strong>Nationality :</strong> Any</p>
        <p><strong>Gender :</strong> Female / Male</p>
        <p><strong>Availability :</strong> Can join immediately and willing to work in a permanent role</p>
        <p><strong>Education :</strong> High school / higher education / telemarketing / sales / knowledge of forex is a must </p>
      </>
  },
  {
    header: 'Japanese speaking FX sales - Dubai',
    body:
      <>
        <p>Full-time | United Arab Emirates</p>
        <br />
        <p>RightFX, the leading FX and CFD broker is looking for a Japanese speaking FX sales to join our brokerage firm. The ideal candidate will be part of a growing sales team, customer-oriented with a drive to achieve goals and maintain a great sales pipeline and business development efforts. This individual will have excellent communication abilities and negotiation skills.</p>
        <p><strong>Requirements and Responsibilities:</strong></p>
        <p>• Experience in FX sales position within a brokerage or private banking in the UAE.</p>
        <p>• Transferable portfolio of HNW clients.</p>
        <p>• Deep understanding and experience with financial products such as FX, Commodities, shares, indices.</p>
        <p>• Sales driven, outgoing and ambitious professional.</p>
        <p>• Proven sales track record and strong negotiation skills.</p>
        <p>• Highly customer-focused and problem-solving skills.</p>
        <p>• Work with key accounts to develop new business, and to ensure satisfaction.</p>
        <p>• Coordinating with Sales Team and working accordingly towards marketing which results in incoming inquiries.</p>
        <p>• Ensure the company is well marketed via effective communication, sending newsletters, email marketing, Contenting in spreading information of presence in the market.</p>
        <p>• Well-versed in using Company CRM and preparing reports.</p>
        <p>• English language skills required, Japanese and Arabic desirable.</p>
        <br />
        <p><strong>Qualifications:</strong></p>
        <p>• Bachelors degree or equivalent experience.</p>
        <p>• 2+ years of proven success in FX sales.</p>
        <p>• Strong negotiation, presentation and communication skills</p>
        <p>• The ability to work effectively and in an organized manner both independently or co-cooperatively as part of a team.</p>
        <br />
        <p style={{ textDecorationLine: 'underline' }}><strong>CANDIDATE PROFILE:</strong></p>
        <p><strong>Nationality :</strong> Any</p>
        <p><strong>Gender :</strong> Female / Male</p>
        <p><strong>Availability :</strong> Can join immediately and willing to work in a permanent role</p>
        <p><strong>Education :</strong> High school / higher education / telemarketing / sales / knowledge of forex is a must </p>
      </>
  },
];

export default function Careers() {
  const { t } = useTranslation('career');

  return (
    <>
      <div className="careers">
        <TopStaticCarousel
          image='/Company/career-banner.jpg'
          title={t('common:Careers')}
          description={t('RightFX nurtures the symbolic culture of familyism')}
          position='center'
          align='left'
          noButton={true}
        />
        <Container>
          <Row>
            <Col xs="12">
              <Blockquote
                title={t('Work With Us')}
                description={t('When recruiting, our team searches for those same values of trust')}
                className="mb-5"
              />
              <div className="font-raleway mb-5 pb-1">
                <h5 className="fw-600 mb-3">{t('What We Offer')}</h5>
                <p>{t('We offer a stimulating atmosphere that encourages')}</p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* style={{ 'backgroundImage': 'url(/Company/leagl-docs-bg.png)' }} this for legal-doc-desclaimer*/}
        <div className="legal-doc-desclaimer" style={{ backgroundColor: "#161616;" }}>
          <Container>
            <Row className="justify-content-center">
              <Col xs="10">
                <div className="title">
                  <p>{t('We understand that our staff is our most important asset')}</p>
                  <p dangerouslySetInnerHTML={{ __html: t('If you think you are the right candidate') }}></p>
                  <p>{t('Good luck')}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col xs="12">
              <Blockquote
                title={t('Open Vacancies')}
                description={t('Is you are interested in joining the RightFX team')}
                className="mb-5"
              />
              <div className="academy-data mb-5 pb-1 pt-0">
                <Accordion items={introductionAccordionData} icon='/Company/file-icon.svg' isUpload={true} isCollapseAll={true} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
