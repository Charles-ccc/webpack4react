import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Home & Webpack!</h1>
        <ul>
          {['WestBrook', 'Harden', 'James'].map((name, i) => (
            <li key={i}>{`I'm ${name}!`}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
