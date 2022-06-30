import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';


import { Formik } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Form, Button, Spinner, Toast, Container } from 'react-bootstrap';
import { COUNTRIES } from '../../helpers/Countries';
import { phoneRegExp } from '../../helpers/Constants';
import { SendEmail } from '../../helpers/ApiCalls';


export default function ContactForm() {
    // const { t } = useTranslation('company-profile');
    const { t } = useTranslation('contact-us');

    const [loading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const validationSchema = Yup.object({
        full_name: Yup.string().required(t('Full name is required')),
        email: Yup.string().email(t('Email is not valid')).required(t('Email is required')),
        phone_number: Yup.string().matches(phoneRegExp, t('Phone number is not valid')).required(t('Phone number is required')),
        country: Yup.string().required(t('Country is required')),
        message: Yup.string().required(t('Message should not be left blank')),
    });

    const ContactSubmit = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        setIsLoading(true)
        setMessage(null)
        setMessage(false)
        try {
            await SendEmail("contact-us", values)
            resetForm({})
            setStatus({ success: true })
            setMessage(t('Submit Success'))
            setShowMessage(true)
        } catch (error) {
            setStatus({ success: false })
            setSubmitting(false)
            setErrors({ submit: error.message || 'Unable to submit' })
            setShowMessage(true)
            setMessage(t('Submit Failed'))
        }
        setIsLoading(false)
    }
    return (
        <>
            <div className="contact-area">
                <Container>
                    <div className="form-area">
                        <Row className="justify-content-end">
                            <div className="col-lg-6 p-0 contact-graphic">
                                <img src="/Company/CONTACT-US.png" alt="RightFX Company Profile" className="imig-fluid" />
                            </div>
                            <Col lg="5" className="p-0">
                                <div className="contact-form">
                                    <h2>{t('common:Contact Us')}</h2>
                                    <>
                                        <Formik
                                            validationSchema={validationSchema}
                                            initialValues={{
                                                full_name: '',
                                                email: '',
                                                country: '',
                                                phone_number: '',
                                                message: ''
                                            }}
                                            onSubmit={ContactSubmit}
                                        >
                                            {({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit
                                            }) => {
                                                return (
                                                    <Form noValidate onSubmit={handleSubmit}>
                                                        <Row>
                                                            <Form.Group as={Col} md="6" className="position-relative mb-6">
                                                                <Form.Control size="lg" name="full_name" type="text" value={values.full_name} onChange={handleChange} onBlur={handleBlur} placeholder={t('Your Name')} isInvalid={touched.full_name && !!errors.full_name} required />
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.full_name}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="6" className="position-relative mb-6">
                                                                <Form.Control size="lg" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder={t('Your E-mail Address')} isInvalid={touched.email && !!errors.email} required />
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.email}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Row>
                                                        <Row>
                                                            <Form.Group as={Col} xs="12" md="12" className="position-relative mb-3">
                                                                <Form.Select size="lg" className="companyPro-form-dropdownCss" name="country" value={values.country} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.country && !!errors.country} required>
                                                                    <option value="">{t('Select Country')}</option>
                                                                    {COUNTRIES.map((cc, key) =>
                                                                        <option className='cntry-opt' key={key} value={cc.countryEn}>{cc.countryEn}</option>
                                                                    )}
                                                                </Form.Select>
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.country}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} xs="12" md="12" className="position-relative mb-3">
                                                                <Form.Control size="lg" name="phone_number" type="text" value={values.phone_number} onChange={handleChange} onBlur={handleBlur} placeholder={t('Phone Number')} isInvalid={touched.phone_number && !!errors.phone_number} required />
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.phone_number}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Row>
                                                        <Row>
                                                            <Form.Group as={Col} className="position-relative mb-3">
                                                                <Form.Control
                                                                    as="textarea"
                                                                    name="message"
                                                                    size="lg"
                                                                    value={values.message} onChange={handleChange} onBlur={handleBlur}
                                                                    placeholder={t('Your message')}
                                                                    rows="8"
                                                                    isInvalid={touched.message && !!errors.message}
                                                                    required
                                                                />
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.message}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Row>
                                                        <Row>
                                                            <Col className="my-3 text-center">
                                                                <Button variant="primary" type="submit" disabled={loading} >{loading && <Spinner animation="border" />} {t('Send message')}</Button>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                )
                                            }
                                            }
                                        </Formik>
                                        <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={6000} autohide>
                                            <Toast.Body>{message}</Toast.Body>
                                        </Toast>
                                    </>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}