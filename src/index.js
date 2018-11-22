import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBGtNIoIu5T4SW9I5yYVV6ts9IKoFhbbJo';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('reactjs')
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: {term}}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }
    render() {
        const VideoSearch = _.debounce((term) => {this.videoSearch(term)},300)
        return (
         <div>
             {/*<SearchBar onSearchTermChange = {term => this.videoSearch(term)}/> non throttled search*/}
             <SearchBar onSearchTermChange = {VideoSearch}/>
             <VideoDetail video={this.state.selectedVideo} />
             < VideoList
                 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                 videos={this.state.videos} />
         </div>
        )
    }
}

//Dumb component
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

ReactDOM.render(<App />, document.querySelector('.container'));