import React from 'react';
import songs from './songs'

var AudioPlayer = React.createClass({
  getInitialState: function() {
    return {
      currentSongUrl: "",
      currentSongTitle: ""
    }
  },
  componentWillMount: function() {
    var firstSong = "/audio/1. Dream A Dream of Lazers.m4a"

  },
  componentWillReceiveProps: function(nextProps) {
    var songUrl = songs[nextProps["currentEpisode"]] ? songs[nextProps["currentEpisode"]]["songPath"] : '';
    var songTitle = songs[nextProps["currentEpisode"]]? songs[nextProps["currentEpisode"]]["songTitle"] : '';
    if (songUrl && songTitle) {
      this.setState({currentSongUrl: songUrl, currentSongTitle: songTitle})
    }
  },
  playNewSong: function() {
    var audioPlayer = document.getElementById('audioPlayer')
    audioPlayer.play();
  },
  render: function() {
    var titleElem = null;
    if(this.state.currentSongUrl){
      var title = this.state.currentSongTitle;
      var titleElem = (<span className='songtitle' >{title}</span>);
    }

    return (
      <div id="audioPlayer">
      <audio className="audioPlayer" src={this.state.currentSongUrl} controls></audio>
      <div>{titleElem}</div>
      </div>
    );
  }
})

export default AudioPlayer;
