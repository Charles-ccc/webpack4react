import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React & Webpack!</h1>
        <ul>
          {['WestBrook', 'Harden', 'James'].map(name => (
            <li>{`I'm ${name}!`}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
