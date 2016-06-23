import React from 'react';
import meta from './sideMenuJson';
var songs = meta.episodes[0]['episodesMeta']['songs']

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
    var songUrl,
        songTitle,
        trackNumber;

    var counter = 0
    var max = songs.length - 1
    var flag = false
    songs.forEach(function(song, i) {
      if (nextProps["currentSong"] === song.urlPath) {
        console.log('yay', song)
        songUrl = song['songPath']
        songTitle = song['songTitle']
        trackNumber = song['number']
        flag = true
      }
      if (flag === false && counter === max) {
        songUrl = ''
        songTitle = ''
        trackNumber = ''
      }

    })
    var that = this;
    if (songUrl && songTitle && trackNumber) {
      that.setState({currentSongUrl: songUrl, currentSongTitle: songTitle, trackNumber: trackNumber, isPlaying: true})
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
        break;
      case 'rewind':
        //should start the song over if at least a couple of seconds in
        if (audioPlayer.currentTime >= 5.0) {
          audioPlayer.pause()
          audioPlayer.currentTime = 0;
          audioPlayer.play()
        } else {
          var currentTrackNum = parseInt(this.state.trackNumber);
          var previousTrackNum = currentTrackNum - 1;
          if (currentTrackNum === 1) {
            audioPlayer.currentTime = 0;
          } else {
            var that = this
            console.log(songs)
            songs.forEach(function(song, i) {
              if (song.number === previousTrackNum) {
                that.setState({currentSongUrl: song.songPath, currentSongTitle: song.songTitle, trackNumber: previousTrackNum.toString()});
              }
            })
          }
        }
        break;
        //if not, change state to previous songs
        //if first song, just rewind it
      case 'skip':
        //should go to next song
        var currentTrackNum = parseInt(this.state.trackNumber);
        if (currentTrackNum === songs.length) {
          audioPlayer.stop();
        } else {
          var nextTrackNum = currentTrackNum + 1
          var that = this
          songs.forEach(function(song, i) {
            if (song.number === nextTrackNum) {
              that.setState({currentSongUrl: song.songPath, currentSongTitle: song.songTitle, trackNumber: nextTrackNum.toString()});
            }
          })
        }

        //if last song, stop playing
        default:
        that.setState({muted: audioPlayer.muted});
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
  isPlaying : function() { 
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
    var playHandler = this.audioPlayerHandler.bind(this, 'play');
    var pauseHandler = this.audioPlayerHandler.bind(this, 'pause');
    var stopHandler = this.audioPlayerHandler.bind(this, 'stop');
    var toggleSoundHandler = this.audioPlayerHandler.bind(this, 'sound');
    var rewindHandler = this.audioPlayerHandler.bind(this, 'rewind');
    var skipHandler = this.audioPlayerHandler.bind(this, 'skip');

    var pauseComponent = <span className='playerElems' onClick={pauseHandler}><img className='playerIcons' src={"/icons/pause.png"}/></span>;
    var playComponent = <span className='playerElems' onClick={playHandler}><img className='playerIcons' src={"/icons/play.png"}/></span>;
    var rewindComponent = <span className='playerElems' onClick={rewindHandler}><img className='playerIcons rewindIcon' src={"/icons/previous.png"}/></span>;
    var skipComponent = <span className='playerElems' onClick={skipHandler}><img className='playerIcons skipIcon' src={"/icons/next.png"}/></span>;

    if(this.state.trackNumber){
      var isPlaying = this.state.isPlaying;
      var playPauseComponent = isPlaying ? pauseComponent : playComponent;
      var title = this.state.currentSongTitle;
      var trackNumber = this.state.trackNumber;
      var trackNumberElem = (<span className='songTrackNumber' >{trackNumber}</span>);
      var titleElem = (<span className='songtitle' >{title}</span>);
      var soundOnOff = this.state.muted ? '/icons/sound-off.png' : '/icons/sound.png';
      idString = 'audioPlayer';
    }

    return (
      <div id={idString}>
        <span className='songTrackNumberContainer flexCenterAlign'>
          {rewindComponent}
          {trackNumberElem}
          {skipComponent}
        </span>
        <span className='songTitleContainer flexCenterAlign'>
          <span className='seekElem' style={this.state.seekElemStyle}></span>
          <span id='titleElem' className='titleElem'>{titleElem}</span>
          <span className='playerElemsContainer'>
            {playPauseComponent}
            <span className='playerElems' onClick={toggleSoundHandler} ><img className='playerIcons' src={soundOnOff}/></span>
          </span>
        </span>
        <audio id='player' src={this.state.currentSongUrl} onEnded={this.trackStopHandler} onTimeUpdate={this.seekElemHandler} ></audio>
      </div>
    );
  },
  componentDidUpdate : function(prevProps, prevState){
    if(prevState.currentSongUrl !== this.state.currentSongUrl){
      this.audioPlayerHandler('play');
    }
  },
  trackStopHandler : function(){
    this.setState({isPlaying: false});
  },
  seekElemHandler : function(e){
    var max = 90;
    var audioPlayer = document.getElementById('player');
    var songlengthInSeconds = audioPlayer.seekable.end(0);
    var secondsPlayed = audioPlayer.currentTime;
    var percentageOfSongElapsed = secondsPlayed / songlengthInSeconds;
    var mappedWidth = max * percentageOfSongElapsed;
    var width = mappedWidth + 'vw';
    this.setState({
      seekElemStyle : {
        width : width
      }
    })
  },
  getXPosition : function(el) {
    return el.clientX - el.target.offsetLeft;
  },
  seekClickHandler : function(e){
    var audioPlayer = document.getElementById('player');
    var titleElem = document.getElementById('titleElem');
    var titleElemWidth = titleElem.offsetWidth;
    var xPosition = this.getXPosition(e);
    var xPositionPercentage = xPosition/titleElemWidth;
    //need to check with out of bounds error
    var songlengthInSeconds = audioPlayer.seekable.end(0);
    console.log('xposition', xPosition);
    console.log('width', titleElemWidth);
    audioPlayer.currentTime = xPositionPercentage * songlengthInSeconds;
  }
})

export default AudioPlayer;
