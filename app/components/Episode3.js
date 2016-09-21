import React from 'react';
import Scroll from 'react-scroll'; 

var scroll = Scroll.animateScroll;
var Element = Scroll.Element;
var scroller = Scroll.scroller;

var Episode3 = React.createClass({
  componentDidMount: function() {
    var that = this
    $(function() {

      scroller.scrollTo('episode3', {
        duration: 1500,
        delay: 100,
        smooth: true,
      })

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
    var songOneHandler = this.playSong('episode3/song1');
    var songTwoHandler = this.playSong('episode3/song2');
    var songThreeHandler = this.playSong('episode3/song3');
        
    return (
      <div name='episode3' id='episode3'>
        <img src="/img/track-7.gif" id="scene-1" className="episodeImages trackImages extraTopPadding" onClick={songOneHandler}/>
        <div className="episodeText" id="scene-1">
        "It's a trap!" shouts the Admiral Ackbar in Lazer Eyes subconscious. But its too
         late, he and Lazer Babe are surrounded by minions, and not the annoying yellow 
         tic-tac puffy-centaur nonsense-speaking kind – no, by disheveled mind-controlled 
         minions of the dastardly Reflektor, would-be proud sons and daughters of 
         humanity reduced to mindless seekers, which is clearly the more disturbing type 
         of minion. Well. That's debatable actually. 
         {'\n\n'} 
         Thus, Lazer Eyes and Lazer Babe, proud 
         warriors for Justice, now prisoners, are ushered by a crowd of mindless minions 
         down a long dark hallway. At the end of the hallway is an elevator, a private 
         elevator clearly installed to satisfy the demands of a very self-absorbed person's
        nauseatingly insecure subconscious, and after an excruciatingly long ride accompanied 
        by one and a half tracks from a tenor-saxophone Phil Collins cover CD, the elevator 
        doors open, revealing a mirrored throne room at the top floor of the highest tower of the Tower. 
        {'\n\n'} 
        The space is elegantly designed, with all of geometric lines drawing the attention of the entrant toward a 1960's moderne-chic leather arm chair, in which sits, sporting a Steve-Jobs turtle-neck and the emitting the debonair nonchalance of the dastardliest of villains, the Reflektor. 

        </div>
        <img src='/img/reflektor-seated.gif' className='episodeImages'/>
        <div className="episodeText">

            "I am the Reflektor, and I'm here to take control," he sneers villainously, "just give me your body, and I will protect your soul." 
            {'\n\n'} 
            "I'll never join you!"    Lazer Eyes defiantly responds. 
            {'\n\n'} 
            "I don't need you to join me, I just need you to succumb like the inconsequential insect you are. Accept your own irrelevance in my new era of hyperreal interconnectedness, or don't and die spiteful and alone with no followers. Either way, I simply can't let you leave with Lazer Babe though. You see, with her enormous social-media following at my disposal, nothing will stand in my way."
            {'\n\n'} 
 
            "Why are you doing this, dastardly Reflektor?"
            {'\n\n'} 
            "Silly Lazer Eyes, why does anyone do anything? FOMO. With all of humanity connected through a matrix-borg-hive-mind, no one's experiences will be their own, and no one will ever have to face the horrible Fear-Of-Missing-Out. Peace, equality, homogeneity, humanity craves these but is incapable of achieving them without my help, and for this I must harness the power of Lazer Babes' twitter and Instagram presence! It is my destiny to be the catalyst of such great change, my capacity to see only myself in all others that earned me my name and will set humanity free! Ah, sweet irony! Her colorful individuality will become the narcissism-fueled vehicle of harmonious homogeneity! LOLOLOLOL!"
            {'\n\n'} 
            As the Reflektor revels in his evil-villain-cackle, for which he passes up the traditional "muahahaha" and instead literally repeats "LOL," Lazer Eyes notices that all of his mindless minions are mimicking everything the Reflektor says in creepy unison...
            {'\n\n'} 

            Lazer Eyes is shocked by the hatefulness of the Reflektor's cruelty and pessimism. If his great, enduring love for Lazer Babe has taught him anything, it is that every individuality is precious, every flaw apparent in truth an aspect of the unknowable, complex and yet specific perfection of our stochastic universe. Pain and pleasure each the inevitability of the other's passing. Strengthened by his love, armed with Lazers for eyes, he knows what he must do. 
            {'\n\n'} 
            Summoning his greatest strength, Lazer Eyes conjurs a beam of such lazer fury and unleashes the righteous vengeance of Justice on the Reflektor. At the last minute, the Reflektor raises his hand, and using his reflective palm, redirects the beam back towards its source...
        
        </div>
        <img src='/img/lazer-eyes-shot-out.jpg' className='episodeImages'/>
        <img src="/img/track-8.gif" className="episodeImages trackImages" onClick={songTwoHandler}/>

        <div className="episodeText">

            His head aching, he grudgingly opens his eyes to behold the reality of his defeat (and incur the wrath of the light-sensitivity symptomatic of the kind of extreme 
            concussion he had just received). Looking at the path of destruction plowed through the forest by the landing of his unconscious body after it had been propelled miles from the Cityopolis Tower by the redirected force of his own god-like Lazer strength, he thinks to himself, Is it better to have loved and lost, than never to have lazer loved at lazer all? 
            {'\n\n'}
            For what might as well be an eternity, he wanders the virgin wilderness of his mind, and also of the unoccupied literal wilderness outside the city limits. He longs for the benign ennuie that had once saturated his dormant heart. Oh! Anon! That Lazer-Babe had not awakened his passions and his better nature! For compared with that blissful emptiness of yore; that borne of this new loss tears at him from within with the furious destruction of the vacuum of space... He has failed, he is weak, and defeated, Lazer Babe remains prisoner of the dastardly Reflektor. 

        
        </div>
        <img src='/img/rain-and-sadness.gif' className='episodeImages'/>


        <div className="episodeText" id="scene-2">
        
            The tears stream so steadily from his eyes, he cannot tell if it is actually raining. In fact, it is not raining, it is a beautiful day. But he is so disoriented by his emotional distress and crisis of confidence that he becomes convinced it is actually raining, and strikes out across the landscape, seeking shelter from the storm that rages in his mind...

        </div>
        <img src="/img/track-9.gif" className="episodeImages trackImages" onClick={songThreeHandler}/>

        <div className="episodeText">
        
           Stumbling through the forest, drenched by the possibly-imaginary rain that is in any case a very real symbol of his inner-torment, Lazer Eyes becomes more and more lost, literally and figuratively. Wihtout realizing it, he is drawn in the direction of a soft, low sound of harmony.
        
        </div>
        <img src='/img/mountain.jpg' className='episodeImages'/>
        <div className="episodeText">
        
            Soft at first but now louder, he becomes aware of its mysterious guiding existence, finding himself outside the gates of what looks to be a misplaced 13th century monastery deep in the mountains. Sensing the proximity of fate, and reassured by the strangely familiar chanting leaking from the structure, he knocks on the door, which after a brief pause is opened by a small man draped in monk's robes. 
Looking up from beneath his hood, a look of shock gives way to awe, and in turn joy in the monk's eyes. From deeper in the structure, he can now almost make out the words of the chant that had brought him to this place...
            {'\n\n'}
            "Sol habet oculos, et cor habet aquilem.... 
            {'\n\n'}
                       ...toros totidem habeat fortitudinem"
            {'\n\n'}

            "What does it mean?" Lazer Eyes asks the stunned monk."
            {'\n\n'}
            The monk puts his arm around Lazer Eyes' shoulder, and gesturing towards an invisible horizon explains that roughly translated, it means: 
            {'\n\n'}
            "He has the eyes of the sun, and the heart of the eagle...
            {'\n\n'}
                   ...he has the strength of many bulls..."


        
        </div>
        <img src='/img/Lazer-Monks.gif' className='episodeImages'/>

        <div className="episodeText">
        
            The monk goes on to explain that this was in fact one interpretation amongst many. In the 30 generations since his order, the Order of the Lazer Monks had journeyed from the Olde Worlde, there had been lots of time to debate the many possible meanings of the prophecy handed down to them. For instance, the literalist school of thought had arisen several generations ago, asserting that the prophecy must be translated literally: "The Sun has eyes, the heart has eagle... many bulls have strength". As important as this scholarly debate was, in truth no member of the order had ever disputed their true purpose since the great prophecy had first been handed down: it was their destiny to await the Lazer Messiah here, in Bestchester County outside Cityopolis, so that in his moment of need, they could show him the next step on his journey to defeat evil and restore balance to the force. I mean society.

            {'\n\n'}
            Word is spreading quickly amongst the brother-(and sister, these monks are actually gender-neutral monks...)-hood that the Lazer One has finally come, and the chanting grows steadily louder and more excited. Lazer Eyes is drawn into a 
            large chamber, and as the monks encircle him, chanting ever louder, he feels his strength returning... not only that, he feels the pull of destiny...
            

        </div>
        

      </div>
    );
  }
})


export default Episode3;



