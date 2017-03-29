import React from 'react';
import Scroll from 'react-scroll'; 

var scroll = Scroll.animateScroll;
var Element = Scroll.Element;
var scroller = Scroll.scroller;

var Episode4 = React.createClass({
  componentDidMount: function() {
    var that = this
    $(function() {

      scroller.scrollTo('start', {
        duration: 1500,
        delay: 100,
        smooth: true,
      })
      that.playSong('episode4/song1')();
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
    var songOneHandler = this.playSong('episode4/song1');
    var songTwoHandler = this.playSong('episode4/song2');
    var songThreeHandler = this.playSong('episode4/song3');
    var songFourHandler = this.playSong('episode4/song4');

    return (
      <div name='episode4' id='episode4'>
        <img src="/img/track-10.gif" id="scene-1" className="episodeImages trackImages extraTopPadding" onClick={songOneHandler}/>
        <div className="episodeText" id="start">
          As the monk’s chanting grows and envelops the church, Lazer Eyes is speechless. For so long he felt cast out by his fellow man. 
          For so long he could not even comprehend his own transformation. Half weapon, half man and yet a full abomination doomed to peck 
          at the heels of civilization for eternity, or so he thought. Never in a million years would he have thought himself a hero, though 
          given the odds of striking that Lazer rock, one supposes that anything is possible. As the chanting increases to its highest intensity 
          and the church is completely filled with monks, Lazer Eyes moves to the center of the crowd and closes his eyes. His head tilts back 
          as he is lulled by the cacophonous chanting, as the candles lining the walls wash the room in a dim yellow light. The monks begin to
          move in a tantric dance, stepping deliberately and gesticulating with their arms and legs between freezing in motion as though to a 
          beat. Their stomping and chanting grows louder and louder, till suddenly, overcome with the ancient summoning power of the ritual, 
          Lazer Eyes unleashes a massive beam up through the thatched roof of the church and out into space. When Lazer Eyes looks back down 
          around him, all of the monks are on a knee waiting for him to speak:
        </div>
        <img src='/img/Lazers-to-the-sky.jpg' className='episodeImages'/>
        <div className="episodeText">

            “So now what?”
            {'\n\n'} 
            “Now what?” Replies the head monk
            {'\n\n'} 
            “What am I supposed to do? What does the prophecy fortell?”
            {'\n\n'} 
            “That a man with your supreme power would, blessed by most holy God, be set among us,” the head monk responds yet again reciting from memory. 
            {'\n\n'}
            “Ok but after that?” Lazer Eyes impatiently responds 
            {'\n\n'} 
            “What do you mean after that? Surely there will be no after that, surely this is the end of days! Rejoice!” The monk says as the other monks begin to echo his enthusiasm by sporadically yelling from the crowd. 
            {'\n\n'} 
            “So…” Lazer Eyes trails off
            {'\n\n'} 
            “So…” The monk echoes him
            {'\n\n'} 
            “So what happens now” 
            {'\n\n'} 
            “Oh how little you know of yourself chosen one. The end of days is the end of days, our most holy God has given us the sign, he has fulfilled the prophecy, and now he will send his hordes to determine the good from the evil.”
            {'\n\n'} 

            After a long pause, “Ok… When?” Lazer Eyes asks bluntly
            {'\n\n'} 

            “Only a man chosen as yourself has such boldness to question our Lord, surely it will be but a few minutes.”
            {'\n\n'} 

            1 Hour Later …
            {'\n\n'} 

            “Ok what specifically did the prophecy say about the end of days?” Lazer Eyes asks the monk clearly growing impatient. 
            {'\n\n'} 

            “Well, not so much about the end of days as it does about the coming of the chosen one,” the monk replies.
            {'\n\n'} 

            “Ok, but what does it say exactly?”
            {'\n\n'} 

            “Well, nothing”
            {'\n\n'} 

            “Nothing?!” Lazer Eyes asks turning sharply to the monk. 
            {'\n\n'} 

            “But I just had a hunch.”
            {'\n\n'} 

            “So this prophecy which you are all here to protect and uphold, it just ends right as the chosen one shows up?”
            {'\n\n'} 

            “Well you see, oh chosen one, it’s been so many years since anyone here could read or write in Latin, let alone speak it that… well… I must confess we have lost much great knowledge over the generations.”
            {'\n\n'} 

            “So there is an ending to the prophecy.” 
            {'\n\n'} 

            “Yes yes of course. Alas, oh chosen one, you make me bear my deepest secrets to the congregation and our most holy God, but I do not know the answer which you seek.”
            {'\n\n'} 

            “Is there anyone who might know? Are there any other churches?”
            {'\n\n'} 

            “There is but one who knows the way forward. They say he has lived alone up to the north on his iceberg for centuries, maintaining the climate through sheer force of will. You must seek him out to find your answers. His name is William. But know, oh chosen one, that he is a lonely lonely soul and will likely require you to live and  train with him for several weeks in return for his wisdom” 
            {'\n\n'} 
            “Farewell then, monks, and fear not for I will return with our next plot point” 
            {'\n\n'} 

            Without another word, Lazer Eyes runs out of the church and following the North Star heads off to find William and the answers to his questions.

        </div>
        <img src="/img/track-11.gif" className="episodeImages trackImages" onClick={songTwoHandler}/>

        <div className="episodeText">
        After many hours trudging through the forest, Lazer Eyes begins to notice that the trees are thinning out. The few remaining are devoid of leaves or really any signs of life, almost as though they were being subjected to a never ending winter. Finally the trees disappear completely and Lazer Eyes finds himself staring out onto a vast wasteland with the occasional boulder providing the only relief from what seems like an ocean of frozen dirt.  Lazer Eyes scans back and forth and sees what looks like a cliff just above the horizon line, wondering to himself how much farther this William could be. As the cliffs grow larger and begin to loom over the flat land below, Lazer Eyes realizes that he is fast approaching the what is unmistakably the largest Iceberg he has ever seen. 
        {'\n\n'} 

        Suddenly a booming voice echoes out over the land enveloping Lazer Eyes where he stands:
        {'\n\n'} 

        “You There!”
        {'\n\n'} 

        Lazer eyes looks around to see if there is anyone else to whom the disembodied voice may be referring. Just as he realizes that he is alone and has been for some time now, the voice continues.
        {'\n\n'} 

        “You, yes you, the one with the trendy hair. What do you want?”
        {'\n\n'} 

        Lazer Eyes shouts back, not sure where to direct his question, “Is this… are you… I’m looking for William, do you know where I can find…” 
        {'\n\n'} 

        Lazer Eyes jumps back in fear as out of thin air, a polar bear appears in front of him wearing super cool sunglasses. 

        
        </div>
        <img src='/img/william-appears.jpg' className='episodeImages'/>


        <div className="episodeText" id="scene-2">
        “Stop shouting bro, I’m right here.”
        {'\n\n'} 

        Lazer Eyes stands speechless.
        {'\n\n'} 

        “Well, what's good, what's up?”
        {'\n\n'} 

        “I’m looking for William?”
        {'\n\n'} 

        “You found him” the bear responds.
        {'\n\n'} 

        Lazer Eyes is still totally dumbfounded. 
        {'\n\n'} 

        “Yo, I have shit to do what's the word?” The polar bear asks impatiently.
        {'\n\n'} 

        “Oh… Uh… well I was just with these monks who told me to find you so that you can train me. If that’s ok with you of course,” Lazer Eyes says.
        {'\n\n'} 

        William the polar bear lowers his glasses for a second and gives Lazer Eyes the once over before returning them to the bridge of his nose. “You look like you’re pretty thin, pretty good shape, not much for me to do training wise. Besides the cold yoga classes are sold out for like two months man,” he says flatly. 
        {'\n\n'} 

        “No not like fitness training, like training training.” 
        {'\n\n'} 

        “Oh training training…”
        {'\n\n'} 

        “You know what, its fine I think I might be at the wrong iceberg.”
        {'\n\n'} 

        “You sure? If you’re looking for William’s Berg, I’m William, this is my Berg.”
        {'\n\n'} 

        “Well you see these Monks seemed pretty adamant that I come here to train with you in order to harness my powers.”
        {'\n\n'} 

        “Powers?”
        {'\n\n'} 

        “Yea…” Lazer Eyes shoots a beam from his eyes and it begins boring a hole in the side of the iceberg. 
        {'\n\n'} 

        “Hey! Hey! Careful! This iceberg doesn’t freeze itself.” 
        {'\n\n'} 

        “What? How does it stay an iceberg?”
        {'\n\n'} 

        “Sheer force of will…”
        {'\n\n'} 

        Lazer eyes nods in feigned understanding. 
        {'\n\n'} 

        “So you can train me?”
        {'\n\n'} 

        “Well I have one question first before I agree? Why are you training?”
        {'\n\n'} 

        “Well, the prophecy…”
        {'\n\n'} 

        “No shit, I totally forgot about that…”
        {'\n\n'} 

        “And to rescue the woman I love.” 
        {'\n\n'} 

        “Yea? How long you guys been together?”
        {'\n\n'} 

        “Well we’re not exactly together”
        {'\n\n'} 

        “But you love her?”
        {'\n\n'} 

        “Yea it was a love at first sight kind of deal…” 
        {'\n\n'} 

        “Gay.. jk man that was a test I’m totally against homophobia.” 
        {'\n\n'} 

        “Oookay.”
        {'\n\n'} 

        “Right and what are you rescuing her from?”
        {'\n\n'} 

        “The Reflektor, he kidnapped her and used her immense social media following to enslave the people of Cityopolis.”
        {'\n\n'} 

        “That guy? He's such a tool.” 
        {'\n\n'} 

        “Yea the whole city is under his thumb as we speak.”
        {'\n\n'} 

        “And this all just happened, man I gotta get out more.”
        {'\n\n'} 

        “So…”
        {'\n\n'} 

        “Yea training training, let’s get to it.”

        </div>
        <img src="/img/track-12.gif" className="episodeImages trackImages" onClick={songThreeHandler}/>

        <div className="episodeText">
        Lazer eyes and William suddenly teleport to an igloo somewhere on top of the iceberg.  Before Lazer Eyes begins, William turns towards him.
        {'\n\n'} 

        “You must wear this Righteous Lazer-Repellent Blind-Fold of Destiny;" said William, handing Lazer Eyes a vaguely luminescent bandanna. "It will restrain even the mightiest of lazer beams, and can only be penetrated by a lazer beam emanating from the purest, most righteous heart. I've taught you all that I can, this path is one you must walk alone. When you are ready, you will know..."
        {'\n\n'} 

        An epic training montage ensued, and after vigorously and repeatedly lifting objects ranging from sedans to massive glaciers with sheer lazer-will only to place them back back down, William finally raised his hand signal Lazer Eyes to pause his training. Lazer Eyes dropped the glacier he had heaved above his head, accidentally blocking the path of a flowing stream and diverting the rivers flow to a previously lifeless tundra, that would in several hundred years team with life as a result. 

        
        </div>
        <img src='/img/lazer-training-iceberg.gif' className='episodeImages'/>
        <img src='/img/lazer-training-ridge.gif' className='episodeImages'/>
        <div className="episodeText">
        
            "You have learned much, young Lazer Eyes," roared the mighty Wiliam, "but there is one last lesson I must teach you before you are ready to face the dastardly Reflektor, for in his eyes, you will face something much more dangerous than the petty perspective of a pathetic narcissist, you will face yourself. Now is the moment for you to decide what kind of person you will be, for whoever looks into the eyes of the Reflektor will have their true essence reflected back at them - their weakness and human frailties, their fears and selfish aspirations will overpower them. This has been the source of the Reflektor's power, and this will be your fate too, unless you are able to become the hero we need, and stare the Reflektor straight in the eyes with only righteousness in your heart. Then, and only then, as your own righteousness reflects back at you, increasing your power through positive feedback rather than weakening your resolve through the amplification of your then-conquered former-weaknesses, will you be able to shoot a lazer beam righteous enough to shatter the vile villain's armor!"
            {'\n\n'}

            With that, with the Righteous Lazer-Repellent Blind-Fold of Destiny around his eyes, Lazer Eyes climbed to the top of a nearby mountain. There, he sat cross legged, and began to stream lazers from his eyes. The blind-fold began to heat, but would not break. For forty days and forty nights the lazers streamed from Lazer Eye's lazer-eyes, and still the blind-fold held.


        
        </div>
        <img src='/img/LAZER-power-up-v2.gif' className='episodeImages'/>

        <div className="episodeText">
        
            But then, as the sun rose on the morning of the 41st day, his heart pure, his resolve strong, his gaze righteous, Lazer Eyes, having cleansed his mind of all weakness and non-righteousness, turned his gaze sky-ward and blasted two holes through the Righteous Lazer-Repellant Blind-Fold of Destiny, lighting up the sky and transforming the blind-fold into the mighty Lazer Jacket of Righteous Glory, a symbol of his inadequacy transmuted into a symbol of his metamorphosis!


        </div>
        <img src='/img/EP4-blindfold.gif' className='episodeImages'/>
        <img src="/img/track-13.gif" className="episodeImages trackImages" onClick={songFourHandler}/>
        <div className="episodeText">
        Ceasing the stream of lazers, he lowers his gaze to the horizon, looking off, it is focused and intense.William gave Lazer Eyes one last look, and with a graceful gesture by his mighty paw, shoved his ice berg off from the coast. Lazer Eyes watched as he drifted away, disappearing into the slowly warming ocean. 

        </div>
        <img src='/img/lazer-eyes-leaves.gif' className='episodeImages'/>
        <div className="episodeText">
        Lazer Eyes now knows where he must go, what he must do, and as he floats off towards Cityopolis (yes, he can fly now), his mind is calm, his thoughts ordered, the noise of his fears and desires quieted and replaced by the steady righteous pulse of lazer-beats. 

        </div>
        <img src='/img/lazer-eyes-eyes.gif' className='episodeImages'/>



        

      </div>
    );
  }
})


export default Episode4;



