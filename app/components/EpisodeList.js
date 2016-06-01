import React from 'react';

var EpisodeList = React.createClass({
  render: function() {
    var episodes = this.props.list;
    var episodeListComponents = episodes.map(function(episode, index){
      var classStr = index % 2 === 0 ? 'backgroundPink' : 'backgroundPurple';
      return <span key={index} className={'episodeListItem ' + classStr}>{index + 1 + '. ' + episode.name}</span>
    });
    return (
      <div className='episodeListContainer'>
          {episodeListComponents}
      </div>
    );
  }
})

export default EpisodeList;
