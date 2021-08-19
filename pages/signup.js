import styles from '../styles/login.module.css'
import { Row, Col, Button } from 'antd';
import { Form, Input } from 'formik-antd'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { MailOutlined, UserOutlined, LockOutlined, DollarOutlined, ShoppingCartOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useState } from 'react';


const loginValidation = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Email is required!'),
  password: Yup.string().min(8, "Password must be at least 8 characters long").required('Password is required!')
})

const signupValidation = Yup.object().shape({
  fullName: Yup.string().min(6, "Name must be at least 6 characters long").required('Name is required'),
  email: Yup.string().email('Please enter a valid email!').required('Email is required'),
  password: Yup.string().min(8, "Password must be at least 8 characters long").required('Password is required'),
  cPassword: Yup.string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    })
})

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)


  const loginAccount = (values) => {
    console.log(values)
  };

  const registerAccount = (values) => {
    console.log(values)
  };

  const toggleForm = (e) => {
    e.preventDefault()

    setIsLogin(true)

  }

  const toggleToFalse = (e) => {
    e.preventDefault()

    setIsLogin(false)

  }

  return (
    <>
      <Row>
        <div className={styles.loginPage}>

          <Col xs={24} md={12} className={styles.fullForm}>
            <div className={styles.loginForm}>

              <div className={styles.logoDiv}>
                <img className={styles.loginLogo} src="/favicon.ico" alt="logo" />
              </div>

              {
                !isLogin ?
                  <Formik initialValues={{ email: "", password: "" }} onSubmit={loginAccount} validationSchema={loginValidation}>
                    {({ errors, touched }) => (

                      <Form
                        className={styles.mainForm}>
                        <Form.Item hasFeedback validateStatus={touched.email && errors.email ? "error" : ""}
                          name="email">
                          <Input prefix={<MailOutlined className="site-form-item-icon" />} name="email" placeholder="Email address..." />
                        </Form.Item>
                        <Form.Item
                          name="password" hasFeedback validateStatus={touched.password && errors.password ? "error" : ""} >
                          <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="password"
                            placeholder="Password"
                          />
                        </Form.Item>

                        <p className={styles.forgotText}>
                          <a href="" >
                            Forgot password
                          </a>
                        </p>

                        <div className={styles.formBottomSection}>
                          <Button htmlType="submit" className={styles.loginFormButton}>
                            Log in
                          </Button>

                        </div>
                        <br />
                        <div className={styles.formBottomtext}>
                          <p className={styles.or}> Or </p>

                          <br />
                          <a onClick={toggleForm}>Register now!</a>
                        </div>
                      </Form>
                    )}
                  </Formik>

                  :
                  <Formik initialValues={{ email: "", password: "", fullName: "", cPassword: "" }} onSubmit={registerAccount} validationSchema={signupValidation} >

                    {({ errors, touched }) => (


                      <Form initialValues={{ remember: false }}
                        className={styles.mainForm}>
                        <Form.Item
                          name="fullName"
                        >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name..." name="fullName" />
                        </Form.Item>

                        <Form.Item
                          name="email"
                        >
                          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address..." name="email" />
                        </Form.Item>

                        <Form.Item
                          name="password"
                        >
                          <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="password"
                            placeholder="Password"
                          />

                        </Form.Item>
                        <Form.Item
                          name="cPassword"
                        >
                          <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="cPassword"
                            placeholder="Confirm Password"
                          />

                        </Form.Item>

                        <div className={styles.formBottomSection}>
                          <Button htmlType="submit" className={styles.loginFormButton}>
                            Register
                          </Button>

                        </div>
                        <br />
                        <div className={styles.formBottomtext}>
                          <p className={styles.or}> Already have an account ? </p>  <br />
                          <a onClick={toggleToFalse} >Login Here!</a>
                        </div>
                      </Form>
                    )}

                  </Formik>
              }

            </div>

          </Col>
          <Col xs={0} md={12} className={styles.serviceContainer}>
            <div className={styles.ousrServices}>
              <h2>Our Services</h2>
              <div className={styles.serviceList}>
                <ul >
                  <li> <DollarOutlined /> <strong> Money Lenders </strong> </li>
                  <li> <ShoppingCartOutlined /> <strong> Fix & Flip </strong> </li>
                  <li> <HomeOutlined /> <strong>  Distressed Properties </strong></li>
                  <li> <UnorderedListOutlined /> <strong> Property Listings </strong> </li>
                </ul>
              </div>

            </div>
          </Col>
        </div>

        <Col xs={24} md={0} className={styles.serviceContainerXs}>
          <div className={styles.ousrServices}>
            <h2>Our Services</h2>
            <div className={styles.serviceList}>
              <ul >
                <li> <DollarOutlined /> <strong> Money Lenders </strong> </li>
                <li> <ShoppingCartOutlined /> <strong> Fix & Flip </strong> </li>
                <li> <HomeOutlined /> <strong>  Distressed Properties </strong></li>
                <li> <UnorderedListOutlined /> <strong> Property Listings </strong> </li>
              </ul>
            </div>

          </div>
        </Col>

      </Row>

    </>

  )

}

//next header and login and signup

export default Login