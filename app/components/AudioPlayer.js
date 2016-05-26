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
  componentWillReceiveProps: function(nextProps) {
    var songUrl = songs[nextProps["currentEpisode"]] ? songs[nextProps["currentEpisode"]]["songPath"] : '';
    var songTitle = songs[nextProps["currentEpisode"]]? songs[nextProps["currentEpisode"]]["songTitle"] : '';
    var trackNumber = songs[nextProps["currentEpisode"]]? songs[nextProps["currentEpisode"]]["trackNumber"] : '';

    if (songUrl && songTitle && trackNumber) {
      this.setState({currentSongUrl: songUrl, currentSongTitle: songTitle, trackNumber: trackNumber})
    }
  },
  playNewSong: function() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
  },
  audioPlayerHandler: function(action){
    var audioPlayer = document.getElementById('player');

    switch(action){
      case 'play':
        audioPlayer.play();
        break;
      case 'pause': 
        audioPlayer.pause();
        break;
      case 'stop':
        audioPlayer.stop();
        break;
      default:
        break;
    }
  },
  render: function() {
    var titleElem = null;
    var idString = 'hide';
    var playHandler = this.audioPlayerHandler.bind(null, 'play');
    var pauseHandler = this.audioPlayerHandler.bind(null, 'pause');
    var stopHandler = this.audioPlayerHandler.bind(null, 'stop');

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
        <span className='songTitleContainer'>
          <span className='titleElem'>{titleElem}</span>
          <span className='playerElemsContainer'>
            <span className='playerElems' onClick={playHandler}>Play</span>
            <span className='playerElems' onClick={pauseHandler}>Pause</span>
            <span className='playerElems'onClick={stopHandler} >Stop</span>
          </span>
        </span>
        <audio id='player' src={this.state.currentSongUrl} controls></audio>
      </div>
    );
  }
})

export default AudioPlayer;
