// src/components/Login.js
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail } from '../api';

const { Title } = Typography;

const Login = () => {
  const history = useNavigate();
  const [userData, setUserData] = useState(null);

  const onFinish = async (values) => {
    try {
      const response = await getUserByEmail(values.email);
      const user = response.data;

      if (user && values.password === user.password) {
        localStorage.setItem('user', JSON.stringify(user));

        history('/');
      } else {
        message.error('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      message.error('Login failed. Please try again.');
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '50vh' }}>
      <Col span={8}>
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Title level={2}>Login</Title>
          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
