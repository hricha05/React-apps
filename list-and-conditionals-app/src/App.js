import React, { Component } from 'react';

import './App.css';
import validationComponent from './validationComponent/validationComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    // add conditional logical for validation component => output "Text too short" or "Text long enough" depending on the text length 

    return (
      <div className="App">
        {/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}
        
        <form>
          <label>
            <input type="text" 
              name="login" 
              value={ this.state.value } 
              onChange={ this.handleChange } />
            <p> {this.state.value.length}  </p>
          </label>
        </form>

        <validationComponent />


      </div>
    );
  }
}

export default App;
 