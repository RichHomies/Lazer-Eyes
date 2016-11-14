import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import meta from './sideMenuJson';

var songs = meta.episodes[0]['episodesMeta']['songs'].concat(meta.episodes[1]['episodesMeta']['songs']).concat(meta.episodes[2]['episodesMeta']['songs']);
var RadiumLink = Radium(Link);
var Menu = require('react-burger-menu').push;


//add later



var SideMenu = React.createClass({
  getInitialState : function(){
    return {
      isOpen : false
    }
  },
  isServer: function() {
   return ! (typeof window != 'undefined' && window.document);
  },
  render: function() {
    var episodes = this.props.episodes;
    var isMenuOpen = this.props.isMenuOpen;
    var that = this;
    var renderedEpisodes = this.renderedEpisodes();
    return (
      <div  >
        <Menu isOpen={this.state.isOpen} customBurgerIcon={ <img src="/img/LazerEyesLogo-trans.gif" /> } width={'50vw'} pageWrapId={ "app" }  >
          <div className='sideMenuItems'>
            <RadiumLink id="home" className="bm-item-list" to={'/'}><img className='lazerEyesMenuLogo' src="/img/LazerEyesLogo-header.gif" /></RadiumLink>
            <div className='episodesHeader sideMenuItems'>
              <RadiumLink onClick={this.isMenuOpen} to={'https://shop.lazersforeyes.com/'}>GIFT SHOP</RadiumLink>
            </div>
            <div className='episodesHeader sideMenuItems'>
              <RadiumLink onClick={this.isMenuOpen} to={'#footer'}>ABOUT</RadiumLink>
            </div>
          </div>
          <div className='menuListContainer'>
            <div className='sideMenuItems'>
              {renderedEpisodes}
            </div>
          </div>
        </Menu>
      </div>
    );
  },
  renderComponents : function(){

  },
  renderedEpisodes : function(){
    var metaEpisodes = meta.episodes;
    var that = this;
    return metaEpisodes.map(function(metaEpisode){
      return that.renderedEpisode(metaEpisode.episodesMeta);
    });
  },
  renderedEpisode: function(episode){
    var episodeFragment = [];
    var count = 0;
    var that = this;
    var epiNameObj = episode.episodeName;
    var epiSongsObj = episode.songs;
    var episodeName = <RadiumLink onClick={this.isMenuOpen} key={count++} className={'bm-item-listA'} to={'/episodes/'+epiNameObj.title.toLowerCase()}>{epiNameObj.title}</RadiumLink>;
    
    episodeFragment.push(episodeName);
    epiSongsObj.forEach(function(song){
      episodeFragment.push(that.renderSong(song));
    });

    return episodeFragment;
  },
  renderSong: function(song){
    var playSongHander;
    var currentlyPlayingSong = this.props.currentSong;
    var classStr;
    
    for(var songModel in songs){
      if(songs[songModel].songTitle === song.songTitle){
        playSongHander = this.playSong(songs[songModel]['urlPath']);
        
        if(songs[songModel]['urlPath'] === this.props.currentSong || songs[songModel]['songPath'] === this.props.currentSong){
          debugger;
          classStr = 'songLink currentlyPlayingSong'; 
        } else {
          classStr = 'songLink'
        }
        return <div onClick={playSongHander} className={classStr}>{song.number + '. ' + song.songTitle}</div>;
      }
    }
  },
  playSong: function(song){
    var that = this;
    return function(){
      that.props.changeSong(song);
    }
  },
  isMenuOpen : function(state){
    this.setState({isOpen: !isOpen});
  }
})

export default SideMenu;