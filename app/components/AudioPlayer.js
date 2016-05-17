import React from 'react';
import songs from './songs'

var AudioPlayer = React.createClass({
  getInitialState: function() {
    return {
      currentSong: ""
    }
  },
  componentWillMount: function() {
    var firstSong = "/audio/1. Dream A Dream of Lazers.m4a"

  },
  componentWillReceiveProps: function(nextProps) {
    console.log('in audio player', nextProps)
    var songUrl = songs[nextProps["currentEpisode"]]
    console.log('songurl', songUrl)
    if (songUrl) {
      this.setState({currentSong: songUrl})
    }
  },
  playNewSong: function() {
    var audioPlayer = document.getElementById('audioPlayer')
    audioPlayer.play();
  },
  render: function() {
    var titleElem = null;
    if(this.state.currentSong){
      var title = 'Currently Playing - Episode 1: Dream A Dream of Lazers';
      var titleElem = (<span className='songtitle' >{title}</span>);
    }

    return (
      <div id="audioPlayer">
      <audio className="audioPlayer" src={this.state.currentSong} autoPlay controls></audio>
      {titleElem}
      </div>
    );
  }
})

export default AudioPlayer;
