import styles from '../styles/login.module.css'
import { Row, Col, Button, message } from 'antd';
import { Form, Input } from 'formik-antd'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { MailOutlined, UserOutlined, LockOutlined, DollarOutlined, ShoppingCartOutlined, HomeOutlined, UnorderedListOutlined, SyncOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, setInLoginPage } from '../store/userInfoSlice'
import { useRouter } from 'next/router'

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

const Signup = () => {

  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [clickedOnLogin, setClickedOnLogin] = useState(false)
  const [loginData, setLoginData] = useState()
  const [requestedPathname] = useState(useSelector((state) => state.user.requestedPath))
  const user = useSelector((state) => state.user.user)
  const router = useRouter()
  const dispatch = useDispatch()

  // const requestedQuery = useSelector((state) => state.user.requestedQuery)

  // const arrayOfURI = []

  // useEffect(() => {
  //   if (Object.entries(requestedQuery).length != 0) {
  //     try {
  //       for (const [key, value] of Object.entries(requestedQuery)) {
  //         const iteratedData = `${key.trim()}=${value.split(' ').join("+")}`
  //         arrayOfURI.push(iteratedData)
  //       }

  //       const newArra = [new Set(arrayOfURI)]
  //       const URI = `${requestedPathname}?${newArra.join("&")}`
  //       const correctedUrl = URI.split("?[object Set]")[0]
  //       requestedUrl = correctedUrl
  //     } catch (err) { console.log(err) }

  //   } else {
  //     console.log(requestedUrl)
  //     requestedUrl = requestedPathname
  //   }
  // }, [Object.entries(requestedQuery).length != 0, requestedPathname, requestedUrl])

  const loginAccount = (values) => {
    setClickedOnLogin(true)
    setLoginData(values)

  };


  dispatch(setInLoginPage(true))

  useEffect(() => {
    if (clickedOnLogin && loginData) {
      const loginHandler = async () => {
        try {
          // console.log(requestedUrl)
          console.log("logged in")
          setIsLoading(true)
          const { data } = await axios.post(`${process.env.NEXT_PUBLIC_MAIN_PROXY}/login`, loginData, {
            headers: {
              'Content-Type': 'application/json'
            }, withCredentials: true //must include this shit.. otherwise cookies wont work

          })
          // data.token && delete data.token
          dispatch(login(data))
          localStorage.setItem('user', JSON.stringify(data))
          setIsLoading(false)
          message.success("Logged in successfully.")
          const route = requestedPathname != "" ? requestedPathname : "/home/dashboard"
          router.push(route)
          dispatch(setInLoginPage(false))
          setClickedOnLogin(false)
// a
        } catch (err) {
          setIsLoading(false)
          setClickedOnLogin(false)

          //do not put here err.response.data.message ? err.response.data.message : "Something went wrong!!!".. otherwise it wont catch the error.
          const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
          message.error(errorMsg)

        }
      }
      loginHandler()
    }


  }, [clickedOnLogin && loginData])

  const registerAccount = async ({ email, fullName: name, password, cPassword }) => {
    try {
      setIsLoading(true)
      await axios.post(`${process.env.NEXT_PUBLIC_MAIN_PROXY}/signup`, { email, name, password, cPassword }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setIsLoading(false)
      message.success("Signup successfully. Please login Now.")
      setIsLogin(false)

    } catch (err) {
      setIsLoading(false)
      message.error(err.response.data.message || "Please provide the correct data & try again.")

    }
  };

  const toggleForm = (e) => {
    e.preventDefault()
    setIsLogin(true)
  }
  const toggleToFalse = (e) => {
    e.preventDefault()
    setIsLogin(false)
  }
  useEffect(() => {
                  setPageLoading(true)

    if (user !== null && requestedPathname == "") {
      router.push("/home/dashboard")
    }
  }, [user !== null   && requestedPathname == ""])

  useEffect(() => {
    if (user == null) {
            setPageLoading(false)
    }

  }, [user == null])


  return (
    <>
      {pageLoading ? <div className="loadingDiv">
        <SyncOutlined spin size="large" className="pageLoading" />
      </div>
        :
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
                          <Link href="/reset-password">
                            <a  >
                              Forgot password ?
                            </a>
                          </Link>
                        </p>

                        <div className={styles.formBottomSection}>
                          <Button htmlType="submit" className={styles.loginFormButton} disabled={isLoading} loading={isLoading}>
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
                          hasFeedback validateStatus={touched.fullName && errors.fullName ? "error" : ""}
                        >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name..." name="fullName" />
                        </Form.Item>

                        <Form.Item
                          name="email"
                          hasFeedback validateStatus={touched.email && errors.email ? "error" : ""}
                        >
                          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address..." name="email" />
                        </Form.Item>

                        <Form.Item
                          name="password"
                          hasFeedback validateStatus={touched.password && errors.password ? "error" : ""}
                        >
                          <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="password"
                            placeholder="Password"
                          />

                        </Form.Item>
                        <Form.Item
                          name="cPassword"
                          hasFeedback validateStatus={touched.cPassword && errors.cPassword ? "error" : ""}
                        >
                          <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="cPassword"
                            placeholder="Confirm Password"
                          />

                        </Form.Item>

                        <div className={styles.formBottomSection}>
                          <Button htmlType="submit" className={styles.loginFormButton} disabled={isLoading} loading={isLoading}>
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
      }

    </>

  )

}


export default Signup