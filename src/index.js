import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAmXdSXOGs_L0cbBNZ-hGPWcv9fHqEDUAA';

YTSearch({key: API_KEY, term: 'surfboards'}, data => console.log(data))


//Create a new component. Shoud produce html

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//Take this component's generated html and put it in the dom

ReactDOM.render(<App />, document.querySelector('.container'));