import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flashcards from './Flashcards';

const data = [
    {"name": "Hero", "description": "<p>Saves the <strong>day</strong></p>"},
    {"name": "Villain", "description": "Ruins the day"},
    {"name": "NPC", "description": "Says weird stuff"},
    {"name": "Darp", "description": "The quick brown fox jumps over the lazy dog."},
    {"name": "DeeeDerp", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dolor, congue et ornare eget, ornare quis orci. In ex nunc, efficitur in cursus in, hendrerit id quam. Quisque venenatis, purus luctus commodo molestie, quam quam tincidunt lectus, ac tincidunt orci ex et justo. Curabitur metus diam, interdum nec hendrerit sed, consectetur sit amet dolor. Donec elementum mauris id augue feugiat, quis mattis nisi mollis. Nullam posuere sapien mollis neque semper, vitae mattis magna semper."},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flashcards</h1>
        </header>
        <div className="App-intro">
            <Flashcards data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
