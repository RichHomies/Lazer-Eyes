import React from 'react';

var Header = React.createClass({
    render: function() {
        return ( 
            <div>
                <header>
                    <div className="container">
                    <div className="col-md-8 col-md-offset-2"></div>
                    </div >
                </header>
                <div className='pink'></div>
            </div>
        );
    }
})


export default Header;