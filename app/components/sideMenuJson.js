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
                songTitle: "Eye's can't see",
                songPath: '/audio/3.%20Eyes%20Can%27t%20See%201.1.wav',
                number: 6,
                urlPath: 'episode2/song3'
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
    episodes: [episode1Object, episode2Object]
};


export default menu;