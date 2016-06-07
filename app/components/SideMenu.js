import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

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
    var episodeListComponents = episodes.map(function(episode, index){
      return <RadiumLink onClick={that.isMenuOpen} key={index} className={'bm-item-list'} to={'/episodes/'+episode.name.toLowerCase()}>{index + 1 + '. ' + episode.name}</RadiumLink>;
    });

    return (
      <div id='outer-container'>
        <Menu isOpen={this.state.isOpen} customBurgerIcon={ <img src="/img/rsz_lazereyeslogo-menu-button.gif" /> } pageWrapId={ "page-wrap" } width={'50vw'} >
          <img className='lazerEyesMenuLogo' src="/img/rsz_lazereyeslogo-menu-button.gif" /> 
          <div className='sideMenuItems'>
            <RadiumLink id="home" className="bm-item-list" to={'/'}>Home</RadiumLink>
          </div>
          <div className='episodesHeader'>Episodes</div>
          <div className='sideMenuItems'>
            {episodeListComponents}
          </div>
        </Menu>
      </div>
    );
  },
  isMenuOpen : function(state){
    this.setState({isOpen: !isOpen});
  }
})

export default SideMenu;