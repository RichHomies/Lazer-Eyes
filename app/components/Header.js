import React from 'react';
import lazereyesGif from './assets/lazereyes';

var Header = React.createClass({
    render: function() {
        return ( 
            <div>
            <div id='headerImageContainer'>
                <img id='headerimg' src={lazereyesGif} />
            </div>
                <div className='pink'>
                <span>Episode 1</span>
                </div>
            </div>
        );
    }
})


export default Header;