import React from 'react';
import episodeOne from './assets/episode1img';

var Episode1 = React.createClass({
  componentDidMount: function() {
    var that = this
    $(function() {
      
      var scrollMagicController = new ScrollMagic.Controller();
      
      var scene1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1',
        offset: 50
      })
      .on('start', function() {
        //change window hash
        window.location.hash = "episode1"
        //set state
        that.props.changeEpisode(window.location.hash)
      })
      .addTo(scrollMagicController);
    });
  },
  render: function() {
    return (
      <div id='episode1'>
            <div id="scene-1">
              <img src={episodeOne} className={'episodeImages'}/>
            </div>
      </div>
    );
  }
})


export default Episode1;



