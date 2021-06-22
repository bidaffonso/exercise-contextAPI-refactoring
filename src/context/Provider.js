import React from 'react';
import MyContext from './MyContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red'
      },
    }

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  render() {
    return(null);
  }
}


export default Provider;