import { useState } from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Form, Button, InputGroup, Spinner, Toast } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

import { LoginUser, RemoteLogin } from '../../helpers/ApiCalls';
import { forgotPasswordUrl } from '../../helpers/Constants';

export default function LoginForm() {
    const { t } = useTranslation('markets');

    const [loading, setIsLoading] = useState(false);
    const [loginPasswordView, setLoginPasswordView] = useState(false);

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const userLogin =  async (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
        setIsLoading(true)
        try {
            const resp = await LoginUser(values);
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
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(6, t('Must be at least 6 characters'))
            .required(t('Required')),
          email: Yup.string()
            .email('Invalid email address')
            .required(t('Required'))
        })}
        onSubmit={userLogin}>
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
                
                <Row className="mb-3">
                    <Form.Group as={Col} className="position-relative">
                        <Form.Label>{t('Email')}<sup>*</sup></Form.Label>
                        <Form.Control size="lg" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.email && !!errors.email} required />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="position-relative mb-3">
                        <Form.Label>{t('Password')}<sup>*</sup></Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control size="lg" name="password" type={loginPasswordView ? 'text' : 'password'} value={values.password} onChange={handleChange} onBlur={handleBlur} isInvalid={touched.password && !!errors.password} required />
                            <Button variant="outline-secondary" onClick={() => setLoginPasswordView(!loginPasswordView)}><i className={`bi ${loginPasswordView ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i></Button>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.password}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Col xs="12" className="mb-2">
                        <Button variant="primary" type="submit" disabled={loading} >{loading && <Spinner animation="border" /> } {t('Login')}</Button>
                    </Col>
                </Row>
                <Link href={forgotPasswordUrl} target="_blank" rel="noreferrer">{t('Forgot Password')}</Link>
                <Toast bg="danger" onClose={() => setShowMessage(false)} show={showMessage} delay={5000} autohide>
                    <Toast.Header><strong className="me-auto">Error</strong></Toast.Header>
                    <Toast.Body className="text-white">{message}</Toast.Body>
                </Toast>
            </Form>
          );
        }}
      </Formik>
    )
}