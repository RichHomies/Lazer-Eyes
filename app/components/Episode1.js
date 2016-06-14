import React from 'react';
import Scroll from 'react-scroll'; 

var scroll = Scroll.animateScroll;
var Element = Scroll.Element;
var scroller = Scroll.scroller;

var Episode1 = React.createClass({
  componentDidMount: function() {
    var that = this
    $(function() {

      scroller.scrollTo('episode1', {
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
    var songOneHandler = this.playSong('episode1/song1');
    var songTwoHandler = this.playSong('episode1/song2');
    var songThreeHandler = this.playSong('episode1/song3');
        
    return (
      <div name='episode1' id='episode1'>
        <img src="/img/Track-1.gif" id="scene-1" className="episodeImages trackImages" onClick={songOneHandler}/>
        <div className="episodeText" id="scene-1">
Sing muse, of the cunning hero, the wanderer, blown off course time and again, before he plundered

Cityopolis' heights... Was it the best of times, was it the worst of times? Was it the age of wisdom, the

age of foolishness? It was the epoch of belief, it was the epoch of incredulity, it was the season of light,

it was the season of darkness, for in the beginning, our hearts were formless and empty, and darkness

was upon the face of the deep. And then he said, "Let there be light..." and there was light. Lazer light.

Shining so bright. Lighting up the night, lending us the courage to fight for what is right.
        </div>
        <img src='/img/EP-1-image-1.jpg' className='episodeImages'/>
        <div className="episodeText">

            Who is he? Whose story is this? This is the story of you. This is the story of me. This is the story of your

            sister, your brother, your mother and your father, of your friend, and your enemy. It’s like that scene at

            the end of V for Vendetta, when all those people are wearing the Guy Fawkes masks, and they all take

            them off, and turns out it’s the people form the retirement home, and the bar, and that dead little girl,

            and the fat comedian guy, and Natalie Portman is saying "...he was my father. And my mother... my

            brother... my friend. He was you... and me. He was all of us," It's just like that, except not in the past

            tense, because our hero lives on, always, in our hearts, in our souls, in our words and our actions. Call

            him Lazer Eyes.
        
        </div>
        <img src="/img/Track-2.gif" className="episodeImages trackImages" onClick={songTwoHandler}/>
        <div className="episodeText" id="scene-2">
        
            Our story begins back before our hero was a hero, back when his eyes only saw and his courage lay

            dormant. In a place where joy, where aspiration, where kindness is no more than a half-remembered

            reverie, elusive and fleeting, evaporating like the mist that settles on the hills in the hours before dawn,

            as the miners wearily wander towards the tunnels to replace the night shift. Where is it? An Appalachian

            mining town. When is it? It could be today, or tomorrow, even yesterday - nothing ever changes here,

            except for the shifts of miners.
        
        </div>
        <img src='/img/EP-1-image-2.jpg' className='episodeImages'/>
        <div className="episodeText">
        
            It is here that we meet the sorrowful wretch in which lies our hero's heart, shuffling into the elevator,

            descending down the mine shaft, indistinguishable from the sullen souls he stands shoulder to shoulder

            with. The man to his right never made it home last night; woke up behind the bar and came straight

            back to the mine. The man to his left had dreams of building rockets, but his daddy got the black lung

            and he had to put his dreams on hold to pay the bills, because in this world, Obamacare isn't a thing and

            luck does not exist, and Jake Gyllenhaal will never play him in the movie of his life.
        
        </div>
        <img src='/img/EP-1-image-3.jpg' className='episodeImages'/>
        <div className="episodeText">
        
            At first, it seems to be just another day of desperation in the mines, "where the rain never falls, the sun

            never shines," another day spent bringing Johnny Cash's 1968 performance of "Dark as the Dungeon" at

            Folsom Prison to life, until suddenly, while chipping away at the tunnel walls, our protagonist breaks

            through to a cavernous cavern...
        
        </div>
        <img src='/img/EP-1-image-4.jpg' className='episodeImages'/>
        <div className="episodeText">
        
            The rocks are of a different hue, and seem to be vibrating ever so

            slightly. Supposing the mysterious material may be valuable, our anonymous excavator lifts up his pic-
            axe and brings it down forcefully against a nearby stalagmite. The force of the impact reverberates

            through his whole body - it is as if he hears all the sounds that ever were, and sees all the light that ever

            was all at once. At the time, he thinks nothing of it, and finishes his shift without any further incident,

            after all, carcinogen-inhalation-related-hallucinations are a daily occurrence in the mine, but the truth is

            far from ordinary, for neither he nor the world will ever be the same...
        
        </div>
        <img src='/img/EP-1-image-5.jpg' className='episodeImages'/>
        <img src='/img/EP-1-image-6.jpg' className='episodeImages'/>
        <div className="episodeText">
        
           Later that night, the weary miners have returned to the surface just in time to completely miss the sun.

           Gathered round the fire, they eat their meager meal of flavorless gruel in silence. Before long the silence

           is replaced with empty bowls and eager eyes, fixed on a single remaining portion of gruel....

           "Hey guys, I was wondering if I could maybe have the last serving of gruel... I had a really hard day in the

           mine today, hit some funky rock and I think it messed me up a bit," says our protagonist.

           "Pfff," rebukes one of his compatriots, "no, the gruel should be mine, I am clearly the most deserving of

           the gruel."

           "No," says another, "give ME the gruel!"

           "Come on guys, just show a little kindness,"

           "NEVER, GRUEL IS ALL I LIVE FOR!"

           Our hero's disappointment quickly gives way to rage. It is as if this final slight adds insult to the injury

           that has been his life. Just then he feels a feeling, one he has never felt before, a feeling in his heart

           going straight to his eyes. Rising to his feet with an instinctive sense of purpose, he lets out a mighty

           roar, and as it echoes through the Appalachian hills, he looks to the heavens and Lazer beams shoot

           from his eyes.
        
        </div>
        <img src="/img/Track-3.gif" className="episodeImages trackImages" onClick={songThreeHandler}/>
        <img src='/img/EP-1-image-7-50%25.gif' className='episodeImages'/>
        <div className="episodeText">
        
           Elated and exhausted, he lowers his gaze to see expressions of fear and horror on the faces of his

           stunned companions:

           "You're DIFFERENT!" They say,

           "We fear you, you and the awesome power you wield"

           "Leave! Leave, and never come back!"

           "Get out of here, Lazer Eyes!"

           Cast away, shunned, he wanders for days, weeks. Quiet whispers of a man named "Lazer Eyes" spread

           across the countryside. He no longer has a home, but now he has a name.
        
        </div>
        <img src='/img/EP-1-image-8.jpg' className='episodeImages'/>
        <div className="episodeText">
        
           Thus we find Lazer Eyes, and Lazer Eyes finds himself a stranger to his people, an isolated god amongst

           men who finds consolation only in the destructive power he wields. Wandering from place to place, he

           lives day to day. In the woods, he picks fights with owls, because, as everyone knows, Lazer Eyes hates

           owls. On the streets, when he stops and stares, things explode. What will become of him? Is there no

           one who will understand him? Does he even deserve to be understood? How will this menace become

           our messiah?
        
        </div>

      </div>
    );
  }
})


export default Episode1;



