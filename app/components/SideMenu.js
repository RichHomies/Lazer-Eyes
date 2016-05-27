import React from 'react';

var Menu = require('react-burger-menu').push;

var SideMenu = React.createClass({
  render: function() {
    return (
      <Menu customBurgerIcon={ <img src="/img/rsz_lazereyeslogo-menu-button.gif" /> } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
})

export default SideMenu;
