import React from 'react';
import lazereyesGif from './assets/lazereyes';

var Header = React.createClass({
    render: function() {
        return ( 
            <div id='headerImageContainer'>
                <img id='headerimg' src={lazereyesGif} />
            </div>
        );
    }
})


export default Header;