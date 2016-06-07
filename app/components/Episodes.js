import React from 'react';
import Episode1 from './Episode1';


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
        component = <Episode1 currentEpisode={that.props.currentEpisode } changeEpisode={that.props.changeEpisode}/>;
        break;
      default:
        component = <img src={'/img/nick-young-confused-face.png'}/>
        break;
    }

    return component;
  }
});


export default Episodes;

