import styles from '../styles/login.module.css'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, UserOutlined, LockOutlined, DollarOutlined, ShoppingCartOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)
  const { Item } = Form


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
              {!isLogin ?
                <Form
                  className={styles.mainForm}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Item
                    name="Email" type="email"
                    rules={[{ required: true, message: 'Please input your Email address!' }]}
                  >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address..." />
                  </Item>
                  <Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                    <p className={styles.forgotText}>
                      <a href="" >
                        Forgot password
                      </a>
                    </p>

                  </Item>

                  <Item className={styles.rememberMe} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Item>
                  <div className={styles.formBottomSection}>

                    <Item>
                      <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                        Log in
                      </Button>
                    </Item>
                    <p className={styles.or}> Or </p>  <br />
                    <a onClick={toggleForm}>Register now!</a>
                  </div>

                </Form>

                :

                <Form
                  className={styles.mainForm}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Item
                    name="Full Name"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name..." />
                  </Item>

                  <Item
                    name="Email" type="email"
                    rules={[{ required: true, message: 'Please input your Email address!' }]}
                  >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address..." />
                  </Item>

                  <Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />

                  </Item>
                  <Item
                    name="Confirm Password"
                    rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />

                  </Item>

                  <div className={styles.formBottomSection}>

                    <Item>
                      <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                        Register
                      </Button>
                    </Item>
                    <p className={styles.or}> Already have an account ? </p>  <br />
                    <a onClick={toggleToFalse} >Login Here!</a>
                  </div>

                </Form>

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