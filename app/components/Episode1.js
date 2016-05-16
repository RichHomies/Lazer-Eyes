import React from 'react';
import episodeOne from './episode1img';

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
      
        // Create Animation for 0.5s
      var tween2 = TweenMax.to('#animation-2', 0.3, {
        backgroundColor: 'rgb(0, 255, 187)',
        scale: 10,
        rotation: 360
      });
      
      var scene2 = new ScrollMagic.Scene({
        triggerElement: '#scene-2',
            offset: 50
      })
      .setClassToggle('body', 'scene-2-active')
      .setTween(tween2)
      .addTo(scrollMagicController);

          // Create Animation for 0.5s
      var tween3 = TweenMax.to('#animation-3', 0.3, {
        backgroundColor: 'rgb(17, 0, 98)',
        scale: 10,
        rotation: 360
      });
      
      var scene3 = new ScrollMagic.Scene({
        triggerElement: '#scene-3',
            offset: 50
      })
      .setClassToggle('body', 'scene-3-active')
      .setTween(tween3)
      .addTo(scrollMagicController);
      // Add debug indicators fixed on right side
      scene1.addIndicators();
    });
  },
  render: function() {
    return (
      <div id='episode1'>
            <div id="scene-1">
              <img src={episodeOne}/>
            </div>
      </div>
    );
  }
})


export default Episode1;



