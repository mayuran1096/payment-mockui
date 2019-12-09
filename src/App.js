import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Avatar } from 'antd';

const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }} >
          <Avatar style={{ float: 'right' }} src="./dp.png" />
          <Title style={{ color: 'white' }} level={3}>PAYMENT</Title>
        </Header>
        <Content></Content>
        <Footer style={{ textAlign: 'center' }}>payment Design ©2019 Created by ys mayuran</Footer>
      </Layout>
    </div>
  );
}

export default App;
