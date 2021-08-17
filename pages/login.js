import styles from '../styles/login.module.css'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const { Item } = Form
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Row className="homePage">
        <Col xs={24}>
          <div className={styles.loginForm}>

            <div className={styles.logoDiv}>
              <img className={styles.loginLogo} src="/favicon.ico" alt="logo" />
            </div>
            <Form
              className={styles.mainForm}
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Item
                name="Email" type="email"
                rules={[{ required: true, message: 'Please input your Email address!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email address..." />
              </Item>
              <Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Item>
              <Item className={styles.loginForgot}>

                <Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Item>

                <a href="" className={styles.forgotText}>
                  Forgot password
                </a>
              </Item>

              <Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Item>
            </Form>

          </div>

        </Col>
      </Row>
    </>

  )

}

//next header and login and signup

export default Login