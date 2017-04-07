var episode1Object =  {
        className: 'episodesHeader',
        episodesMeta: {
            episodeName: {
                title: 'Genesis',
                number: 'I',
                path : '/episodes/Genesis'
            }, 
            songs: [{
                songTitle: 'Dream A Dream of Lazers',
                songPath: '/audio/1. Dream A Dream of Lazers.m4a',
                number: 1,
                urlPath: 'episode1/song1'
            }, {
                songTitle: 'Down in Appalachia',
                songPath: '/audio/2.%20Down%20In%20Appalachia.m4a',
                number: 2,
                urlPath: 'episode1/song2'
            }, {
                songTitle: 'Lazer Eyes',
                songPath: '/audio/3. Lazer Eyes Main Theme.m4a',
                number: 3,
                urlPath: 'episode1/song3'
             }]
          }
        };

var episode2Object =  {
        className: 'episodesHeader',
        episodesMeta: {
            episodeName: {
                title: 'Crazy Stupid Lazers',
                number: 'II',
                path : '/episodes/Crazy-Stupid-Lazers'
            }, 
            songs: [{
                songTitle: 'Oh My Lazer Eyes',
                songPath: '/audio/1.%20oh%20my%20lazer%20eyes%201.3.wav',
                number: 4,
                urlPath: 'episode2/song1'
            }, {
                songTitle: 'In Your Eyes',
                songPath: '/audio/2.%20In%20Your%20Eyes%201.1.wav',
                number: 5,
                urlPath: 'episode2/song2'
            }, {
                songTitle: "Eyes Can't See",
                songPath: '/audio/3.%20Eyes%20Can%27t%20See%201.1.wav',
                number: 6,
                urlPath: 'episode2/song3'
             }]
          }
        };

var episode3Object =  {
        className: 'episodesHeader',
        episodesMeta: {
            episodeName: {
                title: 'The Empire Strikes Repeatedly',
                number: 'III',
                path : '/episodes/The-Empire-Strikes-Repeatedly'
            }, 
            songs: [{
                songTitle: 'Just Give Me Your Body',
                songPath: '/audio/Just%20Give%20Me%20Your%20Body%201.m4a',
                number: 7,
                urlPath: 'episode3/song1'
            }, {
                songTitle: 'Rainy Day (About You)',
                songPath: '/audio/Rainy%20Day%20%28About%20You%29%201.m4a',
                number: 8,
                urlPath: 'episode3/song2'
            }, {
                songTitle: "The Prophecy",
                songPath: '/audio/The%20Prophecy%201.m4a',
                number: 9,
                urlPath: 'episode3/song3'
             }]
          }
        };

var episode4Object =  {
        className: 'episodesHeader',
        episodesMeta: {
            episodeName: {
                title: 'Lazerus Maximus',
                number: 'IV',
                path : '/episodes/Lazer-Maximus'
            }, 
            songs: [{
                songTitle: "It's Coming To Life",
                songPath: '/audio/It%27s%20Coming%20To%20Life.m4a',
                number: 10,
                urlPath: 'episode4/song1'
            }, {
                songTitle: 'Feel The Burn',
                songPath: '/audio/Feel%20The%20Burn.m4a',
                number: 11,
                urlPath: 'episode4/song2'
            }, {
                songTitle: "Lazers for Eyes (Eyes for Lazers)",
                songPath: '/audio/Lazers%20for%20Eyes%20%28Eyes%20for%20Lazers%29.m4a',
                number: 12,
                urlPath: 'episode4/song3'
             }, {
                songTitle: "Save the Night",
                songPath: '/audio/Save%20the%20Night.m4a',
                number: 13,
                urlPath: 'episode4/song4'
             }]
          }
        };

var episode5Object =  {
        className: 'episodesHeader',
        episodesMeta: {
            episodeName: {
                title: 'The Day the Earth Stood Still with Lazers',
                number: 'V',
                path : '/episodes/The-Day-the-Earth-Stood-Still-with-Lazers'
            }, 
            songs: [{
                songTitle: "Oh My Lazer Eyes Pt. 2",
                songPath: '/audio/14.%20Oh%20My%20Lazer%20Eyes%201.m4a',
                number: 14,
                urlPath: 'episode5/song1'
            }, {
                songTitle: 'The Lazer Beam of Destiny',
                songPath: '/audio/15.%20The%20Lazer%20Beam%20of%20Destiny%201.m4a',
                number: 15,
                urlPath: 'episode5/song2'
            }, {
                songTitle: "#Newsflash",
                songPath: '/audio/16.%20%23Newsflash%201.m4a',
                number: 16,
                urlPath: 'episode5/song3'
             }, {
                songTitle: "Man of the Skies",
                songPath: '/audio/17.%20Man%20of%20the%20Skies%201.m4a',
                number: 17,
                urlPath: 'episode5/song4'
             }]
          }
        };

var menu = {
    links: [{
        type: 'link',
        linkText: 'GIFT SHOP',
        path: '/GiftShop',
        className: 'episodesHeader'
    }, {
        type: 'link',
        linkText: 'CREDITS',
        path: '/Credits',
        className: 'episodesHeader'

    }],
    episodes: [episode1Object, episode2Object, episode3Object, episode4Object, episode5Object]
};

menu.songs = menu.episodes.map(function(episode){
        return episode.episodesMeta.songs;
    }).reduce(function(accum, episode){
        return accum.concat(episode);
    }, []);

export default menu;