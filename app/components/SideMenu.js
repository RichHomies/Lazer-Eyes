import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import meta from './sideMenuJson';
import SideMenuEpisodes from './SideMenuEpisodes';

var RadiumLink = Radium(Link);
var Menu = require('react-burger-menu').push;

var SideMenu = React.createClass({
  getInitialState : function(){
    return {
      isOpen : false
    }
  },

  render: function() {
    var episodes = this.props.episodes;
    var isMenuOpen = this.props.isMenuOpen;
    var that = this;
    var renderedEpisodes = this.renderedEpisode();

    return (
      <div id='outer-container'>
        <Menu isOpen={this.state.isOpen} customBurgerIcon={ <img src="/img/rsz_lazereyeslogo-menu-button.gif" /> } pageWrapId={ "page-wrap" } width={'50vw'} >
          <div className='sideMenuItems'>
            <RadiumLink id="home" className="bm-item-list" to={'/'}><img className='lazerEyesMenuLogo' src="/img/LazerEyesLogoV3-in-menu.gif" /></RadiumLink>
          </div>
          <div className='menuListContainer'>
            <div className='episodesHeader sideMenuItems'>
              <RadiumLink onClick={this.isMenuOpen} to={'/GiftShop'}>GIFT SHOP</RadiumLink>
            </div>
            <div className='episodesHeader sideMenuItems'>
              <RadiumLink onClick={this.isMenuOpen} to={'/GiftShop'}>CREDIT</RadiumLink>
            </div>
            <div className='episodesHeader sideMenuItems'>EPISODES</div>
            <div className='sideMenuItems'>
              {renderedEpisodes}
            </div>
          </div>
        </Menu>
      </div>
    );
  },
  renderComponents : function(){

  },
  renderedEpisode : function(){
    var metaEpisodes = meta.episodes;
    console.log(metaEpisodes)
    metaEpisodes.map(function(metaEpisode){
      return <SideMenuEpisodes episodesMeta={metaEpisode.episodeMeta} className={metaEpisode.className} />;
    });
  },
  isMenuOpen : function(state){
    this.setState({isOpen: !isOpen});
  }
})

export default SideMenu;