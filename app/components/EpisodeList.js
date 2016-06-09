import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
var RadiumLink = Radium(Link);

var EpisodeList = React.createClass({
  render: function() {
    var episodes = this.props.list;
    var episodeListComponents = episodes.map(function(episode, index){
      var classStr = index % 2 === 0 ? 'backgroundPink' : 'backgroundPurple';
      return <RadiumLink key={index} to={'/episodes/'+episode.name.toLowerCase()}><span className={'episodeListItem ' + classStr}>{index + 1 + '. ' + episode.name}</span></RadiumLink>
    });
    return (
      <div className='episodeListContainer'>
          {episodeListComponents}
      </div>
    );
  }
})

export default EpisodeList;
