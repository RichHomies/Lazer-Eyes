import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import meta from './sideMenuJson';


var RadiumLink = Radium(Link);
var Menu = require('react-burger-menu').push;

var SideMenuEpisodes = React.createClass({
  getInitialState : function(){
    return {
      isOpen : false
    }
  },

  render: function() {
    var episodeMeta = this.props.episodeMeta;
    var classStr = this.props.episodeMeta.className;
    var isMenuOpen = this.props.isMenuOpen;
    var renderedEpisodeComponent = this.renderedEpisode(episodeMeta);

    return (null);
  },
  renderedEpisode : function(meta){
    var count = 0;
    meta.map(function(metaEpisode, key){
      if(key === 'episodeName'){
        return <RadiumLink onClick={that.isMenuOpen} key={count++} className={'bm-item-list'} to={'/episodes/'+metaEpisode.title.toLowerCase()}>{metaEpisode.number + ': ' + metaEpisode.title}</RadiumLink>;
      };
      if(key === 'songs'){
        return metaEpisode.map(function(song){
          return <div>{song.number + ' ' + song.songTitle}</div>;
        });
      }
    });
  },
  isMenuOpen : function(state){
    this.setState({isOpen: !isOpen});
  }
})

export default SideMenuEpisodes;

