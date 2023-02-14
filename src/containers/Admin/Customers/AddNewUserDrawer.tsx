import React, { useState } from 'react';
import { Button, Drawer, Form, Input, DatePicker } from 'antd';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const AddNewUserDrawer = ({ visible = false, onClose }: Props) => {
  return (
    <>
      <Drawer
        title='Add User'
        placement='right'
        closable
        onClose={onClose}
        open={visible}
      >
        <Form name='basic' layout='vertical'>
          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Phone Number'
            name='number'
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label='DOB' name='dob'>
            <DatePicker />
          </Form.Item>
          <Form.Item label='Pant Size' name='pant_size'>
            <Input />
          </Form.Item>
          <Form.Item label='Shirt Size' name='shirt_size'>
            <Input />
          </Form.Item>
          <Button htmlType='submit'>Register</Button>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewUserDrawer;
