import React from 'react';
import songs from './songs'

var AudioPlayer = React.createClass({
  getInitialState: function() {
    return {
      currentSongUrl: "",
      currentSongTitle: "",
      trackNumber: "",
      muted : false
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
      case 'sound':
        audioPlayer.muted = !!!audioPlayer.muted;
      default:
        this.setState({muted: audioPlayer.muted});
        break;


    }
  },
  setSound : function(){
    var soundBool = this.state.soundOn ? false : true;
    this.setState({soundOn: soundBool});
  },
  render: function() {
    var titleElem = null;
    var idString = 'hide';
    var playHandler = this.audioPlayerHandler.bind(null, 'play');
    var pauseHandler = this.audioPlayerHandler.bind(null, 'pause');
    var stopHandler = this.audioPlayerHandler.bind(null, 'stop');
    var toggleSoundHandler = this.audioPlayerHandler.bind(null, 'sound');

    if(this.state.currentSongUrl){
      var title = this.state.currentSongTitle;
      var trackNumber = this.state.trackNumber;
      var trackNumberElem = (<span className='songTrackNumber' >{trackNumber}</span>);
      var titleElem = (<span className='songtitle' >{title}</span>);
      var soundOnOff = this.state.muted ? '/icons/sound-off.png' : '/icons/sound-on.png';
      idString = 'audioPlayer';
    }

    return (
      <div id={idString}>
        <span className='songTrackNumberContainer flexCenterAlign'>{trackNumberElem}</span>
        <span className='songTitleContainer flexCenterAlign'>
          <span className='titleElem'>{titleElem}</span>
          <span className='playerElemsContainer'>
            <span className='playerElems' onClick={playHandler}><img className='playerIcons' src='/icons/play.png'/></span>
            <span className='playerElems' onClick={pauseHandler}><img className='playerIcons' src='/icons/pause.png'/></span>
            <span className='playerElems'onClick={toggleSoundHandler} ><img className='playerIcons' src={soundOnOff}/></span>
          </span>
        </span>
        <audio id='player' src={this.state.currentSongUrl} controls></audio>
      </div>
    );
  }
})

export default AudioPlayer;
