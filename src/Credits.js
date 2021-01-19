//Credits.js

import React, {Component} from 'react';

class Credits extends Component {

  constructor(props){
    super(props)
    this.state={
      accountCredits: this.props.accountCredits
    }
  }

  componentDidMount = () => {
    this.setState({
      accountCredits: this.props.accountCredits
    })
  }

  render() {
    return (
        <div>
          {
            console.log('credits in credits', this.props.accountCredits)
          }
          Credits: {this.props.accountCredits}
        </div>
    );
  }
}

export default Credits;