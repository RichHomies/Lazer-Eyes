import React from 'react';
import Episode1 from './Episode1';
import Episode2 from './Episode2';
import Episode3 from './Episode3';
import Episode4 from './Episode4';
import Episode5 from './Episode5';

var Episodes = React.createClass({
  render: function() {
    let renderedEpisode = this.renderEpisode();
    return (
      <main id='episodesContainer'>
        {renderedEpisode}
      </main>
    );
  },
  renderEpisode: function(){
    var route = this.props.params.episodeName.toLowerCase();
    var that = this;
    var component;

    switch(route){
      case 'genesis': 
        component = <Episode1 currentEpisode={that.props.currentEpisode } changeSong={that.props.changeSong}/>;
        break;
      case 'crazy stupid lazers':
        component = <Episode2 currentEpisode={that.props.currentEpisode } changeSong={that.props.changeSong}/>;
        break;
      case 'the empire strikes repeatedly':
        component = <Episode3 currentEpisode={that.props.currentEpisode } changeSong={that.props.changeSong}/>;
        break;
      case 'lazerus maximus':
        component = <Episode4 currentEpisode={that.props.currentEpisode } changeSong={that.props.changeSong}/>;
        break;
      case 'the day the earth stood still with lazers':
        component = <Episode5 currentEpisode={that.props.currentEpisode } changeSong={that.props.changeSong}/>;
        break;
      default:
        component = <img src={'/img/nick-young-confused-face.png'}/>
        break;
    }

    return component;
  }
});


export default Episodes;

