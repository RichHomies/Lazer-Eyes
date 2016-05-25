import React from 'react';
import lazereyesGif from './assets/lazereyes';

var Header = React.createClass({
    render: function() {
        return ( < div id = 'headerImageContainer' >
            <img id='headerimg' src={'/img/LazerEyesLogoV3-square.gif'}/>
            </div >
        );
    }
})


export
default Header;