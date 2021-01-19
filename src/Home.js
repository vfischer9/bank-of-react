// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Debits from './Debits';
import Credits from './Credits';
import piggyBank from './piggybank.gif';
import CreditsList from './CreditsList'

class Home extends Component {

  constructor(props){
    super(props)
    this.state={
      accountBalance: this.props.accountBalance
    }
  }
    
  render() {
    return (
       <div>
            <div className='container'>
                <h1>Bank of React</h1>
            </div> 
                <br></br>
            <div className='containHomePage'>
              <br></br>
              <Link to="/login">Login</Link>
              <br></br>
              <Link to="/userProfile">User Profile</Link>
              <br></br>
              <Link to="/debitsList">Debits Page - ${this.props.accountDebits}</Link>
              <br></br>
              <Link to="/creditsList">Credits Page - $ {this.props.accountCredits}</Link>
              <br></br>
              <AccountBalance accountBalance={this.state.accountBalance}/>
              <br></br>
              <img className='logo' src={piggyBank} alt='bank'></img>
           </div>
       
       
        </div>
    );
  }
}

export default Home;