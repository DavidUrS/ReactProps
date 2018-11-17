import React, { Component } from 'react';
import Cars from './cars/Cars';
import Peoples from './peoples/Peoples';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Cars'React APP (PROPS EXAMPLES) <em>Cars & Peoples</em></h3>
        <hr></hr>
        <h4>Example with <code>this.props.name</code></h4>
        <Cars modelo={'Land Cruiser'} marca={'Toyota'}/>
        <hr></hr>
        <h4>Example with <code>Destructurig props</code></h4>
        <Peoples name={'David'} lastname={'Uribe'}/>
      </div>
    );
  }
}

export default App;
