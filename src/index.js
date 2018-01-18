import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD71W-Ig0hmg3ieMNeGPaDQwmaNbAZ9slE';

// Create a new component (view)
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take the component's HTML and put it in the Document Object Model
ReactDOM.render(<App />, document.querySelector('.container'));
