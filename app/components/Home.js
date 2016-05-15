import React from 'react';
import Header from './Header'
import Episodes from './Episodes'

var App = React.createClass({
  getInitialState: function() {
    //state is null originally, until page loads
    return {
      currentEpisode: null
    }
  },
  changeEpisode: function(newEpisode) {
    this.setState({currentEpisode: newEpisode})    
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
      </div>
    );
  }
})

export default App;
