//CreditsList.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';
import Debits from './Debits';
import Credits from './Credits';
import moneyGirl from './moneyGirl.png';

class CreditsProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            CreditsData: [],
            CreditDescription:"",
            CreditAmount: this.props.CreditAmount,
            CreditDate:"",
            AddedOnce: false
        };
    }

    onClick = (event) => {
        event.preventDefault();
        axios.get("https://moj-api.herokuapp.com/credits")
        .then((response) => {
            if(this.state.AddedOnce===false){this.setState({CreditsData: response.data})}
            this.setState({AddedOnce: true})
            }
        ).catch((err) => console.log("error is: "+err));
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            accountBalance: ((this.props.accountCredits+Number(this.state.CreditAmount))-(this.props.accountDebits))
        });
    }

    handleAdd = () => {
        this.state.CreditsData.unshift({
            "description": this.state.CreditDescription,
            "amount": this.state.CreditAmount,
            "date": this.state.CreditDate
        })
    }

  render() {
    return (
        <div>
         <div className='container'>
            <h1>Credits Page</h1>
          </div>

          <br></br>

          <div className='containDebitPage'>
          <img className='moneyGirl' src={moneyGirl} alt='money'></img>
            <br></br>
            <Link to="/" className='link'>Home</Link>
            <br></br><br></br>
            <AccountBalance 
              accountBalance={'$' + ((this.props.accountCredits+Number(this.state.CreditAmount))-(this.props.accountDebits))}
            />

            <Debits 
            accountDebits={'$' + this.props.accountDebits}
            />

            <Credits 
            accountCredits={'$' + (this.props.accountCredits+Number(this.state.CreditAmount))}
            />

              <br></br>

            <div>
                <button onClick={this.onClick}>Show/Refresh Credits History</button>
          </div>

            <p>Credit Description: 
                <input 
                type="text" 
                name="CreditDescription" 
                onChange={this.handleChange}
                ></input>
              </p>

            <p>Credit Amount: 
                <input 
                type="number" 
                name="CreditAmount" 
                onChange={this.handleChange}
                ></input>
              </p>

            <p>Credit Date: 
                <input
                type="datetime-local" 
                name="CreditDate" 
                onChange={this.handleChange}
                ></input>
              </p>

              <button onClick={this.handleAdd}>Add Credit</button>

            {this.state.CreditsData.map(data => {
                return (
                <div>
                    <ul>
                        <p>Description: <i>{data.description}</i></p>
                        <p>Amount: <i>{'$' + data.amount}</i></p>
                        <p>Date: <i>{data.date}</i></p>
                        <br></br>
                    </ul>
                </div>
                      )
                  }
              )
            }
          </div>
        </div>
    );
  }
}

export default CreditsProfile;