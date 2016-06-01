import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

var RadiumLink = Radium(Link);
var Menu = require('react-burger-menu').push;

var SideMenu = React.createClass({
  render: function() {
    var episodes = this.props.episodes;
    var episodeListComponents = episodes.map(function(episode, index){
      return <a key={index} className={'bm-item-list'} href=''>{index + 1 + '. ' + episode.name}</a>;
    });
    return (
      <div id='outer-container'>
        <Menu customBurgerIcon={ <img src="/img/rsz_lazereyeslogo-menu-button.gif" /> } pageWrapId={ "page-wrap" } width={'35vh'}>
          <img className='lazerEyesMenuLogo' src="/img/rsz_lazereyeslogo-menu-button.gif" /> 
          <div className='sideMenuItems'>
            <a id="home" className="bm-item-list" href="/">Home</a>
            <a id="about" className="bm-item-list" href="/about">About</a>
            <a id="contact" className="bm-item-list" href="/contact">Contact</a>
          </div>
          <div className='episodesHeader'>Episodes</div>
          <div className='sideMenuItems'>
            {episodeListComponents}
          </div>
        </Menu>
      </div>
    );
  }
})

export default SideMenu;