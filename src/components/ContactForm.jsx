import React from 'react';
import { Form, Input, Button } from 'antd';

const ContactForm = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <div className="min-h-40vh max-h-50vh flex flex-col items-center justify-center bg-[#0B090A] text-white">
        <Form className='flex-row mt-5 text-white' onFinish={onFinish}>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Message"
                name="message"a
                rules={[{ required: true, message: 'Please enter your message' }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item> 
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
        </div>
      
    );
};

export default ContactForm;
