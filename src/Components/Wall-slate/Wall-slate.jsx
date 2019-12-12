import React from 'react';

import Payment from './payment/Payment';
import PaymentLoading from './payment/PaymentLoading'
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import { Route } from "react-router";



class WallSlate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            {/* <Router>
                <Switch>
                    <Route path={'/'} exact component={Payment} />
                    <Route path={'/pay'} component={PaymentLoading} />

                </Switch>




            </Router> */}
            <Router>
                <Switch>
                <Route path={'/'} exact  component={Payment}/>
                <Route path={'/payment'}  component={PaymentLoading}/>
                </Switch>
               

            </Router>

            


        </React.Fragment>;
    }
}
export default WallSlate;
