//Credits.js

import React, {Component} from 'react';

class Credits extends Component {
  render() {
    return (
        <div>
          Credits: {this.props.accountCredits}
        </div>
    );
  }
}

export default Credits;