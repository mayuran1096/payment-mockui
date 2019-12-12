import React from 'react';

import Payment from './payment/Payment';
import PaymentLoading from './payment/PaymentLoading'
import { Route, Switch } from "react-router";
import PaymentForm from './payment/CardForm'



class WallSlate extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path={'/'} component={Payment} />
                    <Route exact path={'/payment'} component={PaymentLoading} />
                </Switch>


            </>
        );
    }
}
export default WallSlate;

