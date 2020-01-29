# react-odometer
Lab 37 create an odometer with react.js<br>
[Odometer Code](./odometer/src/Odometer.js)

## Assignment
The goal of this lab is to create a 4 digit Odometer using the React framework. The application should have buttons that allow you to reset the value. Once the value hits a certain point it should either roll over or cut off.

## Approach
All the real logic is in the Odometer. The main parts I would like to point out are the button display and event handler. For the buttons I used a function component that constructs a set of increase and decrease buttons. This function does take in a value that represents the number of '0's after a one, this is used in both the name as well as an ID. As for the event handler it uses the ID of the button clicked to change the Odometer by that amount. Before the value is saved it is checked if the value is out of bounds and resets it to be in the valid range.