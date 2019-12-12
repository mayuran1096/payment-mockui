import React from 'react';
import { Icon, Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import "../../Assets/CSS/header.css";
import { Avatar, Typography } from 'antd';


const { Title } = Typography;

const { Header } = Layout;


export default class extends React.Component {
    render() {
        return <Header className="header_height_override" style={{ padding: 10 }}>

            <Title style={{ color: 'white', float: 'left' }} level={3}>PAYMENT</Title>
            <Avatar style={{ float: 'right' }} src="./dp.png" />

        </Header>
    }
}
