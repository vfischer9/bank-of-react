//DebitsList.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';
import Debits from './Debits';
import Credits from './Credits';
import Home from './Home';
import './styles/debits.css'
import money from './money.png';

class DebitsList extends Component {
    constructor(props){
        super(props);
        this.state={
            DebitsData: [],
            DebitDescription:"",
            DebitAmount: 0,
            DebitDate:"",
            AddedOnce: false,
            accountBalance: this.props.accountBalance
        };
    }

debitHistoryOnClick = (event) => {
    event.preventDefault();
    axios.get("https://moj-api.herokuapp.com/debits")
    .then((response) => {
        if(this.state.AddedOnce===false){
            this.setState({
                DebitsData: response.data
            })
        }
        this.setState({
            AddedOnce: true
        })
    }).catch((err) => console.log(err));
}

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
}
handleAdd = () => {
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
            <div className='container'>
                <h1>Debits Page</h1>
            </div> 

            <br></br>
                
            <div className='containDebitPage'>
                <img className='money' src={money} alt='money'></img>
                <br></br>
                <Link to="/" className='link'>Home</Link>
                <br></br><br></br>
                <AccountBalance accountBalance={'$' + (this.props.accountCredits-(this.props.accountDebits+Number(this.state.DebitAmount)))}/>
                <Debits accountDebits={'$' + (this.props.accountDebits+Number(this.state.DebitAmount))}/>
                <Credits accountCredits={'$' + this.props.accountCredits}/>
              
                <br></br>
                <div>
                    <button onClick={this.debitHistoryOnClick}>Show/Refresh Debits History</button>
                </div>

                <p>Debit Description: 
                    <input 
                    type="text" 
                    name="DebitDescription" 
                    onChange={this.handleChange}
                    ></input>
                    </p>

                <p>Debit Amount: 
                    <input 
                    type="number" 
                    name="DebitAmount" 
                    onChange={this.handleChange}
                    ></input>
                    </p>

                <p>Debit Date: 
                    <input 
                    type="datetime-local" 
                    name="DebitDate" 
                    onChange={this.handleChange}
                    ></input>
                    </p>

                <button onClick={this.handleAdd}>Add</button>

                {this.state.DebitsData.map(data => {
                    
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

export default DebitsList;