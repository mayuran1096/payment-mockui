import React, { Component } from 'react'
import CreditCardInput from 'react-credit-card-input';

export class CardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cardNumber: '',
      expiry: '',
      cvc: ''

    }
  }
  handleCardNumberChange = (event) => {
    this.setState({
      cardNumber: event.target.value
    }, () => {
      console.log(this.state.cardNumber)
    })
  }
  handleCardExpiryChange = (event) => {
    this.setState({
      expiry: event.target.value
    }, () => {
      console.log(this.state.expiry)
    })
  }
  handleCardCVCChange = (event) => {
    this.setState({
      cvc: event.target.value
    }, () => {
      console.log(this.state.cvc)
    })
  }
  render() {
    return (
      <div>
         <CreditCardInput
        cardNumberInputProps={{ value: this.state.cardNumber, onChange: this.handleCardNumberChange }}
        cardExpiryInputProps={{ value: this.state.expiry, onChange: this.handleCardExpiryChange }}
        cardCVCInputProps={{ value: this.state.cvc, onChange: this.handleCardCVCChange }}
        fieldClassName="input"

      />
      {/* <Input value={this.state.name} onChange={this.handleNameChange} placeholder="card holder name" /> */}
      </div>
     




    )
  }
}

export default CardForm
