import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
var RadiumLink = Radium(Link);

var EpisodeList = React.createClass({
  render: function() {
    var episodes = this.props.list;
    var episodeListComponents = episodes.map(function(episode, index){
    console.log('epi', episode);
      var classStr = index % 2 === 0 ? 'backgroundPink' : 'backgroundPurple';
      return <RadiumLink key={index} to={episode.path.toLowerCase()}><span className={'episodeListItem ' + classStr}>{index + 1 + '. ' + episode.title}</span></RadiumLink>
    });
    return (
      <div className='episodeListContainer'>
          {episodeListComponents}
      </div>
    );
  }
})

export default EpisodeList;
