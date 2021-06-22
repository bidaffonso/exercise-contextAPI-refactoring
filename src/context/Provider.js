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

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    })
  }

changeSignal(payload) {
  this.setState({
    signal: {
      ...this.state.signal,
      color: payload,
    }
  })
}

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    const { children } = this.props;
    return(
      <MyContext.Provider value={context}>
        {children}
      </MyContext.Provider>
    );
  }
}


export default Provider;