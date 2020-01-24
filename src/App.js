import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header stars">
          <img src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2F359a7daa-13af-4e9b-a187-75ca74249217_200x200.png?v=1579886316258" 
            className="App-logo" 
            alt="logo" />
        </div>
        <DrumMachine />
      </div>
    );
  }
}

class DrumMachine extends Component {
  
  playSample(event) {
    event.target.childNodes[0].play();
  };
  
  render() {
    return (
      <div id="space-pads">
        <div className="row">
          <button className="fas fa-user-astronaut" id="0" onClick={this.playSample}>
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2F080_space-music-arpeggios.wav?v=1579826328159" 
              type="audio/wav"
              className="clip"
              title="Cosmix Arpeggio"
              loop>
            </audio>
          </button>
          <button className="fas fa-space-shuttle" id="1" onClick={this.playSample}>
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fpretty-tones-big-space.wav?v=1579825333307" 
              type="audio/wav"
              className="clip" 
              title="Big Space"
              loop>
            </audio>
          </button>
          <button className="fas fa-satellite" id="2" onClick={this.playSample}>
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2F105_scifi-spacetrucker.wav?v=1579826333884" 
              type="audio/wav"
              className="clip" 
              title="Universal Trucker"
              loop>
            </audio>
          </button>
        </div> 
        <div className="row"> 
          <button className="fas fa-meteor" id="3" onClick={this.playSample}>
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fabduction-in-alien-waters.wav?v=1579825416598" 
              type="audio/wav"
              className="clip" 
              title="Alien Waters"
              loop>
            </audio>
          </button>
          <button className="fas fa-pastafarianism" id="4" onClick={this.playSample}>
          <audio 
            src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fseizure-guitar-random-hammering.wav?v=1579825424077" 
            type="audio/wav"
            className="clip" 
            title="Random Planet"
            loop>
          </audio>
          </button>
          <button className="fas fa-satellite-dish" id="5" onClick={this.playSample}>
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fearth-lightning.mp3?v=1579825441590" 
              type="audio/mpeg"
              className="clip" 
              title="Earth Lighting"
              loop>
            </audio>
          </button>
        </div>
        <div className="row">
          <button className="fas fa-robot" id="6" onClick={this.playSample}>
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fdescending-plaintive-synth.wav?v=1579825458400" 
              type="audio/wav"
              className="clip" 
              title="Descending Star"
              loop>
            </audio>
          </button>
          <button className="fas fa-globe-asia" id="7" onClick={this.playSample}>
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fgliding-synth-intro.wav?v=1579825463466" 
              type="audio/wav"
              className="clip" 
              title="Gliding Asteroid"
              loop>
            </audio>
          </button>
          <button className="fas fa-rocket" id="8" onClick={this.playSample}>
            <audio 
              src="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fflutter-by-echo-synth.wav?v=1579825467851" 
              type="audio/wav"
              className="clip" title="Nebula Echo"
              loop>
            </audio>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
