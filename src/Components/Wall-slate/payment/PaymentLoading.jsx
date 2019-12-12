import React from 'react';
import "../../../Assets/CSS/loading.css";
import { Row, Col } from 'antd';







class PaymentLoading extends React.Component {
    constructor(props) {

        super(props);

        this.state = {


        };
    }



    render() {


        return <React.Fragment >
            <div>
                <br /><br /><br />

                <Row>
                    <Col span={12}></Col>
                    <Col span={12}></Col>
                </Row>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                </Row>
                <Row>
                    <Col span={24}><h1 className={'loading font-xl'}>Payment Processing</h1></Col>
                    
                </Row>
              



            </div>
        </React.Fragment>;
    }
}

export default PaymentLoading;