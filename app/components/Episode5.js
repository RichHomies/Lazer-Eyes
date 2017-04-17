import React from 'react';
import Scroll from 'react-scroll'; 
import Radium from 'radium';

var scroll = Scroll.animateScroll;
var Element = Scroll.Element;
var scroller = Scroll.scroller;

var Episode5 = React.createClass({
  componentDidMount: function() {
    var that = this
    $(function() {

      scroller.scrollTo('start', {
        duration: 1500,
        delay: 100,
        smooth: true,
      })
      that.playSong('episode5/song1')();
    });
  },
  playSong: function(song){
    console.log('song', song)
    var that = this;
    return function(){
      that.props.changeSong(song);
    }
  },
  render: function() {
    var songOneHandler = this.playSong('episode5/song1');
    var songTwoHandler = this.playSong('episode5/song2');
    var songThreeHandler = this.playSong('episode5/song3');
    var songFourHandler = this.playSong('episode5/song4');

    return (
      <div name='episode5' id='episode5'>
        <img src='/img/LazerEyes-Titles-14.gif' className="episodeImages trackImages extraTopPadding" onClick={songOneHandler}/>
        <div className="episodeText" id="start">
          Lazer Eyes sets out for Cityopolis with a new found hope. His steps become leaps and soon with huge lazer propelled bursts, he is flying miles at a time heading straight for the Tower where his nemesis awaits. As he approaches the city, he looks down from the skies and sees the huddled masses of brainwashed citizens crowding around the few bars that have TV’s, so full that the bodies pour out into the streets. People are trampled trying to crawl over each other like ants in order to be able to see the screens.
          {'\n\n'} 
          With almost no delay whatsoever, Lazer Eyes arrives at the base of the Tower and heads directly to the main entrance. “Guards, Attack!” An evil voice shouts down from all directions. Just then, the Reflektor’s minion team jumps out from hiding and surrounds Lazer Eyes. “You’ve come to set the people free, but first you have to get through me!” The leader says. “And me, and me, and me!” the rest of the squad echoes one by one. “You face the whole Reflektor team. Get at me with your Lazer beam-”
          {'\n\n'} 
          Before Mr. Minion Boss can continue, a massive wave of light blasts through him leaving nothing but a pair of smoldering shoes. The rest of the squad stands frozen in terror. Lazer Eyes jabs his head forward stomping his foot and shouts, “Boom!” and the Reflektor squad scatters in all directions. 
          {'\n\n'} 
          Lazer Eyes gets in the express elevator that heads directly to the Tower Radio control room on the top floor. He can feel the Reflektor waiting for him, but this time he knows what he has to do. As soon as the door of the elevator opens, Lazer Eyes steps out into a room covered in mirrors. Listening to his heart, guided by the mystical power... the power of light, is the power from love… shining so bright…. As if from… above….
        </div>
        <img src='/img/LazerEyes-Titles-15.gif' className="episodeImages trackImages extraTopPadding" onClick={songTwoHandler}/>
        <div className="episodeText">
          “Haha. Not so clever now Lazer Man, Looks like you still don’t get it. I am your weakness. I am everyone's weakness… You need me to protect you, and if you fight back you’ll just hurt yourself more. I am the Reflektor give in to my control! You’re going to lose, bigly!”

        </div>
        <img src='/img/lazereyes_working_pg1.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg2.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg3.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg4.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg5.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg6.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg7.gif' className='episodeImages'/>


        <div className="episodeText">
        Lazer Eyes swells with energy. He closes his eyes, remembering his journey, his time with William in training, his family down in Appalachia, the citizens of Cityopolis all relying on him to deliver them from this twisted hateful maniac.
        {'\n\n'}
        For a split second, time seems to stand still to Lazer Eyes, he sees the fear in the Reflektor’s eyes, and in this moment he understands him, he pities him. But not for long. 
        
        </div>
        <img src='/img/lazereyes_working_pg8.gif' className='episodeImages'/>

        <div className="episodeText" id="scene-2">
        Lazer Eyes unleashes his most mighty of lazer beams, blasting through every last one of the Reflektor’s screens. The beam continued on, so powerful that it bent the Reflekor’s face into what looked like the World’s Largest Disco Ball™...
        {'\n\n'}
        Then with a huge crash, the Reflektor fell to the ground.

        </div>
        <img src='/img/lazereyes_working_pg9.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg10.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg11.gif' className='episodeImages'/>

        <div className="episodeText">
        Lazer Eyes wasted no time. He hurried quickly passed the Reflektor’s immobile body, to where his true love, Lazer Babe sat, suspended in a hanging mirrored cage. With a swift beam of lazers, he shattered the cage, and caught her in his arms. They did in fact kiss while the camera swirled around them in circles of steadily increasing rapidly, and live happily ever after. But before all that, Lazer Babe knowingly instructed Lazer Eyes as to what he must do next.
        
        </div>
        <img src='/img/lazereyes_working_pg12.gif' className='episodeImages'/>
        <img src='/img/lazereyes_working_pg13.gif' className='episodeImages'/>

        <div className="episodeText">
        
        After hoisting the limp, shattered, yet still entirely reflective body of the Reflektor to the top of the tower, Lazer Eyes leapt to the base of the tower, and turning his gaze skyward, he unleashed a lazer beam of such glory, transforming the Reflektor into the World’s Largest Disco Ball™. Beams of lazer glory reflected off the reflector-turned-disco-ball atop the tower, bouncing off the atmosphere, and circling the globe, freeing us, freeing us all, as they struck the eyes of each and every one of the world’s people. 

        
        </div>
        <img src='/img/lazereyes_working_pg14-flat.gif' className='episodeImages'/>


        <div className="episodeText">
        
              And so it was that the Lazer Beam of Destiny shined so, so bright.


        </div>
        <img src="/img/LazerEyes-Titles-16.gif" className="episodeImages trackImages" onClick={songThreeHandler}/>
        <img src="/img/LazerEyes-Titles-17.gif" className="episodeImages trackImages" onClick={songFourHandler}/>


      </div>
    );
  }
})


export default Episode5;



