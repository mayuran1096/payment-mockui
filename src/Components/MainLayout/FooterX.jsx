import React from 'react';
import {Col, Divider, Layout, Menu, Row} from 'antd';

const { Footer } = Layout;
export default class extends React.Component{
    render(){
        return  <div className="footer-area" >
            <Footer className="footer" {...responsive}>
                <div className={'footer-container'}>
                </div>
                <br/>
                <span>
        </span>
                <Row>
                    <Col>
            <span className={'copyright'}>
              © Copyright 2019 by ysb-mayuran All Rights Reserved.
            </span>
                    </Col>
                </Row>
            </Footer>
        </div>
    }
}

const responsive = {
    sm: {span: 24},
    md: {span: 8},
    lg: {span: 6},
    xl: {span: 4},
};