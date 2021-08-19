import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { Row, Col, Button } from 'antd'
import { Form, Input } from 'formik-antd'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { MailOutlined, QrcodeOutlined, LockOutlined } from '@ant-design/icons';

const validateResetForm = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email address").required("Email address is required"),
    code: Yup.string().required("Please enter a valid code"),
    password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    cPassword: Yup.string()
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value
        })

})

const resetPassword = () => {
    const [emailSubmitted, isEmailSubmitted] = useState(false)
    const [codeSubmitted, isCodeSubmitted] = useState(false)

    const resetForm = (values) => {
        isEmailSubmitted(true)
    }

    const submitPassword = (values) => {
        console.log(values)

    }

    const submitCode = (values) => {
        isCodeSubmitted(true)
    }

    return (
        <>
            <Row>
                <div className={styles.resetPage}>

                    <Col xs={24} className={styles.fullForm}>
                        <div className={styles.loginForm}>

                            <div className={styles.logoDiv}>
                                <img className={styles.loginLogo} src="/favicon.ico" alt="logo" />
                            </div>
                            {!emailSubmitted && !codeSubmitted &&
                                <Formik initialValues={{ email: "", code: "", password: "", cPassword: "" }} onSubmit={resetForm} validationSchema={validateResetForm}>
                                    {({ errors, touched }) => (
                                        <Form
                                            className={styles.mainForm}>
                                            <Form.Item hasFeedback validateStatus={touched.email && errors.email ? "error" : ""}
                                                name="email">
                                                <Input prefix={<MailOutlined className="site-form-item-icon" />} name="email" placeholder="Email address..." />
                                            </Form.Item>

                                            <div className={styles.formBottomSection}>

                                                <Button htmlType="submit" className={styles.loginFormButton}>Submit</Button>
                                            </div>

                                        </Form>
                                    )}

                                </Formik>
                            }

                            {emailSubmitted && !codeSubmitted &&
                                <Formik initialValues={{ code: "", password: "", cPassword: "" }} onSubmit={submitCode} validationSchema={validateResetForm}>
                                    {({ errors, touched }) => (
                                        <Form
                                            className={styles.mainForm}>
                                            <Form.Item hasFeedback validateStatus={touched.email && errors.email ? "error" : ""}
                                                name="code">
                                                <Input prefix={<QrcodeOutlined className="site-form-item-icon" />} name="code" placeholder="Enter reset code here..." />
                                            </Form.Item>

                                            <div className={styles.formBottomSection}>

                                                <Button htmlType="submit" className={styles.loginFormButton}>Submit</Button>
                                            </div>

                                        </Form>
                                    )}

                                </Formik>
                            }

                            {emailSubmitted && codeSubmitted &&
                                <Formik initialValues={{ password: "", cPassword: "" }} onSubmit={submitPassword} validationSchema={validateResetForm}>
                                    {({ errors, touched }) => (
                                        <Form
                                            className={styles.mainForm}>
                                            <Form.Item hasFeedback validateStatus={touched.email && errors.email ? "error" : ""}
                                                name="password">
                                                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} name="password" placeholder="Enter Password" />
                                            </Form.Item>

                                            <Form.Item hasFeedback validateStatus={touched.email && errors.email ? "error" : ""}
                                                name="confirmPassword">
                                                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} name="confirmPassword" placeholder="Enter confirm password" />
                                            </Form.Item>

                                            <div className={styles.formBottomSection}>

                                                <Button htmlType="submit" className={styles.loginFormButton}>Submit</Button>
                                            </div>

                                        </Form>
                                    )}

                                </Formik>
                            }


                        </div>

                    </Col>
                </div>

            </Row>


        </>
    )
}

export default resetPassword
