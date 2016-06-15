import React from 'react';

var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
  componentDidMount : function(){
    this.preload();
  },
  isServer: function() {
   return ! (typeof window != 'undefined' && window.document);
  },
  preload : function(){
    // var that = this;
    // if(!this.isServer()){
    //   window.onload = function(){
    //       that.lazyLoad();
    //   };
    // }
  },
  lazyLoad : function(){
    // var heroArray = window.__filesLazyLoad;
    // for(var i = 0; i < heroArray.length; i++){
    //     if('.DS_Store'!== heroArray[i]){
    //       var url = heroArray[i],
    //           img = new Image();
    //           img.src = '/img/' + url;
    //     }
    // };
    // console.log('prefetched');
  }
})

export default App;
