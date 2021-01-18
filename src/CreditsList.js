//CreditsList.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';
import Debits from './Debits';
import Credits from './Credits';

class CreditsProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            CreditsData: [],
            CreditDescription:"",
            CreditAmount: 0,
            CreditDate:"",
            AddedOnce: false,
        };
    }

    onClick = (event) => {
        event.preventDefault();
        axios.get("https://moj-api.herokuapp.com/credits")
        .then((response) => {
            console.log("the response data: "+response.data)
            if(this.state.AddedOnce===false){this.setState({CreditsData: response.data})}
            console.log("our state data: "+this.state.CreditsData)
            this.setState({AddedOnce: true})
            }
        ).catch((err) => console.log("error is: "+err));
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleAdd = (event) => {
        this.state.CreditsData.unshift({
            "description": this.state.CreditDescription,
            "amount": this.state.CreditAmount,
            "date": this.state.CreditDate
        })
        console.log(this.state.CreditsData)
    }
  render() {
    return (
        <div>
          <h1>Credits Profile</h1>
          <Link to="/">Home</Link>
          <AccountBalance accountBalance={this.props.accountCredits-this.props.accountDebits+Number(this.state.CreditAmount)}/>
          <Debits accountDebits={this.props.accountDebits}/>
          <Credits accountCredits={this.props.accountCredits+Number(this.state.CreditAmount)}/>
          <div><button onClick={this.onClick}>Show Credits History</button></div>
          <p>Credit Description: <input type="text" name="CreditDescription" onChange={this.handleChange}></input></p>
          <p>Credit Amount: <input type="number" name="CreditAmount" onChange={this.handleChange}></input></p>
          <p>Credit Date: <input type="datetime-local" name="CreditDate" onChange={this.handleChange}></input></p>
            <button onClick={this.handleAdd}>Add Credit</button>
          {this.state.CreditsData.map(data => {
              return (
              <div>
                  <ul>
                      <li>Description: {data.description}</li>
                      <li>Amount: {data.amount}</li>
                      <li>Date: {data.date}</li>
                  </ul>
              </div>
                    )
                }
             )
          }
        </div>
    );
  }
}

export default CreditsProfile;