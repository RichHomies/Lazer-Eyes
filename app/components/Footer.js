import React from 'react';

var Footer = React.createClass({
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div id="footer">
        Direct all lazer related inquiries to
        contact@lazersforeyes.com
        <br></br>
        <br></br>
        <i className="fa fa-facebook socialMediaIcons" aria-hidden="true"></i>
        <i className="fa fa-twitter socialMediaIcons" aria-hidden="true"></i>
        <i className="fa fa-soundcloud socialMediaIcons" aria-hidden="true"></i>
        <i className="fa fa-instagram socialMediaIcons" aria-hidden="true"></i>
        <br></br>



        ALL CHARACTERS AND EVENTS IN THIS EPIC -- EVEN THOSE BASED ON REAL PEOPLE -- ARE ENTIRELY FICTIONAL.
        LAZER EYES CONTAINS COARSE LANGUAGE AND DUE TO ITS ABSURD CONTENT SHOULD NOT BE VIEWED OR LISTENED TO. BY ANYONE.
      </div>
      )
  }

})

export default Footer;