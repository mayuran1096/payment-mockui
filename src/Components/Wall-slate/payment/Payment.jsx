import React from 'react';
import "../../../Assets/CSS/ws_test_configuration.css";
import { Card, Col, Row, Button, message, Icon, Input, DatePicker } from "antd";
import moment from 'moment';
import {Link} from 'react-router-dom'
const dateFormat = 'YYYY/MM/DD';







class Payment extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            name: '',
            number: '',
            csv: '',
            date: ''


        };
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value


        }, () => {
            console.log(this.state.name)
        })
    }
    handleNumberChange = (event) => {
        this.setState({
            number: event.target.value
        }, () => {
            console.log(this.state.number)
        })
    }
    handleCsvChange = (event) => {
        this.setState({
            csv: event.target.value
        }, () => {
            console.log(this.state.csv)
        })
    }

    render() {


        return <React.Fragment >
            <div>

                <Row>
                    <Col span={24}>
                        <div style={{ background: '#ECECEC', padding: '30px' }}>
                            <Card title="Payment Details" bordered={false} className="ws_top_row" style={{ width: '75rem' }} >
                                <h2><b>Insert Transaction Details</b></h2>
                                <Row>
                                    <Col span={12}><p>Input your name :</p></Col>
                                    <Col span={12}> <Input value={this.state.name} onChange={this.handleNameChange} placeholder="card holder name" /></Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col span={12}>Card number :</Col>
                                    <Col span={12}><Input placeholder="xxxx-xxxx-xxxx-xxxx" value={this.state.number} onChange={this.handleNumberChange} /> </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col span={12}>Expiary date :</Col>
                                    <Col span={12}>  <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} /> </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col span={12}>Csv :</Col>
                                    <Col span={12}>  <Input placeholder="xxx" value={this.state.csv} onChange={this.handleCsvChange} /> </Col>
                                </Row>
                                <br /><br /><br />
                                <Row>
                                    <Col span={6}></Col>
                                    <Col span={6}></Col>
                                    <Col span={6}></Col>
                                    <Col span={6}><Link to="/payment"><Button type="primary" block>Proceed payment</Button></Link></Col>

                                </Row>



                            </Card>
                        </div>
                    </Col>

                </Row>

            </div>
        </React.Fragment>;
    }
}

export default Payment;