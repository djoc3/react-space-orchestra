import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DrumMachine />
      </div>
    );
  }
}

class DrumMachine extends Component {
  
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    document.getElementById(event.key.toUpperCase()).play();
    var textnode = document.createTextNode(event.target.childNodes[1].title);
    document.getElementById("display").appendChild(textnode);
  };
  
  playSample(event) {
    event.target.childNodes[1].play();
    var textnode = document.createTextNode(event.target.childNodes[1].title);
    document.getElementById("display").appendChild(textnode);
  };
  
  render() {
    return (
      <div id="drum-machine" onKeyPress={this.handleKeyPress}>
        <div id="display">
          <button className="drum-pad" id="0" onClick={this.playSample}>Q
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2F080_space-music-arpeggios.wav?v=1579826328159" 
              type="audio/wav"
              className="clip"
              title="Cosmix Arpeggio"
              id="Q">
            </audio>
          </button>
          <button className="drum-pad" id="1" onClick={this.playSample}>W
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fpretty-tones-big-space.wav?v=1579825333307" 
              type="audio/wav"
              className="clip" 
              title="Big Space"
              id="W">
            </audio>
          </button>
          <button className="drum-pad" id="2" onClick={this.playSample}>E
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2F105_scifi-spacetrucker.wav?v=1579826333884" 
              type="audio/wav"
              className="clip" 
              title="Universal Trucker"
              id="E">
            </audio>
          </button>
          <button className="drum-pad" id="3" onClick={this.playSample}>A
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fabduction-in-alien-waters.wav?v=1579825416598" 
              type="audio/wav"
              className="clip" 
              title="Alien Waters"
              id="A">
            </audio>
          </button>
          <button className="drum-pad" id="4" onClick={this.playSample}>S
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fseizure-guitar-random-hammering.wav?v=1579825424077" 
              type="audio/wav"
              className="clip" 
              title="Random Planet"
              id="S">
            </audio>
          </button>
          <button className="drum-pad" id="5" onClick={this.playSample}>D
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fearth-lightning.mp3?v=1579825441590" 
              type="audio/mpeg"
              className="clip" 
              title="Earth Lighting"
              id="D">
            </audio>
          </button>
          <button className="drum-pad" id="6" onClick={this.playSample}>Z
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fdescending-plaintive-synth.wav?v=1579825458400" 
              type="audio/wav"
              className="clip" 
              title="Descending Star"
              id="Z">
            </audio>
          </button>
          <button className="drum-pad" id="7" onClick={this.playSample}>X
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fgliding-synth-intro.wav?v=1579825463466" 
              type="audio/wav"
              className="clip" 
              title="Gliding Asteroid"
              id="X">
            </audio>
          </button>
          <button className="drum-pad" id="8" onClick={this.playSample}>C
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fflutter-by-echo-synth.wav?v=1579825467851" 
              type="audio/wav"
              className="clip" title="Nebula Echo"
              id="C">
            </audio>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
