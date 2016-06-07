import React from 'react';
import Header from './Header'
import Episodes from './Episodes'
import AudioPlayer from './AudioPlayer'
import SideMenu from './SideMenu';
import EpisodeList from './EpisodeList';


var episodes = [{name: 'Genesis'}, {name: 'Episode2'}, {name: 'Episode3'}];

var Home = React.createClass({
  getInitialState: function() {
    //state is null originally, until page loads
    return {
      currentEpisode: null
    }
  },
  changeEpisode: function(newEpisode) {
    this.setState({currentEpisode: newEpisode})  
    console.log(this.state.currentEpisode) 
  },
  componentDidMount: function() {
    //since the page is loaded, we set the state based on the url params
    if (window.location.search.length !== 0) {
      setState({currentEpisode: window.location.search})
    }
  },
  render: function() {
    let childrenComponents = this.prepareChildrenComponents();
    return (
      <div>
        <SideMenu episodes={episodes} />
        <Header />
        <EpisodeList list={episodes} />
        <div className="audioContainer">
          <AudioPlayer currentEpisode={this.state.currentEpisode}/>
        </div>
        {childrenComponents}
      </div>
    );
  },
  prepareChildrenComponents: function(){
    var changeEpisode = this.changeEpisode;
    var that = this; 
    return React.Children.map(this.props.children, function(child){
        return React.cloneElement(child, {
          changeEpisode : changeEpisode,
          currentEpisode: that.state.currentEpisode
        });
    });
  }
})

export default Home;
