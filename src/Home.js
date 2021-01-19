// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Debits from './Debits';
import Credits from './Credits';
import piggyBank from './piggybank.gif';

class Home extends Component {

    
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
              <Link to="/debitsList"><Debits accountDebits= {'$' + this.props.accountDebits}/></Link>
              <Link to="/creditsList"><Credits accountCredits={'$' + this.props.accountCredits}/></Link>
              <br></br>
              <AccountBalance accountBalance={'$' + this.props.accountBalance}/>
              <br></br>
              <img className='logo' src={piggyBank} alt='bank'></img>
           </div>
       
       
        </div>
    );
  }
}

export default Home;