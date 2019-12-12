import React from 'react';
import Navbar from "./Navbar";
import {Icon, Layout, Menu} from "antd";
import FooterX from "./FooterX";
import WallSlate from "../Wall-slate/Wall-slate";
import {Route, Switch} from "react-router";


const {Sider, Content, Footer} = Layout;



class MainLayout extends React.Component {

    handleClick = (e) => {
        this.props.history.replace(`/${e.key}`);
    };

    render() {
        return <Layout className="main-layout">
            <Navbar/>
            <div className={'sider-n-content'}>
                <Content style={{width: '50%', minHeight: '700pt', padding: '10px', backgroundColor: '#fff'}}>
                
                  
                    <WallSlate />
                </Content>
            </div>
            <FooterX/>
        </Layout>;
    }
}

const responsive = {
    sm: {span: 24},
    md: {span: 8},
    lg: {span: 6},
    xl: {span: 4},
};
export default MainLayout;
