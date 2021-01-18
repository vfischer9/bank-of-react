//DebitsList.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';
import Debits from './Debits';
import Credits from './Credits';

class DebitsList extends Component {
    constructor(props){
        super(props);
        this.state={
            DebitsData: [],
            DebitDescription:"",
            DebitAmount: 0,
            DebitDate:"",
            AddedOnce: false,
        };
    }

onClick = (event) => {
    event.preventDefault();
    axios.get("https://moj-api.herokuapp.com/debits")
    .then((response) => {
        console.log("the response data: "+response.data)
        if(this.state.AddedOnce===false){this.setState({DebitsData: response.data})}
        console.log("our state data: "+this.state.DebitsData)
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
    this.state.DebitsData.unshift({
        "description": this.state.DebitDescription,
        "amount": this.state.DebitAmount,
        "date": this.state.DebitDate
    })
    console.log(this.state.DebitsData)
}
  render() {
    return (
        <div>
          <h1>Debits Profile</h1>
          <Link to="/">Home</Link>
          <AccountBalance accountBalance={this.props.accountCredits-this.props.accountDebits+Number(this.state.DebitAmount)}/>
          <Debits accountDebits={this.props.accountDebits+Number(this.state.DebitAmount)}/>
          <Credits accountCredits={this.props.accountCredits}/>
          <div><button onClick={this.onClick}>Show Debits History</button></div>
          <p>Debit Description: <input type="text" name="DebitDescription" onChange={this.handleChange}></input></p>
          <p>Debit Amount: <input type="number" name="DebitAmount" onChange={this.handleChange}></input></p>
          <p>Debit Date: <input type="datetime-local" name="DebitDate" onChange={this.handleChange}></input></p>
            <button onClick={this.handleAdd}>Add Debit</button>
          {this.state.DebitsData.map(data => {
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

export default DebitsList;