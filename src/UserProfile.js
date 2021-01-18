// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import corgi from './corgi.gif';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <div className='container'>   
            <h1>User Profile</h1>
          </div>
          <br></br>
            <div className='containUserPage'>
              <br></br><br></br>
              <Link to="/">Home</Link>
              <br></br><br></br>
              <div>Username: {this.props.userName}</div>
              <div>Member Since: {this.props.memberSince}</div>
              <img className='corgi' src={corgi} alt='corgi'></img>
            </div>
        </div>
    );
  }
}

export default UserProfile;