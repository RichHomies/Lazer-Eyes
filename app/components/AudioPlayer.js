import React from 'react';
import songs from './songs'

var AudioPlayer = React.createClass({
  getInitialState: function() {
    return {
      currentSong: ""
    }
  },
  componentWillMount: function() {
    var firstSong = "/audio/1. Dream A Dream of Lazers.wav"

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
    return (
      <audio className="audioPlayer" id="audioPlayer" src={this.state.currentSong} autoPlay controls>
      </audio>
    );
  }
})

export default AudioPlayer;
