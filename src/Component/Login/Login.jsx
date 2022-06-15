import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Container , Form , Button } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import Digitren1 from '../../Assets/Logos/digitren1.png';
import 'antd/dist/antd.css';

import { Button, Form, Input, message, Space } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };

  return (
    <div className="bg-image">
      <div style={{ paddingTop: '50px' }}>
      <img src={Digitren1} alt="" className="logo" />
      <div style={{ marginLeft: '500px', marginRight: '500px'}}>
        <h2>Sign In To Admin</h2>
        <p>Masukan username dan password dengan benar!</p>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
        className='form-item'
          name="email"
          label="Username"
          rules={[
            {
              required: true,
            },
            {
              type: "url",
              warningOnly: true,
            },
            {
              type: "string",
              min: 6,
            },
          ]}
        >
          <Input placeholder="Masukan username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
            {
              type: "url",
              warningOnly: true,
            },
            {
              type: "string",
              min: 6,
            },
          ]}
        >
          <Input placeholder="Masukan password" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" onClick={() =>  navigate("/auth/test")}>
              Konfirmasi
            </Button>
          </Space>
        </Form.Item>
      </Form>
      </div>
      </div>
    </div>
  );
};

export default Login;