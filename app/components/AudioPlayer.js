import React from 'react';
import songs from './songs'

var AudioPlayer = React.createClass({
  getInitialState: function() {
    return {
      currentSongUrl: "",
      currentSongTitle: "",
      trackNumber: ""
    }
  },
  componentWillMount: function() {
  },
  componentWillReceiveProps: function(nextProps) {
    var songUrl = songs[nextProps["currentEpisode"]] ? songs[nextProps["currentEpisode"]]["songPath"] : '';
    var songTitle = songs[nextProps["currentEpisode"]]? songs[nextProps["currentEpisode"]]["songTitle"] : '';
    var trackNumber = songs[nextProps["currentEpisode"]]? songs[nextProps["currentEpisode"]]["trackNumber"] : '';

    if (songUrl && songTitle && trackNumber) {
      this.setState({currentSongUrl: songUrl, currentSongTitle: songTitle, trackNumber: trackNumber})
    }
  },
  playNewSong: function() {
    var audioPlayer = document.getElementById('audioPlayer')
    audioPlayer.play();
  },
  render: function() {
    var titleElem = null;
    var idString = 'hide';
    if(this.state.currentSongUrl){
      var title = this.state.currentSongTitle;
      var trackNumber = this.state.trackNumber;
      var trackNumberElem = (<span className='songTrackNumber' >{trackNumber}</span>);
      var titleElem = (<span className='songtitle' >{title}</span>);
      idString = 'audioPlayer';
    }

    return (
      <div id={idString}>
        <span className='songTrackNumberContainer'>{trackNumberElem}</span>
        <span className='songTitleContainer'>{titleElem}</span>
        <audio id='player' src={this.state.currentSongUrl} controls></audio>
      </div>
    );
  }
})

export default AudioPlayer;
