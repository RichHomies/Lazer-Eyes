import React from 'react';
import Header from './Header'
import Episode1 from './Episode1'

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Episode1 />
      </div>
    );
  }
})

export default App;
