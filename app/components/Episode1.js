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
        <img src="/img/Track-1.jpg" id="scene-1" className="episodeImages"></img>
        <img src='/img/EP-1-image-1.jpg' className={'episodeImages'}/>
        <div className="episodeText">
          <p>Sing muse, of the cunning hero, the wanderer, blown off course time and again, before he plundered

Cityopolis' heights... Was it the best of times, was it the worst of times? Was it the age of wisdom, the

age of foolishness? It was the epoch of belief, it was the epoch of incredulity, it was the season of light,

it was the season of darkness, for in the beginning, our hearts were formless and empty, and darkness

was upon the face of the deep. And then he said, "Let there be light..." and there was light. Lazer light.

Shining so bright. Lighting up the night, lending us the courage to fight for what is right.</p>
        </div>
      </div>
    );
  }
})


export default Episode1;



