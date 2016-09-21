import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import meta from './sideMenuJson';

var RadiumLink = Radium(Link);


var SideMenuEpisodes = React.createClass({
  getInitialState : function(){
    return {
      isOpen : false
    }
  },

  render: function() {
    var episodeMeta = this.props.episodesMeta;
    var classStr = this.props.className;
    var isMenuOpen = this.props.isMenuOpen;
    var renderedEpisodeComponent = this.renderedEpisode(episodeMeta);
    return ({renderedEpisodeComponent});
  },
  renderedEpisode : function(meta){
    var count = 0;
    var that = this;
    meta = meta.episodeName;
    return (<RadiumLink onClick={that.isMenuOpen} key={count++} className={'bm-item-list'} to={'/episodes/'+meta.title.toLowerCase()}>{meta.number + ': ' + meta.title}</RadiumLink>);
    
    // return meta.map(function(metaEpisode, key){
    //   if(key === 0){
    //   }

    //   // if(key === 1){
    //   //   return metaEpisode.map(function(song){
    //   //     return <div>{song.number + ' ' + song.songTitle}</div>;
    //   //   });
    //   // }
    // });

  },
  isMenuOpen : function(state){
    this.setState({isOpen: !isOpen});
  }
})

export default SideMenuEpisodes;

