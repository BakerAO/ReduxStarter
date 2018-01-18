import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD71W-Ig0hmg3ieMNeGPaDQwmaNbAZ9slE';


// Create a new component (view)
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surf'}, (videos) => {
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take the component's HTML and put it in the Document Object Model
ReactDOM.render(<App />, document.querySelector('.container'));
