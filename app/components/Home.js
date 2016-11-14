import React from 'react';
import Header from './Header'
import Episodes from './Episodes'
import AudioPlayer from './AudioPlayer'
import SideMenu from './SideMenu';
import EpisodeList from './EpisodeList';
import episodes from './episodesMeta';
import Footer from './Footer';
import createBrowserHistory from 'history/lib/createBrowserHistory';

var mostRecentEpisode = 'episodes/Genesis';

var Home = React.createClass({
            getInitialState: function() {
                //state is null originally, until page loads
                return {
                    currentSong: null
                }
            },
            changeSong: function(newSong) {
                this.setState({
                    currentSong: newSong
                })
            },
            isServer: function() {
             return ! (typeof window != 'undefined' && window.document);
            },
            componentDidMount: function() {
                //since the page is loaded, we set the state based on the url params
                if (window.location.search.length !== 0) {
                    setState({
                        currentSong: window.location.search
                    })
                }
                if (this.isServer()) {
                    setTimeout(function() {
                        let history = createBrowserHistory();
                        history.push(mostRecentEpisode);
                    }, 3000);
                }
                
            },
            render: function() {
                var childrenComponents = this.prepareChildrenComponents();
                var updateCurrentSong = this.updateCurrentSong(this);
                return ( <div>
                            <SideMenu episodes={episodes} changeSong={this.changeSong} currentSong={this.state.currentSong}/>
                            <Header />
                            <EpisodeList list={episodes}/>
                            <AudioPlayer currentSong={this.state.currentSong} updateCurrentSong={updateCurrentSong}/ > {childrenComponents} 
                            <Footer />
                        </div>
    );
  },
  prepareChildrenComponents: function(){
    var changeSong = this.changeSong;
    var that = this; 
    return React.Children.map(this.props.children, function(child){
        return React.cloneElement(child, {
          changeSong : changeSong,
          currentSong: that.state.currentSong
        });
    });
  },
  updateCurrentSong: function(that){
    return function(obj){
        that.setState({currentSong: obj.currentSongUrl});
    }
  }
})

export default Home;