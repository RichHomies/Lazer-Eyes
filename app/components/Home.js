import React from 'react';
import Header from './Header'
import Episodes from './Episodes'
import AudioPlayer from './AudioPlayer'
import SideMenu from './SideMenu';
import EpisodeList from './EpisodeList';
import episodes from './episodesMeta';
import Footer from './Footer';



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
            componentDidMount: function() {
                //since the page is loaded, we set the state based on the url params
                if (window.location.search.length !== 0) {
                    setState({
                        currentSong: window.location.search
                    })
                }
            },
            render: function() {
                var childrenComponents = this.prepareChildrenComponents();
                return ( < div >
                        < SideMenu episodes = {
                            episodes
                        }
                        changeSong = {
                            this.changeSong
                        }
                        />
        <Header / >
                        < EpisodeList list = {
                            episodes
                        }
                        />
        <AudioPlayer currentSong={this.state.currentSong}/ > {
                            childrenComponents
                        } < Footer / >
                        < /div>
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
  }
})

export default Home;