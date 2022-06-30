import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Form, Button, InputGroup, Spinner, Toast } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { 
    isEmailAvailable,
    getCountries,
    locateMe,
    generatePin,
    verifyPin,
    RemoteLogin,
    RegisterLive,
} from '../../helpers/ApiCalls';
import { 
    languages, 
    phoneRegExp, 
    passwordRegExp, 
    validEmail,
    getSortedCountries,
    getCountryCodeShort,
    renderCountryLabel,
} from '../../helpers/Constants';

const ValueListner = (props) => {
    const { onValueChange = () => {} } = props;
    const { onClickCall = () => {} } = props;
    const { values, errors } = useFormikContext();
  
    useEffect(() => {
      onValueChange(values, errors);
      onClickCall(values, errors);
    }, [values, errors]);
  
    return null;
  };

export default function LiveRegisterationForm() {
    const { t } = useTranslation('markets');
    const router = useRouter();
    const language = languages.filter(x => x.code === router.locale)[0].isoCode;
    
    const formRef = useRef({})
    const pinRef = useRef(null)

    const [partnerId, setPartnerId] = useState(false);
    const [ibId, setIbId] = useState(false);
    const [referral, setReferral] = useState(false);
    const [utmCampaign, setUtmCampaign] = useState(false);
        
    const [loading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [countries, setCountries] = useState([]);
    const [pinBtnDiabled, setPinBtnDisabled] = useState(true);
    const [pinTxtDiabled, setPinTxtDisabled] = useState(true);
    const [pinStatus, setPinStatus] = useState('start');

    const [passwordView, setPasswordView] = useState(false);
    const [confirmPasswordView, setConfirmPasswordView] = useState(false);
    const [pin, setPin] = useState('');

    const redirectToIndex=()=>{
        window.location.href="/"
        setTimeout(()=>{
            let header= document.getElementsByTagName('header');
            let footer= document.getElementsByTagName('footer');
            header[0].style.display="unset";
            footer[0].style.display="unset";
        },2000)
    }
    
    const verifyEmail = useMemo(async () => {
        try {
            if (validEmail(email)) {
              const resp = await isEmailAvailable({
                email: email.toLowerCase()
              });
              return resp.result.availability;
            }
            return false;
          } catch (error) {
            console.error(error);
            return false;
          }
    }, [email]);

    const fetchCountries = async () => {
        const cntrs = await getCountries();
        if(cntrs.result)  setCountries(getSortedCountries(cntrs.result, language))
    }

    const setLocation = async () => {
        const locate = await locateMe();
        if(locate.country) {
            const cc = countries.find(c => c.code === locate.country)
            if(cc) {
                formRef.current.setFieldValue('country', cc.countryEn);
                formRef.current.setFieldValue('phone', cc.calling_code);
            }
        }
    }
    
    const resetPinField = () => {
        const {setFieldValue} = formRef.current;
        setFieldValue('emailPin', '');
        setPinStatus('start')
        setPinBtnDisabled(true);
        setPinTxtDisabled(true);
    }

    const onValueChange = (values, errors) => {
        const {setFieldValue} = formRef.current;
        if(errors && !errors.phone && !errors.email && values && values.phone && values.email){
            if(pinStatus === 'start') {
                setFieldValue('emailPin', '')
                setPinStatus('armed')
                setPinBtnDisabled(false);
                setPinTxtDisabled(true);
                return 'armed';
            }
        }else {
            if(pinStatus === 'armed') {
                setFieldValue('emailPin', '')
                setPinStatus('start')
                setPinBtnDisabled(true);
                setPinTxtDisabled(true);
                return 'start';
            }
            return pinStatus
        }
    }

    const sendPin = async () => {
        setIsLoading(true);
        const resp = await generatePin({phone, email, language})
        if(resp.isSuccess) {
            setPinStatus('sent')
            setPinBtnDisabled(true);
            setPinTxtDisabled(false);
            pinRef.current.focus()
        }
        setIsLoading(false);
    }

    const verifyEmailPin = async (value, email) => {
        setIsLoading(true);
        const resp = await verifyPin({value, email})
        if(resp.isSuccess) {
            setPinStatus('verified')
            setPinBtnDisabled(true);
            setPinTxtDisabled(true);
        } else {
            setPinStatus('invalid');
            setPinBtnDisabled(true);
            setPinTxtDisabled(false);
        }
        setIsLoading(false);
    }

    const pinBtnText = (pin) => {
        switch (pin) {
            case 'invalid':
                return 'Invalid PIN';
            case 'verified':
                return 'PIN Verified';
            case 'sent':
                return 'Verify PIN';
            case 'armed':
            case 'start':        
            default:
                return 'Send PIN';
        }
    }

    const pinBtnIcon = (pin) => {
        switch (pin) {
            case 'invalid':
                return 'bi-x';
            case 'verified':
                return 'bi-check';
            case 'sent':
                return 'bi-chevron-right';
            case 'armed':
            case 'start':        
            default:
                return 'bi-cursor-fill';
        }
    }

    useEffect(() => {
        formRef.current.validateField('email')
    }, [verifyEmail])

    useEffect(() => {
        switch (pinStatus || pinStatusMemo) {
            case 'verified':
                setPinBtnDisabled(true);
                setPinTxtDisabled(true);
                break;
            case 'sent':
                setPinBtnDisabled(true);
                setPinTxtDisabled(false);
                break;
            case 'armed':
                setPinBtnDisabled(false);
                setPinTxtDisabled(true);
                break;
            case 'start':        
            default:
                setPinBtnDisabled(true);
                setPinTxtDisabled(true);
                break;
        }
    }, [pinStatus])

    useEffect(() => {
        fetchCountries();
        setLocation();

        // Set Referals and IB
        const params = new URLSearchParams(window.location.search);
        const partnerId = params.get('ibRef');
        const ibId = params.get('ibId');
        const referral = params.get('ref');
        const utm = params.get('utm-campaign');
        if (partnerId) {
        setPartnerId(partnerId);
        localStorage.setItem('partnerId', partnerId)
        }
        if(ibId){
        setIbId(ibId);
        localStorage.setItem('ibId', ibId)
        }
        if (referral) {
        setReferral(referral);
        localStorage.setItem('referral', referral)
        }
        if (utm) {
        setUtmCampaign(utm)
        localStorage.setItem('utm', utm)
        }
    }, [])

    const validationSchema = Yup.object({
        type: Yup.string('Select a type').required(
            t('Application Type is required')
          ),
          firstName: Yup.string().when('type', {
            is: 'individual',
            then: Yup.string('Enter first name').required( t('First name is required')),
            otherwise: Yup.string('Enter Organization Name').required( t('Organization Name is required'))
          }),
          lastName: Yup.string().when('type', {
            is: 'individual',
            then: Yup.string('Enter last name').required( t('Last name is required'))
          }),
        countryResidency: Yup.string('Select your country of residence')
        .typeError(t('Country of residence is required'))
        .required(t('Country of residence is required')),
        city: Yup.string('Enter City'),
        phone: Yup.string('Enter your Phone')
          .required(t('Phone is required'))
          .matches(phoneRegExp, t('Phone number is not valid')),
        email: Yup.string('Enter your email')
          .test(
            'email-availability',
            t('Account already exists with this email, Kindly login'),
            async (value) => {
              return verifyEmail;
            }
          )
          .email(t('Enter a valid email'))
          .required(t('Email is required')),
        portalPassword: Yup.string('')
          .min(8, t('Password must contain atleast 8 characters'))
          .max(20, t('Password should not be more than 20 characters long'))
          .matches(
            passwordRegExp,
            t('Atleast one lower case, upper case and number required')
          )
          .required(t('Enter your password')),
        portalPasswordConfirm: Yup.string('')
        .oneOf([Yup.ref('portalPassword'), null], 'Passwords must match').required(t('Enter confirm password')),
        emailPin: Yup.string('')
          .required(t('PIN must be entered'))
          .length(6, t('Pin should be 6 characters exact'))
          .test('verify-pin', 'PIN must be verfied', async (value) => {
            return pinStatus === 'verified';
          }),
        tos: Yup.boolean().oneOf([true], t('Accept Terms & Conditions is required'))
      });

      const initialValues = {
        type: 'corporate',
        firstName: '',
        lastName: '',
        countryResidency: 'United Arab Emirates',
        phone: '+971',
        email: '',
        portalPassword: '',
        portalPasswordConfirm: '',
        emailPin: '',
        declarations: [
          'By clicking here I give my consent for RightFX to contact me for marketing purposes. You can opt out at any time. For further details please see ourMarketing and Communication Policy Statement.'
        ],
        tos: false,
        language: language === 'en-us' ? 'en-gb' : language
      };

    const SubmitRegisterLive = async (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
        setIsLoading(true)
        try {
            let data = {...values};
            delete data.portalPasswordConfirm;

            let storedPartner = localStorage.getItem('partnerId');
            let storedIbId = localStorage.getItem('ibId');
            
            if (partnerId) data.ibRef = partnerId;
            else if(storedPartner) data.ibRef = storedPartner

            if(ibId) data.ibId = ibId;
            else if(storedIbId) data.ibId = storedIbId;

            let storedRef = localStorage.getItem('referral')
            if(referral) data.referral = referral
                else if(storedRef)  data.referral = storedRef
                else data.referral = null
            let storedUtm = localStorage.getItem('utm')
            if(utmCampaign) data.utmCampaign = utmCampaign
                else if(storedUtm)  data.utmCampaign = storedUtm
                else data.utmCampaign = null
            
            data.language = language
            data.countryCode = getCountryCodeShort(data.countryResidency, countries)

            const resp = await RegisterLive(data);
            if(resp.result) {
                RemoteLogin(resp.result)
                resetForm({})
                setStatus({success: true})
            } else {
                setStatus({success: false})
                setSubmitting(false)
                setMessage(t(resp.message))
                setShowMessage(true)
            }
        } catch (error) {
            setStatus({success: false})
            setSubmitting(false)
            setErrors({submit: error.message || 'Unable to submit'})
            setMessage(error.message || 'Unable to submit')
            setShowMessage(true)
            setIsLoading(false)
        }
        setIsLoading(false)
    }
  

    return (
        <>
            <Formik
                innerRef={formRef}
                validationSchema={validationSchema}
                initialValues={initialValues}
                validateOnMount
                onSubmit={SubmitRegisterLive}
            >
                {({
                    values,
                    errors,
                    touched,
                    isValid,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    }) => {
                    return (
                        <Form noValidate onSubmit={handleSubmit}>
                            <div className="accuImg">
                            <a href="/" onClick={redirectToIndex}>
              <img src="/Layout/top-logo.svg" alt="RightFX logo" className="menu-logo " /></a>
<h4>{t('Register now easy')}</h4>
                            </div>
                            {/* <Row>
                                <Form.Group as={Col} className="position-relative mb-4">
                                    <Form.Select name="type" type="text" value={values.type} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.type && !!errors.type} required>
                                        <option value="individual">{t('Individual')}</option>
                                        <option value="corporate">{t('Corporate')}</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.type}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row> */}
                            <Row>
                                <Form.Group as={Col} xs="12" md={(values.type === 'individual') ? '6' : '12'} className="position-relative mb-4">
                                    {/* <Form.Label>{t((values.type === 'individual') ? 'First name' : 'Company name')}<sup>*</sup></Form.Label> */}
                                    <Form.Control name="firstName" placeholder={t((values.type === 'individual') ? 'First name' : 'Organization Name')} type="text" value={values.firstName} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.firstName && !!errors.firstName} required  />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {(values.type === 'individual') && <Form.Group as={Col}  xs="12" md={(values.type === 'individual') ? '6' : '12'} className="position-relative mb-4">
                                    {/* <Form.Label>{t('Last name')}<sup>*</sup></Form.Label> */}
                                    <Form.Control name="lastName" type="text" placeholder={t('Last name')} value={values.lastName} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.lastName && !!errors.lastName} required  />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>}
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="position-relative mb-4">
                                    {/* <Form.Label>{t((values.type === 'individual') ? 'Country of Residence' : 'Country of Incorporation')}<sup>*</sup></Form.Label> */}
                                    <Form.Select size="lg" name="countryResidency" value={values.countryResidency} onChange={
                                        (e) => {
                                            const country = countries.find(c => c.countryEn === e.target.value)
                                            if(country) setFieldValue('phone', `+${country.calling_code}`);
                                            handleChange(e);
                                        }
                                        } onBlur={handleBlur}  isInvalid={touched.countryResidency && !!errors.countryResidency} required>
                                        <option value="">{t('Select Country')}</option>
                                        {countries.map((cc, key) => 
                                        <option key={key} value={cc.countryEn}>{renderCountryLabel(cc, language)}</option>
                                        )}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.countryResidency}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} xs="12" md="6" className="position-relative mb-4">
                                    {/* <Form.Label>{t('Phone number')}<sup>*</sup></Form.Label> */}
                                    <Form.Control name="phone" placeholder={t('Phone number')} autocomplete="off" type="text" value={values.phone} onChange={
                                            (e) => {
                                                resetPinField();
                                                setPhone(e.target.value);
                                                handleChange(e);
                                            }
                                        } onBlur={handleBlur}  isInvalid={touched.phone && !!errors.phone} required />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="12" md="6" className="position-relative mb-4">
                                    {/* <Form.Label>{t('Email')}<sup>*</sup></Form.Label> */}
                                    <Form.Control name="email" placeholder={t('Email')} type="email" value={values.email} onChange={
                                            (e) => {
                                                resetPinField();
                                                setEmail(e.target.value);
                                                handleChange(e);
                                            }
                                        } onBlur={handleBlur}  isInvalid={touched.email && !!errors.email} required />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} xs="12" md="6" className="position-relative mb-4">
                                    {/* <Form.Label>{t('Password')}<sup>*</sup></Form.Label> */}
                                    <InputGroup hasValidation>
                                        <Form.Control name="portalPassword" placeholder={t('Password')} type={passwordView ? 'text' : 'password'} value={values.portalPassword} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.portalPassword && !!errors.portalPassword} required />
                                        <Button variant="outline-secondary" onClick={() => setPasswordView(!passwordView)}><i className={`bi ${passwordView ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i></Button>
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.portalPassword}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} xs="12" md="6" className="position-relative mb-4">
                                    {/* <Form.Label>{t('Confirm Password')}<sup>*</sup></Form.Label> */}
                                    <InputGroup hasValidation>
                                        <Form.Control name="portalPasswordConfirm" placeholder={t('Confirm Password')} type={confirmPasswordView ? 'text' : 'password'} value={values.portalPasswordConfirm} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.portalPasswordConfirm && !!errors.portalPasswordConfirm} required />
                                        <Button variant="outline-secondary" onClick={() =>  setConfirmPasswordView(!confirmPasswordView)}><i className={`bi ${confirmPasswordView ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i></Button>
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.portalPasswordConfirm}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">
                                <Col xs="12" className="mb-2 mt-0">
                                    <div className="badge rounded-pill bg-primary me-1">{t('8-20 characters')}</div>
                                    <div className="badge rounded-pill bg-primary me-1">{t('Latin Letters')}</div>
                                    <div className="badge rounded-pill bg-primary me-1">{t('Numbers')}</div>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs="12">
                                    <div className="d-flex align-items-center justify-content-start pin-area">
                                        <Button variant={pinStatus === 'armed' ? 'primary' : 'secondary'} disabled={pinBtnDiabled} onClick={sendPin}>
                                            {t(pinBtnText(pinStatus))} <i className={`bi ${pinBtnIcon(pinStatus)}`}></i>
                                        </Button>
                                        <Form.Control name="emailPin" ref={pinRef} type="text" className="mx-3" placeholder={t('Enter Pin')} value={values.emailPin} onChange={
                                            (e) => {
                                                if(e.target.value.length === 6) verifyEmailPin(e.target.value, values.email);
                                                handleChange(e);
                                            }
                                        } onBlur={handleBlur} isInvalid={touched.emailPin && !!errors.emailPin} required readOnly={pinTxtDiabled} />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.emailPin}
                                        </Form.Control.Feedback>
                                    </div>
                                    {
                                        (pinStatus === 'sent') && <Form.Text className="text-muted">{t('PIN sent to your email and phone please verify')}</Form.Text>
                                    }
                                </Col>
                            </Row>
                            <Row>
                            <Col xs="12" className="mb-4">
                                <Form.Group as={Col} mb="3" className="position-relative">
                                    <Form.Check type="checkbox" id="gridCheck" className="form-check">
                                        <Form.Check.Input name="tos" type="checkbox" value={true} checked={values.tos}  onChange={handleChange} onBlur={handleBlur} isInvalid={touched.tos && !!errors.tos} required/>
                                        <Form.Check.Label htmlFor="gridCheck">
                                            {/* {t('By clicking here I give my consent for RightFX')}{' '} */}
                                            <span>{t('By registering you agree to our')} </span>
                                            {/* <a href="#">{t('Marketing and Communication Policy Statement')}</a> */}
                                            <a href="/legal-documents" target="_blank"> {t('privacy policy')}</a>
                                        </Form.Check.Label>
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.tos}
                                        </Form.Control.Feedback>
                                    </Form.Check>
                                </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                                <Col xs="12" className="mb-3 subMobRes">
                                    <Button variant="primary" type="submit" disabled={loading || !isValid }>{loading && <Spinner animation="border" /> } {t('Register')}</Button>
                                </Col>
                            </Row>
                            <ValueListner onValueChange={onValueChange} />
                        </Form>
                    )}
                }    
            </Formik>
            <Toast bg="danger" onClose={() => setShowMessage(false)} show={showMessage} delay={6000} autohide>
                <Toast.Header><strong className="me-auto">Error</strong></Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </>
    )
}