import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../api';

const { Title } = Typography;

const Register = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await createUser(values);
      history('/login');
      message.success('Registration successful. Please login.');
    } catch (error) {
      console.error('Registration failed:', error);

      if (error.response && error.response.data) {
        console.error('Server response:', error.response.data);
        message.error(error.response.data.message);
      } else {
        message.error('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <Row justify="center" align="middle" style={{ height: '50vh', }}>
      <Col span={8}>
        <Form
          name="register"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Title level={2}>Register</Title>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="name">
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item name="surname">
            <Input placeholder="Surname" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;