import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import Login from './Login';
import DebitsList from './DebitsList';
import CreditsList from './CreditsList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        userName: 'vfisch',
        memberSince: '01/18/2021',
        accountBalance: 23,
        accountDebits: 1000,
        accountCredits: 500
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const LoginComponent = () => (
    <Login 
      user={this.state.currentUser} 
      mockLogIn={this.mockLogIn} {...this.props}
    />)
    
    const HomeComponent = () => (
    <Home 
      accountBalance={this.state.accountBalance}
      accountDebits={this.state.accountDebits}
      accountCredits={this.state.accountCredits}
    />);

    const UserProfileComponent = () => (
        <UserProfile 
          userName={this.state.currentUser.userName} 
          memberSince={this.state.currentUser.memberSince}  
        />
    );

    const DebitsListComponent = () => (
        <DebitsList
          accountBalance={this.state.accountCredits-this.state.accountDebits}
          accountDebits={this.state.accountDebits} 
          accountCredits={this.state.accountCredits}
        />
      );

    const CreditsListComponent = () => (
        <CreditsList
          accountBalance={this.state.accountCredits-this.state.accountDebits}
          accountDebits={this.state.accountDebits} 
          accountCredits={this.state.accountCredits}
        />
      );

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LoginComponent}/>
            <Route exact path="/debitsList" render={DebitsListComponent}/>
            <Route exact path="/creditsList" render={CreditsListComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;