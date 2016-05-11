import React from 'react';

var Episode1 = React.createClass({
  componentDidMount: function() {
    $(function() {
      
      var scrollMagicController = new ScrollMagic.Controller();
      
      var tween1 = TweenMax.to('#animation-1', 0.3, {
        backgroundColor: 'rgb(255, 39, 46)',
        scale: 10,
        rotation: 360
      });
      var scene1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1',
        offset: 50
      })
      .setClassToggle('body', 'scene-1-active')
      .setTween(tween1)
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
      
    });
  },
  render: function() {
    return (
      <main><div className="container">
        <div className="row">         
          <div className="col-md-6 col-md-offset-3">
            <div className="wrap" id="scene-1">  
              <h2>Magic Happens Here</h2>
              <div className="animation" id="animation-1"><i className="fa fa-heart"></i></div>
            </div>
          </div>
          
        </div>
        
        
          <div className="row">
          
          <div className="col-md-6 col-md-offset-3">
            <div className="wrap" id="scene-2">  
              <h2>Magic Happens Here</h2>
              <div className="animation" id="animation-2"><i className="fa fa-heart"></i></div>
            </div>
          </div>
          
        </div>
        
          <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="wrap" id="scene-3">  
              <h2>Magic Happens Here</h2>
              <div className="animation" id="animation-3"><i className="fa fa-heart"></i></div>
            </div>
          </div>
        </div>
      </div></main>

    );
  }
})


export default Episode1;



