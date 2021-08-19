import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { Row, Col, Button } from 'antd'
import { Form, Input } from 'formik-antd'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { MailOutlined, QrcodeOutlined, LockOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify'
import axios from 'axios'
import { useRouter } from 'next/router'

const validateEmail = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email address").required("Email address is required")

})

const validateCode = Yup.object().shape({
    code: Yup.string().required("Please enter a valid code")
})

const validatePassword = Yup.object().shape({
    password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    cPassword: Yup.string()
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value
        })

})


const resetPassword = () => {
    const [emailSubmitted, isEmailSubmitted] = useState(false)
    const [codeSubmitted, isCodeSubmitted] = useState(false)
    const [requestedMail, isRequestedMail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const submitEmail = async (values) => {
        const email = values.email
        try {
            setIsLoading(true)
            await axios.post(`http://localhost:5000/api/reset-password`, values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            toast.success("Your password reset code has been sent to your email.")
            setIsLoading(false)
            isEmailSubmitted(true)
            isRequestedMail(email)
        } catch (err) {
            setIsLoading(false)
            toast.error(err.response.data.message || "Something went wrong!!!")

        }
    }
    const submitCode = async ({ code }) => {
        try {
            setIsLoading(true)
            await axios.post(`http://localhost:5000/api/verify-code`, { email: requestedMail, resetCode: code }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            toast.success("Please change your password now.")
            setIsLoading(false)
            isCodeSubmitted(true)
        } catch (err) {
            setIsLoading(false)
            toast.error(err.response.data.message || "Something went wrong!!!")

        }
    }

    const submitPassword = async ({ password, cPassword }) => {
        try {
            setIsLoading(true)
            await axios.patch(`http://localhost:5000/api/change-password`, { email: requestedMail, password, cPassword }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            toast.success("Password successfully changed!, Please login now.")
            router.push("/signup")
            setIsLoading(false)
            isRequestedMail('')
        } catch (err) {
            setIsLoading(false)
            router.push("/reset-password")
            toast.error(err.response.data.message || "Something went wrong!!!")

        }

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
                                <Formik initialValues={{ email: "" }} onSubmit={submitEmail} validationSchema={validateEmail}>
                                    {({ errors, touched }) => (
                                        <Form
                                            className={styles.mainForm}>
                                            <Form.Item hasFeedback validateStatus={touched.email && errors.email ? "error" : ""}
                                                name="email">
                                                <Input prefix={<MailOutlined className="site-form-item-icon" />} name="email" placeholder="Email address..." />
                                            </Form.Item>

                                            <div className={styles.formBottomSection}>

                                            <Button htmlType="submit" disabled={isLoading} loading={isLoading} className={styles.loginFormButton}>Submit</Button>
                                            </div>

                                        </Form>
                                    )}

                                </Formik>
                            }

                            {emailSubmitted && !codeSubmitted &&
                                <Formik initialValues={{ code: "" }} onSubmit={submitCode} validationSchema={validateCode}>
                                    {({ errors, touched }) => (
                                        <Form
                                            className={styles.mainForm}>
                                        <Form.Item hasFeedback validateStatus={touched.code && errors.code ? "error" : ""}
                                                name="code">
                                                <Input prefix={<QrcodeOutlined className="site-form-item-icon" />} name="code" placeholder="Enter reset code here..." />
                                            </Form.Item>

                                            <div className={styles.formBottomSection}>

                                            <Button htmlType="submit" disabled={isLoading} loading={isLoading} className={styles.loginFormButton}>Submit</Button>
                                            </div>

                                        </Form>
                                    )}

                                </Formik>
                            }

                            {emailSubmitted && codeSubmitted &&
                                <Formik initialValues={{ password: "", cPassword: "" }} onSubmit={submitPassword} validationSchema={validatePassword}>
                                    {({ errors, touched }) => (
                                        <Form
                                            className={styles.mainForm}>
                                        <Form.Item hasFeedback validateStatus={touched.password && errors.password ? "error" : ""}
                                                name="password">
                                                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} name="password" placeholder="Enter Password" />
                                            </Form.Item>

                                        <Form.Item hasFeedback validateStatus={touched.cPassword && errors.cPassword ? "error" : ""}
                                            name="cPassword">
                                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} name="cPassword" placeholder="Enter confirm password" />
                                            </Form.Item>

                                            <div className={styles.formBottomSection}>

                                            <Button htmlType="submit" disabled={isLoading} loading={isLoading} className={styles.loginFormButton}>Submit</Button>
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
