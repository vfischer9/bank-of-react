// Debits.js
import React, {Component} from 'react';

class Debits extends Component {
  render() {
      
    return (
        <div>
          Debits: {this.props.accountDebits}
        </div>
    );
  }
}

export default Debits;