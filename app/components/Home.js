import React from 'react';
import Header from './Header'
import Episodes from './Episodes'
import AudioPlayer from './AudioPlayer'

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
    return (
      <div>
        <Header />
        <Episodes 
          currentEpisode={this.state.currentEpisode }
          changeEpisode={this.changeEpisode}
        />
        <AudioPlayer 
          currentEpisode={this.state.currentEpisode}
        />
      </div>
    );
  }
})

export default Home;
