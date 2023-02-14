import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const FilterDrawer = ({ visible = false, onClose }: Props) => {
  return (
    <>
      <Drawer
        title='Basic Drawer'
        placement='right'
        closable
        onClose={onClose}
        open={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
