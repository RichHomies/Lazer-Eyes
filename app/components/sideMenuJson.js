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
                songPath: '/audio/Just%20Give%20Me%20Your%20Body.wav',
                number: 7,
                urlPath: 'episode3/song1'
            }, {
                songTitle: 'Rainy Day (About You)',
                songPath: '/audio/Rainy%20Day%20%28About%20You%29.wav',
                number: 8,
                urlPath: 'episode3/song2'
            }, {
                songTitle: "The Prophecy",
                songPath: '/audio/The%20Prophecy.wav',
                number: 9,
                urlPath: 'episode3/song3'
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
    episodes: [episode1Object, episode2Object, episode3Object]
};

menu.songs = menu.episodes.map(function(episode){
        return episode.episodesMeta.songs;
    }).reduce(function(accum, episode){
        return accum.concat(episode);
    }, []);

export default menu;