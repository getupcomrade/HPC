import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center',bottom: '0', left:'0',width: '100%', padding:50, backgroundColor:'#04142c', color:'white'}}>
     By Dias Berlibek
    </Footer>
  );
};

export default AppFooter;
