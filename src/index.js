import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyAmXdSXOGs_L0cbBNZ-hGPWcv9fHqEDUAA';


//Create a new component. Shoud produce html

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('Star Citizen');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos, 
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                videos={this.state.videos} 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

//Take this component's generated html and put it in the dom

ReactDOM.render(<App />, document.querySelector('.container'));