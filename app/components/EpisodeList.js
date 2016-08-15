import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
var RadiumLink = Radium(Link);

var romanNums = ['I', 'II', 'III', 'IV', 'V', 'VI']

var EpisodeList = React.createClass({
  render: function() {
    var episodes = this.props.list;
    var episodeListComponents = episodes.map(function(episode, index){
      var classStr = index % 2 === 0 ? 'genesis' : 'crazystupidlazers';
      return <RadiumLink key={index} to={episode.path.toLowerCase()}><span className={'episodeButton episodeListItem ' + classStr}>{romanNums[index] + '. ' + episode.title}</span></RadiumLink>
    });
    return (
      <div>
        <div className='episodeListContainer'>
            {episodeListComponents}
        </div>
      </div>
    );
  }
})

export default EpisodeList;
