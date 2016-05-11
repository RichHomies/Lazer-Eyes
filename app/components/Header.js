import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <h1>
              <i className="fa fa-heart"></i>
              ScrollMagic Demos
              <i className="fa fa-magic"></i>
            </h1>
            <hr></hr>
            <h2>CSS ClassName Toggles</h2>
            <p className="lead">ScrollMagic also lets you easily toggle as many classes as you want when the Scene is activated via the scroll event. This is super handy for doing some complex stuff without the additional JavaScript</p>
          </div>
        </div>
        <i className="fa fa-angle-double-down"></i>
      </header>
    );
  }
})


export default Header;

