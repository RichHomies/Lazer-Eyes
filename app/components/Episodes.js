import React from 'react';
import Episode1 from './Episode1';


var Episodes = React.createClass({
  render: function() {
    return (
      <main>
        <Episode1 
          currentEpisode={this.props.currentEpisode }
          changeEpisode={this.props.changeEpisode}
        />
      </main>
    );
  }
})


export default Episodes;

