import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    user: [
      { username: 'Mr Richards', age: 29 },
      { username: 'Mrs Richards', age: 26 },
      { username: 'Miss Richards', age: 9 },
      { username: 'Miss Richards', age: 5 }       
  ],
       title: 'Login'
  };

  // newUser = () => {
  //   console.log('clicked');

  //   const newState = this.state.user.map((user) => {
  //     const tempUser = user;
  //     if (tempUser.age >= 50) {
  //       return tempUser.username= 'I am too old'
  //     }
  //     else {
  //       tempUser.age += 1
  //     }
  //     return tempUser;
  //   });
  //   this.setState({
  //     newState
  //   });
  // }

  // newUser = () => {
  //   this.setState({
  //     user: [
  //       { username: 'Mr Richards', age: 29 },
  //       { username: 'Mrs Richards', age: 26 },
  //       { username: 'Miss Richards', age: 9 },
  //       { username: 'Miss Richards', age: 5 }       
  //   ]
  //   })
  // }

  newUserfromInput = (event) => {
    this.setState( {
      user: [
        { username: event.target.value, age: 29 },
        { username: 'Mrs Richards', age: 26 },
        { username: 'Miss Richards', age: 9 },
        { username: 'Miss Richards', age: 5 }       
    ]
    })
  }

  render() {
    const style = {
      borderRadius: '1%',
      border: '0px solid lightgrey',
      boxShadow: '0px 1px 2px 0px',
      padding: '14px',
      margin: '14px auto',
      width: '25%',
      backgroundColor: '#FF0071'
    }

    return (
      <div className="App">
        {/* <header className="App-header">
          <h1>{ this.state.title }</h1>
        </header> */}
        <br />  
        {/* <button onClick={() => this.newUser('Harun is Awesome')}>Make me older using Anon Function</button>   */}
        {/* <button onClick={this.newUser.bind(this, 'Harun is Super Awesome')}>Make me older using bind Function</button> */}
        <div style={style}>
        <UserOutput
          username={this.state.user[0].username} 
          age={this.state.user.age}>Username: 
        </UserOutput>
        {/* <br /> */}
        <UserOutput 
          username={this.state.user[1].username} />
        <UserOutput 
          username={this.state.user[2].username} />
        <UserOutput
          username={this.state.user[3].username} />
        <UserInput 
          changed={this.newUserfromInput} 
          value={this.state.user[0].username} />  
        </div>
        <br />
          {/* { 
            this.state.user.map((user) => {
              return <UserOutput username={user.username} age={user.age}>Username:</UserOutput>
            })
          } */}
        
      </div>
    )
  }
}

export default App;
 