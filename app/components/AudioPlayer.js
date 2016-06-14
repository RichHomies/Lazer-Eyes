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
    var songUrl = songs[nextProps["currentSong"]] ? songs[nextProps["currentSong"]]["songPath"] : '';
    var songTitle = songs[nextProps["currentSong"]]? songs[nextProps["currentSong"]]["songTitle"] : '';
    var trackNumber = songs[nextProps["currentSong"]]? songs[nextProps["currentSong"]]["trackNumber"] : '';

    if (songUrl && songTitle && trackNumber) {
      this.setState({currentSongUrl: songUrl, currentSongTitle: songTitle, trackNumber: trackNumber, isPlaying: true})
    }
  },
  audioPlayerHandler: function(action){
    var audioPlayer = document.getElementById('player');
    var that = this;

    switch(action){
      case 'play':
        audioPlayer.play();
        that.setState({isPlaying: true});
        break;
      case 'pause': 
        audioPlayer.pause();
        that.setState({isPlaying: false});
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
  isServer: function() {
   return ! (typeof window != 'undefined' && window.document);
  },
  isPlaying : function(audelem) { 
    var audioPlayer;
    if(this.isServer()){
      return false;
    } else {
      audioPlayer = document.getElementById('player');
      return !audioPlayer.paused; 
    }
  },
  render: function() {
    var titleElem = null;
    var idString = 'hide';
    var playHandler = this.audioPlayerHandler.bind(null, 'play');
    var pauseHandler = this.audioPlayerHandler.bind(null, 'pause');
    var stopHandler = this.audioPlayerHandler.bind(null, 'stop');
    var toggleSoundHandler = this.audioPlayerHandler.bind(null, 'sound');
    var pauseComponent = <span className='playerElems' onClick={pauseHandler}><img className='playerIcons' src={"/icons/pause.png"}/></span>;
    var playComponent = <span className='playerElems' onClick={playHandler}><img className='playerIcons' src={"/icons/play.png"}/></span>;

    if(this.state.currentSongUrl){
      var isPlaying = this.state.isPlaying;
      var playPauseComponent = isPlaying ? pauseComponent : playComponent;
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
            {playPauseComponent}
            <span className='playerElems'onClick={toggleSoundHandler} ><img className='playerIcons' src={soundOnOff}/></span>
          </span>
        </span>
        <audio id='player' src={this.state.currentSongUrl} autoPlay controls></audio>
      </div>
    );
  }
})

export default AudioPlayer;
