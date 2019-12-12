import React from 'react';
import "../../../Assets/CSS/loading.css";






class PaymentLoading extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
           

        };
    }
   
  

    render() {


        return <React.Fragment >
            <div>
                <h1 className={'loading font-xl'}>Payment Processing</h1>

               
            </div>
        </React.Fragment>;
    }
}

export default PaymentLoading;