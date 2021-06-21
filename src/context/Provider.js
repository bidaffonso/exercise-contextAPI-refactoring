import Proptypes from 'prop-types';
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
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    })
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    const { children } = this.props;
    return (
      <MyContext.Provider value={ context }>
        {children}
      </MyContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;