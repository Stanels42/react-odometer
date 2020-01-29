import React, { Component } from 'react';

class Odometer extends Component {
	constructor(props){
    super(props)
    this.state = {
      odometer :0,
      maxDisplay: 10000,
    };
    this.increment = this.increment.bind(this)
  }
  
  /**
   * ## Event Listener ##
   * Used to adjust the odometer based on the value of the button pushed.
   */
  increment(event) {
    let change = parseInt(event.target.id);
    change = (this.state.odometer + change)
    change = change < 0 ? 0 : change%this.state.maxDisplay
    this.setState({
      odometer: change,
    })
  }

  /**
   * Takes in the current odometer value and returns the displayable version.
   * In: Int
   * Out: String
   */
  displayNumber(number) {
    let odo = String(number);
    return '0'.repeat(4-odo.length > 0? 4-odo.length : 0) + odo
  }

  /**
   * A component function used to create the buttons. Takes in a value that is the number of '0's after the 1.
   * In: Int
   * Out: An increase and decrease button
   */
  createButtonSet (val) {
    let idNum = "1" + '0'.repeat(val)
    return(
    <li key={val}>
      <button onClick={this.increment} id={idNum}>Add {idNum}</button>
      <button onClick={this.increment} id={"-" + idNum}>Subtract {idNum}</button>
    </li>
    )
  }

  /**
   * Render the current state of the odometer
   */
  render() {
    return (
			<main>
			<h2>{this.displayNumber(this.state.odometer)}</h2>
				<ul>
					{[0,1,2,3].map(val => this.createButtonSet(val))}
				</ul>
			</main>
    );
  }
}
export default Odometer