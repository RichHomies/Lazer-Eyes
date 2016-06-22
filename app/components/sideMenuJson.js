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
    episodes: [{
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
                songTitle: 'Lazer Eyes (Main Theme)',
                songPath: '/audio/3. Lazer Eyes Main Theme.m4a',
                number: 3,
                urlPath: 'episode1/song3'
             }]
          }
        }
    ]
};


export default menu;