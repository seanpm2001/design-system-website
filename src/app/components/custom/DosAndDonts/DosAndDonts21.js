import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts21 extends Component {
  render() {
    const typeN = require('./images/6.1-N.png');
    const typeY = require('./images/6.1-Y.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={typeY} />
          <Example incorrect caption="Incorrect" text="" img={typeN} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts21;
