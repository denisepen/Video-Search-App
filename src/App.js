import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video_detail';

const  API_KEY = 'AIzaSyCWpqY58-mPbgAcyGjpFs2Bv64CVS4dybU';


class App extends Component {
  constructor(){
    super()

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('curls')
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term},
    (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Hello</h2>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({
            selectedVideo
          })}
        videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;

// original youtube search func
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//   console.log(data);
// })
