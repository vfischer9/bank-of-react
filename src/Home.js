// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Debits from './Debits';
import Credits from './Credits';

class Home extends Component {

    
  render() {
    return (
        <div>
            <Link to="/login">Login</Link>
            <br></br>
            <h1>Bank of React</h1>

            <Link to="/userProfile">User Profile</Link>
            <Link to="/debitsProfile"><Debits accountDebits={this.props.accountDebits}/></Link>
             <Link to="/creditsProfile"><Credits accountCredits={this.props.accountCredits}/></Link>

            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;