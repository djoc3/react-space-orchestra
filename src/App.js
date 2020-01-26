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
        <SpacePads />
        <div className="instructions">Click Icons to Play and Pause</div>
        <footer>&copy; {(new Date().getFullYear())} Dan O'Connor</footer>
      </div>
    );
  }
}

class SpacePads extends Component {
  render() {
    return (
      <div id="space-pads" className="container">
        <div className="row">
          <SpaceAudio 
            icon="fas fa-user-astronaut"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2F080_space-music-arpeggios.wav?v=1579826328159"
            type="audio/wav"/>
          <SpaceAudio 
            icon="fas fa-space-shuttle"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fpretty-tones-big-space.wav?v=1579825333307"
            type="audio/wav"/>
          <SpaceAudio 
            icon="fas fa-satellite"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2F105_scifi-spacetrucker.wav?v=1579826333884"
            type="audio/wav"/>
        </div> 
        <div className="row"> 
          <SpaceAudio 
            icon="fas fa-robot"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fabduction-in-alien-waters.wav?v=1579825416598"
            type="audio/wav"/>
          <SpaceAudio 
            icon="fas fa-pastafarianism"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fseizure-guitar-random-hammering.wav?v=1579825424077"
            type="audio/wav"/>
          <SpaceAudio 
            icon="fas fa-meteor"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fearth-lightning.mp3?v=1579825441590"
            type="audio/mpeg"/>
        </div>
        <div className="row">
          <SpaceAudio 
            icon="fas fa-satellite-dish"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fdescending-plaintive-synth.wav?v=1579825458400"
            type="audio/wav"/>
          <SpaceAudio 
            icon="fas fa-globe-asia"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fgliding-synth-intro.wav?v=1579825463466"
            type="audio/wav"/>
          <SpaceAudio 
            icon="fas fa-rocket"
            url="https://cdn.glitch.com/4e7dabcd-2531-4ebf-bee3-95f2c397572e%2Fflutter-by-echo-synth.wav?v=1579825467851"
            type="audio/wav"/>
        </div>
      </div>
    );
  }
}

class SpaceAudio extends React.Component {
  
  playSample(event) {
    let player = event.target.childNodes[0];
    !player.paused ? player.pause() : player.play();
    
    let background = '#FFFFFF';
    if (!player.paused) {
      let hue = Math.floor(Math.random() * 360);
      let pastel = 'hsl(' + hue + ', 100%, 80%)';
      background = pastel;
    }
    event.target.style.backgroundColor = background;
  };
  
  render() {
    return (
      <div className="col-m-4">
        <button 
          className={this.props.icon} 
          onClick={this.playSample}>
          <audio 
            src={this.props.url} 
            type={this.props.type}
            loop>
          </audio>
        </button>
      </div>
    );
  }
}

export default App;
