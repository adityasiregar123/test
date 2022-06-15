import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import SideNavigation from '../Home/SideNavigation/SideNavigation';
import TopNavigation from '../Home/TopNavigation/TopNavigation';
import Kaki from '../Footer';
import './Test.css';
import { Card } from 'antd';
import Charts from '../Charts/Charts';

const { Header, Footer, Sider, Content } = Layout;
const Test = () => (
  <>
    <Layout>
      <Sider className='sider'>
        <SideNavigation />
      </Sider>
      <Layout>
            <Header className='header'>
                <TopNavigation/>
            </Header>
        <Content className='content'>
                <Breadcrumb className='breadcrumb'>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="">Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="">Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            <Card className='charts' style={{ margin: '7px'}}>
              <Charts/>
            </Card>
        </Content>
        <Footer className='footer'>
            <Kaki />
        </Footer>
      </Layout>
    </Layout>
  </>
);

export default Test;
