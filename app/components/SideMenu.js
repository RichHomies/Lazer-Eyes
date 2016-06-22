import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import meta from './sideMenuJson';

var songs = meta.episodes[0]['episodesMeta']['songs']
var RadiumLink = Radium(Link);
var Menu = require('react-burger-menu').push;

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
          </div>
          <div className='menuListContainer'>
            <div className='episodesHeader sideMenuItems'>
              <RadiumLink onClick={this.isMenuOpen} to={'https://lazer-gift-shop.myshopify.com/'}>GIFT SHOP</RadiumLink>
            </div>
            <div className='episodesHeader sideMenuItems'>
              <RadiumLink onClick={this.isMenuOpen} to={'#footer'}>CREDITS</RadiumLink>
            </div>
            <div className='episodesHeader sideMenuItems'>EPISODES</div>
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
    var episodeName = <RadiumLink onClick={this.isMenuOpen} key={count++} className={'bm-item-list'} to={'/episodes/'+epiNameObj.title.toLowerCase()}>{epiNameObj.number + ': ' + epiNameObj.title}</RadiumLink>;
    
    episodeFragment.push(episodeName);
    epiSongsObj.forEach(function(song){
      episodeFragment.push(that.renderSong(song));
    });

    return episodeFragment;
  },
  renderSong: function(song){
    var playSongHander;
    for(var songModel in songs){
      if(songs[songModel].songTitle === song.songTitle){
        playSongHander = this.playSong(songs[songModel]['urlPath']);
        return <div onClick={playSongHander} className='songLink'>{song.number + '. ' + song.songTitle}</div>;
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