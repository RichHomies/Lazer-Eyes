import React from 'react';
import Scroll from 'react-scroll'; 

var scroll = Scroll.animateScroll;
var Element = Scroll.Element;
var scroller = Scroll.scroller;

var Episode2 = React.createClass({
  componentDidMount: function() {
    var that = this
    $(function() {

      scroller.scrollTo('episode2', {
        duration: 1500,
        delay: 100,
        smooth: true,
      })

    });
  },
  playSong: function(song){
    var that = this;
    return function(){
      that.props.changeSong(song);
    }
  },
  render: function() {
    var songOneHandler = this.playSong('episode2/song1');
    var songTwoHandler = this.playSong('episode2/song2');
    var songThreeHandler = this.playSong('episode2/song3');
        
    return (
      <div name='episode2' id='episode2'>
        <img src="/img/track-4.gif" id="scene-1" className="episodeImages trackImages extraTopPadding" onClick={songOneHandler}/>
        <div className="episodeText" id="scene-1">
Days turn into weeks, weeks turned into months. Thickly wooded Appalachian hills turn into suburban streets 
and stripmalls, as Lazer Eyes wanders aimlessly. Yet these fairly predictable transformations are accompanied 
by another, more perplexing evolution. As the destructive wake he leaves in his path grows ever longer, one 
might expect the infamy of this yet-to-be-born-again-but-as-of-now-"anti"-hero to grow, from whispers, to shouts,
from shouts to mobs and torches and pitchforks, but instead, things begin to change with fewer and 
fewer people openly displaying their hatred for him (spitting etc.), replaced by a vacant stare and an obsession 
with all types of devices with any kind of display. As the streets grow quiet Lazer Eyes ventures further into Cityopolis to see what is going on...

        </div>
        <img src='/img/EP2-the-tower.jpg' className='episodeImages'/>
        <div className="episodeText">

            He passes hordes of people crowded around television sets in the windows of shops pushing and shoving each 
            other to get a better view, each murmuring something to the effect of, “like me,” or “don’t I look hot in this.” 
            Lazer Eyes pushes to the front of the crowd and a short oddly dressed man on the screen sitting behind a desk 
            addressing the audience. “I am the Reflektor,” the man on the screen states, “and I’m here to take control.” 
        
        </div>
        <img src='/img/EP2-the-reflektor.jpg' className='episodeImages'/>
        <div className="episodeText">

            Having had enough of being drooled on and being generally unable to make out any more of the video before 
            being overwhelmed by requests from people standing around him to like their profile pictures, Lazer Eyes quits 
            the scene to get to the bottom of these strange events.

        
        </div>

        <img src="/img/track-5.gif" className="episodeImages trackImages" onClick={songTwoHandler}/>
        <div className="episodeText" id="scene-2">
        
            With only one broadcast facility in Cityopolis, Lazer eyes knows exactly where to go: The Tower. As he draws 
            within sight of the main entrance, about a hundred people with varying forms of automatic and semiautomatic 
            weapons dressed in badly fitted storm trooper costumes are marching back and forth in front of the door. 
            Rather than expose his presence, he sneaks into a subway tunnel and enters the building through the station in 
            the sub-sub-sub-basement.

            {'\n\n'}
            Lazer Eyes rushes to the elevator bank and spies a map with a legend of all the departments and their 
            locations in the Tower. The Cityopolis TV station is on the second highest floor, below the Tower Radio facility,
             but the express elevator is busted. He gets on the next Up-going car and off at the highest floor it will take him 
             to. As the doors open on to the grand ballroom, Lazer Eyes sees what looks like a giant bird cage in the middle 
             of the dance floor with the word “chicks” painted elegantly on a sign on the top. There is a quiet sobbing coming 
             from that direction and he rushes to the cage to see if he can help...

        </div>
        <img src='/img/EP2-chicks-cage.jpg' className='episodeImages'/>
        <div className="episodeText">
        
            Suddenly the feeling of a ravenous pack of man eating butterflies trying to escape from his chest overwhelms
            his senses and Lazer Eyes feels weak at the knees. Before him sitting quietly in the cage minding her own 
            business is a girl, or rather a woman whom as soon as they make eye contact, Lazer Eyes knows is the one.
        
        </div>
        <img src='/img/EP2-eyes.jpg' className='episodeImages'/>
        <div className="episodeText">
        
            He wants her. He wants all of her, forever. Lazer Eyes and the Lazer Babe, every day. She immediately feels 
            this connection as she stares deep into his eyes, but Lazer Eyes looks away. Almost losing control of himself, 
            he can’t make sense of these emotions. Feelings that almost caused him to blast this woman whom he so 
            suddenly loves. Yet as he looks back into her eyes he is disarmed, filled with a sense of inner peace and tranquility.

        
        </div>
        <img src='/img/EP2-lazer-heart.gif' className='episodeImages'/>
        <img src="/img/track-6.gif" className="episodeImages trackImages" onClick={songThreeHandler}/>

        <div className="episodeText">
        
            Thus Lazer eyes meets the Lazer Babe, whom after she explains the Reflektor’s evil plans and they bond over 
            their suffering he frees from her cell and they begin to make their escape. Unluckily, the elevator they get on 
            going down, stops at the main floor and before Lazer Eyes can react, one of the disheveled minions hits the 
            alarm and locks the whole building down...

        </div>
        

      </div>
    );
  }
})


export default Episode2;



