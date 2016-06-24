import React from 'react';

var Footer = React.createClass({
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div id="footer">
        Lazer Eyes, an electronic dance opera in 5 parts is presented by Van Broh and the Lazer Men.

        <br></br>
        <br></br>
        <div id="socialMediaIconsContainer">
          <a className="centerIcons fa fa-facebook socialMediaIcons" href="https://www.facebook.com/lazersforeyes" target="_blank"></a>
          <a className="centerIcons fa fa-twitter socialMediaIcons" href="https://twitter.com/lazersforeyes" target="_blank"></a>
          <a className="centerIcons fa fa-soundcloud socialMediaIcons" href="https://soundcloud.com/lazersforeyes" target="_blank"></a>
          <a className="centerIcons fa fa-instagram socialMediaIcons" href="https://www.instagram.com/lazersforeyes/" target="_blank"></a>
        </div>
        <br></br>



        ALL CHARACTERS AND EVENTS IN THIS EPIC -- EVEN THOSE BASED ON REAL PEOPLE -- ARE ENTIRELY FICTIONAL.
        LAZER EYES CONTAINS COARSE LANGUAGE AND DUE TO ITS ABSURD CONTENT SHOULD NOT BE VIEWED OR LISTENED TO. BY ANYONE.
      </div>
      )
  }

})

export default Footer;